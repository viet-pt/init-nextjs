import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

const InputDropdown = ({ value, list, name, title, handleOnChange, placeholder, errorMsg, customClass, disabled, showTooltip }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const data = list.filter(item => item.value === value || item.value?.toString() === value?.toString())[0];
    setText(data?.text || '');
  }, [value, list]);

  const onSelect = (item) => {
    setText(item.text);
    handleOnChange(item, name);
  }

  return (
    <>
      <div className={`input-dropdown ${customClass || ''}`}>
        {title && <span className="input-dropdown__title">{title}</span>}
          <Dropdown>
            <Dropdown.Toggle disabled={disabled}>
              {text || placeholder || list[0]?.text}
            </Dropdown.Toggle>

            <Dropdown.Menu flip={false}>
              {list.map((item, index) => (
                <Dropdown.Item onSelect={() => onSelect(item)} key={index}>
                  {item.text}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
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
};

export default React.memo(InputDropdown);
