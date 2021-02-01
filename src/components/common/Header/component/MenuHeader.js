import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt, faUserCircle } from '@fortawesome/fontawesome-free-solid';
import { useSelector } from 'react-redux';

const MenuHeader = () => {
  const authorized = useSelector(state => state.authorizedReducer.authorized);

  return (
    <div className="menu-header">
      <div className="container">
        <div className="menu-header__body">
          {authorized &&
            <div className="menu-header__box">
              <div className="center">
                <FontAwesomeIcon icon={faUserCircle} color="#9B9B9B" size="2x" />
                <h6>TÀI KHOẢN</h6>
              </div>
              <ul>
                <li>Quản lý gói cước</li>
                <li>Thông báo từ Chuyện 0h</li>
                <li>Gửi email góp ý</li>
                <li>Đăng xuất</li>
              </ul>
            </div>
          }

          <div className="menu-header__box">
            <div className="center">
              <img alt="home" src='/static/imgs/intro.png' />
              <h6>GIỚI THIỆU</h6>
            </div>
            <ul>
              <li>Giới thiệu</li>
              <li>Chính sách dịch vụ</li>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản sử dụng</li>
            </ul>
          </div>

          <div>
            <div className="center">
              <img alt="home" src='/static/imgs/help.png' />
              <h6 className="help">Trợ giúp</h6>
            </div>

            <div className="center margin-top-40">
              <FontAwesomeIcon icon={faUnlockAlt} color="#9B9B9B" size="2x" />
              <h6 className="help">ĐĂNG NHẬP</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MenuHeader);
