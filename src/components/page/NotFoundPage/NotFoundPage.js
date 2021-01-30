import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'routers';

const NotFoundPage = () => {
  return (
    <div className="not-found container">
      <div className="not-found__header">
        <img src="https://cdn.24h.com.vn//images/404img_092018.png" alt="404" className="not-found__img" />
        <div className="not-found__des">
          <span>Truy cập của bạn có thể bị lỗi hoặc không tìm thấy nội dung</span>
          <div className="not-found__button">
            <FontAwesomeIcon
              icon={faHome}
              color="#fff"
            />
            <Link route="/">
              <span className="ml-3">Quay lại trang chủ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(NotFoundPage);
