import React, { useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import cui from '../cui/cui';

const regexNumb = /^[0-9]*$/;

const InputText = ({ value, name, title, handleOnChange, onEnter, autoFocus, placeholder, extensionClass,
  onlyNumber, isPassword, errorMsg, customClass, customTitle }) => {

  const [visible, setVisible] = useState(true);

  const onChange = (e) => {
    const { value } = e.target;

    if (!onlyNumber || value === '') {
      handleOnChange(value, name);
      return;
    }
    
    if (regexNumb.test(value)) {
      handleOnChange(parseInt(value), name);
    }
  }

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      onEnter();
    } else if (e.keyCode === 38 || e.keyCode === 40) {
      e.preventDefault();
    }
  }

  return (
    <>
      <div className={`input-text ${customClass || ''}`}>
        {title && <span className={`input-text__title ${customTitle || ''}`}>{title}</span>}
        <input
          type={onlyNumber ? "number" : (isPassword && visible) ? "password" : "text"}
          className={`${extensionClass || ''} ${errorMsg && 'border-red'}`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={handleOnKeyDown}
          autoFocus={autoFocus}
        />
        {isPassword && 
          <img alt="icon" src='/static/imgs/ic_visibility.png' onClick={() => setVisible(!visible)} />
        }
      </div>
      {!cui.isUndefinedOrNull(errorMsg) &&
        <div className="err-msg">{errorMsg}</div>
      }
    </>
  );
}

InputText.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  onEnter: PropTypes.func
};

InputText.defaultProps = {
  value: '',
  handleOnChange: () => {},
  onEnter: () => {}
};

export default React.memo(InputText);
