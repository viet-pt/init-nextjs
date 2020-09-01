import React, { useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

const InputDropdown = ({ list, name, title, handleOnChange, placeholder, errorMsg, customClass }) => {
  const [value, setValue] = useState(null);

  const onSelect = (item) => {
    setValue(item.text);
    handleOnChange(item, name);
  }

  if (!list || list.length === 0) {
    return null;
  }

  return (
    <>
      <div className={`input-dropdown ${customClass || ''}`}>
        {title && <span className="input-dropdown__title">{title}</span>}
        <Dropdown>
          <Dropdown.Toggle>
            {value || placeholder || list[0].text}
          </Dropdown.Toggle>

          <Dropdown.Menu>
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
  value: PropTypes.string,
  list: PropTypes.array,
  handleOnChange: PropTypes.func,
};

InputDropdown.defaultProps = {
  value: '',
  list: [],   
  handleOnChange: () => {},
};

export default React.memo(InputDropdown);
