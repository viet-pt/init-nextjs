import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <img src='/static/imgs/logo-footer.png' className="footer__logo" alt="logo" />
        <div className="footer__content ">
          <p>Cơ quan quán lý trang Thông tin điện tử tổng hợp: TỔNG CÔNG TY TRUYỀN THÔNG VNPT-MEDIA.</p>
          <br />
          <p>Cơ quan chủ quân: Tập đoàn Bưu chính Viên thông Việt Nam (VNPT)</p>
          <p>Địa ch Số 57A phố Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam.</p>
          <p>ĐKKD:0106873188 do sở KH-DT cấp ngày 12/06/2015</p>
          <p>Giấy phép MXH số: Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng số 1366/GP-TTĐT do Sở Thông tin Truyền thông cấp ngày 07/04/2017</p>
          <p>Email vnptmtedia@vnpt.vn - Điện thoại: 0437722728 - Fax 0437722735</p>
          <p>Chịu rách nhiệm quản lý nội dung: Ông Dương Thành Long - TGĐ VNPT Media</p>
        </div>

        <div className="footer__bottom">
          <img src='/static/imgs/bo-cong-thuong.png' alt="bo-cong-thuong" />
          <div className="footer__store">
            <span>Tải app MCA tại:</span>
            <img src='/static/imgs/app_store.png' className="footer__store--app-store" alt="app" />
            <img src='/static/imgs/google_play.png' alt="app" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
