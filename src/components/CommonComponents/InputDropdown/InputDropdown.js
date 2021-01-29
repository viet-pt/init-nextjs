import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/fontawesome-free-solid';

const InputDropdown = ({ value, list, name, title, handleOnChange, placeholder, errorMsg, customClass,
  disabled, isTwoLine, flip }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const data = list.filter(item => item.value === value || item.value?.toString() === value?.toString())[0];
    setText(data?.text || '');
  }, [value, list]);

  const onSelect = (item) => {
    setText(item.text);
    handleOnChange(item, name);
  }

  const menu = (
    <Menu>
      {list.map((item, index) => (
        <Menu.Item onClick={() => onSelect(item)} key={index}>
          {item.text}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <div className={`input-dropdown ${customClass || ''} ${isTwoLine ? 'two-line' : ''}`}>
        {title && <span className="input-dropdown__title">{title}</span>}
        <Dropdown overlay={menu} trigger={['click']} placement={flip ? "topCenter" : "bottomCenter"} disabled={disabled}>
          <button disabled={disabled}>
            <span>{text || placeholder}</span>
            <FontAwesomeIcon icon={faSortDown} color="#000" />
          </button>
        </Dropdown>
      </div>

      {errorMsg &&
        <div className="err-msg">{errorMsg}</div>
      }
    </>
  );
}

InputDropdown.propTypes = {
  value: PropTypes.any,
  list: PropTypes.array,
  handleOnChange: PropTypes.func,
};

InputDropdown.defaultProps = {
  value: '',
  list: [],
  handleOnChange: () => { },
  isTwoLine: true
};

export default React.memo(InputDropdown);
