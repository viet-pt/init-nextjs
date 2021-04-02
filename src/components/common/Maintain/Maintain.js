import React from 'react';
import './style.scss';

const Maintain = () => {

  return (
    <div className="maintain">
      <img src='/static/imgs/maintain.png' alt='bao tri' className="maintain__icon" />
        <h1 className="maintain__title">WEBSITE ĐANG BẢO TRÌ</h1>
        <div className="maintain__content">
          <div>Website sẽ hoạt động trở lại trong thời gian sớm nhất. Xin cảm ơn!</div>
        </div>
    </div>
  );
}

export default React.memo(Maintain);
