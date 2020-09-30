import React, { useRef, useState } from 'react';
import './style.scss';
import { InputText, KCSModal, TextArea, Notification } from 'components';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/fontawesome-free-solid';
import { useDispatch } from 'react-redux';
import sha256 from 'crypto-js/sha256';
import { hideProgressTurn, showProgressTurn } from 'stores/reducer/progressReducer';
import { UserService } from 'api/UserService';

const md5Hex = require('md5-hex');

const regexPhoneNumber = /^\+?(?:[0-9]??).{9,12}[0-9]/;

const SupportModal = ({ isOpenModal, closeModal }) => {
  const [isOpenModalNotice, setOpenModalNotice] = useState(false);
  const [content, setContent] = useState('');
  const [tab, setTab] = useState(0);
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reflection, setReflection] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsg2, setErrorMsg2] = useState('');
  const [errorMsgOTP, setErrorMsgOTP] = useState('');

  let isRegister = useRef(false);

  const dispatch = useDispatch();

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value)
    const test = regexPhoneNumber.test(value);
    if (!test || value.length > 11) {
      setErrorMsg('Yêu cầu quý khách nhập đúng định dạng số điện thoại');
    } else {
      setErrorMsg('');
    }
  }

  const onReflection = (value) => {
    setReflection(value);
    if (errorMsg2 && value) {
      setErrorMsg2('');
    }
  }

  const onChangeOTP = (value) => {
    setOtp(value);
    if (errorMsgOTP && value) {
      setErrorMsgOTP('');
    }
  }

  const handleRegister = (value) => {
    isRegister.current = value;
    sendOTP();
  }

  const isDisabled = () => {
    return errorMsg || phoneNumber.length === 0;
  }

  const encodeKey = (requestTime) => {
    return sha256(md5Hex(`${phoneNumber}#D0notCall2020@${requestTime}`)).toString();
  }

  const sendOTP = () => {
    if ((tab === 1 || tab === 2) && reflection.trim().length === 0) {
      setErrorMsg2('Vui lòng nhập nội dung phản ánh!');
      return;
    }

    const requestTime = Date.now();
    const data = {
      request_id: requestTime.toString(),
      msisdn: phoneNumber,
      username: 'web',
      key: encodeKey(requestTime)
    };

    dispatch(showProgressTurn());
    UserService.sendOtp(data, res => {
      dispatch(hideProgressTurn());

      if (res.status === '0') {
        setStep(2);
        Notification.success(`Gửi tin nhắn thành công cho thuê bao ${phoneNumber}`);
      } else {
        Notification.error(res.error_desc || "Có lỗi xảy ra vui lòng thử lại!");
      }
    }, () => dispatch(hideProgressTurn()));
  }

  const onOK = () => {
    if (otp.trim().length === 0) {
      setErrorMsgOTP('Vui lòng nhập mã OTP!');
      return;
    }

    let cmdcode = '';
    let msgbody = '';
    if (tab === 1) {
      cmdcode = 'V';
      msgbody = reflection;
    } else if (tab === 2) {
      cmdcode = 'S';
      msgbody = reflection;
    } else {
      cmdcode = isRegister.current ? 'DK' : 'HUY';
      msgbody = isRegister.current ? 'DK DNC' : 'HUY DNC';
    }

    const requestTime = Date.now();
    const data = {
      request_id: requestTime.toString(),
      msisdn: phoneNumber,
      username: 'web',
      cmdcode,
      msgbody,
      otpid: otp,
      key: encodeKey(requestTime),
    };

    dispatch(showProgressTurn());
    UserService.apiReport(data, res => {
      dispatch(hideProgressTurn());

      if (res.error_code === '0') {
        setContent(res.error_desc);
        setOpenModalNotice(true);
      } else if (res.error_code === '405') {
        setErrorMsgOTP(res.error_desc);
      } else {
        setContent(res.error_desc);
        setOpenModalNotice(true);
      }
    }, () => dispatch(hideProgressTurn()));
  }

  const resetValue = () => {
    setPhoneNumber('');
    setReflection('');
    setErrorMsg('');
    setErrorMsg2('');
    setErrorMsgOTP('');
    setStep(1);
    setOtp('');
  }

  const handleCloseNotice = () => {
    setOpenModalNotice(false);
    setTab(0);
    resetValue();
  }

  const handleChangeTab = (tab) => {
    setTab(tab);
    resetValue();
  }

  // TAB === 0
  const BlockAds = () => (
    <div className="display-sb mt-4">
      <Button disabled={isDisabled()} className="support__btn btn-block-ads"
        onClick={() => handleRegister(true)}>Đăng ký</Button>
      <Button disabled={isDisabled()} className="support__btn btn-block-ads"
        onClick={() => handleRegister(false)}>Hủy đăng ký</Button>
    </div>
  )

  // TAB === 1 , 2
  const CallReflection = () => (
    <div className="mt-3">
      <TextArea
        value={reflection}
        handleOnChange={onReflection}
        placeholder="Nhập nội dung phản ánh"
        errorMsg={errorMsg2}
      // title="Nội dung phản ánh"
      />
      <div className="display-center mt-4">
        <Button disabled={isDisabled()} className="support__btn btn-block-ads" onClick={sendOTP}>
          Gửi phản ánh
        </Button>
      </div>
    </div>
  )

  // STEP = 2
  const confirmOTPScreen = () => {
    const phoneSlice = phoneNumber?.slice(0, -3) + 'xxx';
    return (
      <div className="support__confirm">
        <div className="phone-icon mb-4">
          <img alt="phone" src='/static/imgs/telephone_2.png' />
          <span>{phoneSlice}</span>
        </div>
        <InputText
          value={otp}
          handleOnChange={onChangeOTP}
          placeholder="Nhập mã OTP"
          errorMsg={errorMsgOTP}
          onlyNumber
        />

        <Button className="support__btn mt-4" onClick={onOK}>
          Tiếp tục
        </Button>
        <div className="support__text-des margin-top-20">
          <span>Không nhận được mã OTP ? </span>
          <span onClick={sendOTP}>Gửi lại</span>
        </div>
      </div>
    )
  };

  return (
    <>
      <Modal show={isOpenModal} onHide={closeModal} size="lg"
        className={`support ${isOpenModalNotice ? 'is-blurred' : ''}`}>
        <Modal.Header closeButton>
          <h2>Hỗ trợ</h2>
        </Modal.Header>

        <Modal.Body>
          <div className="support__tab">
            <h3 className={tab === 0 ? 'tab-active' : ''} onClick={() => handleChangeTab(0)}>
              Chặn quảng cáo</h3>
            <h3 className={tab === 1 ? 'tab-active' : ''} onClick={() => handleChangeTab(1)}>
              Phản ánh cuộc gọi rác</h3>
            <h3 className={tab === 2 ? 'tab-active' : ''} onClick={() => handleChangeTab(2)}>
              Phản ánh SMS rác</h3>
          </div>

          <div className="support__content">
            {step === 1 &&
              <>
                <div className="position-relative">
                  <FontAwesomeIcon
                    color="#007bff"
                    icon={faMobileAlt}
                    size="2x"
                    className="support__icon-mobile"
                  />
                  <InputText
                    value={phoneNumber}
                    handleOnChange={handlePhoneNumber}
                    placeholder="Mời nhập số điện thoại"
                    errorMsg={errorMsg}
                    onlyNumber
                  />
                </div>

                {tab === 0 && BlockAds()}
                {(tab === 1 || tab === 2) && CallReflection()}
              </>
            }

            {step === 2 && confirmOTPScreen()}
          </div>
        </Modal.Body>
      </Modal>

      <KCSModal
        isOpenModal={isOpenModalNotice}
        title="Thông báo"
        content={content}
        closeModal={handleCloseNotice}
      />

    </>
  );
}

export default React.memo(SupportModal);
