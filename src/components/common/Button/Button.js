import React from 'react';
import './styles.scss';

const Button = ({ type = 'button', children, onClick, customClass, ...rest }) => (
  <button data-text={children} type={type} className={`${customClass || ''} btn-custom`}
    {...rest}>
    <span>{children}</span>
  </button>
  // <button type={type} className={`${customClass || ''} btn-custom`} onClick={onClick} disabled={disabled}>
  //   <span>{children}</span>
  // </button>
);

export default React.memo(Button);
