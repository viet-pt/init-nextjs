import React from 'react';
import './style.scss';

const Footer = () =>  {
  return (
    <div className="footer">
      <div className="container">
        <img src='/static/imgs/footer_logo.png' className="footer__logo" alt="logo" />
        <div className="footer__content ">
          <h4>CỤC AN TOÀN THÔNG TIN - BỘ THÔNG TIN VÀ TRUYỀN THÔNG</h4>
          <div>Chịu trách nhiệm chính: Ông Nguyễn Thành Phúc - Cục trưởng Cục An toàn thông tin.</div>
          <div>Trụ sở: Tầng 8 Tòa nhà Cục Tần số vô tuyến điện - 115 Trần Duy Hưng - Cầu giấy - Hà Nội.</div>
          <div>Điện thoại: +84 24 3209 6789   Fax: +84 24 3943 6684</div>
          <br />
          <div><i>Bản quyền thuộc Cục An toàn thông tin. (Ghi rõ nguồn "Cục An toàn thông tin" khi phát hành lại thông tin từ website này)</i></div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
