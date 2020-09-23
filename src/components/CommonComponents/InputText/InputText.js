import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const InputText = ({ value, name, title, handleOnChange, onEnter, placeholder, extensionClass,
  onlyNumber, isPassword, errorMsg, customClass, customTitle, readOnly }) => {
  const onChange = (e) => {
    const { value } = e.target;
    handleOnChange(value, name);
  }

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      onEnter();
    }
  }

  return (
    <>
      <div className={`input-text ${customClass || ''}`}>
        {title && <span className={`input-text__title ${customTitle || ''}`}>{title}</span>}
        <input
          type={onlyNumber ? "number" : isPassword ? "password" : "text"}
          className={`${extensionClass || ''} ${errorMsg ? 'border-red' : ''}`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={handleOnKeyDown}
          readOnly={readOnly}
        />
      </div>
      {errorMsg &&
        <div className="err-msg">{errorMsg}</div>
      }
    </>
  );
}

InputText.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleOnChange: PropTypes.func,
  onEnter: PropTypes.func
};

InputText.defaultProps = {
  value: '',
  handleOnChange: () => { },
  onEnter: () => { }
};

export default React.memo(InputText);
