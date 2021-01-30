import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const InputCheckbox = ({ value, name, title, handleOnChange,  extensionClass, customClass, disabled }) => {
  const onChange = (e) => {
    const { checked } = e.target;
    handleOnChange(checked, name);
  }

  return (
    <div className={`input-checkbox ${customClass || ''}`}>
      <Checkbox
        className={extensionClass || ''}
        checked={value}
        onChange={onChange}
        disabled={disabled}
      />
      <div className="input-checkbox__title" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}

InputCheckbox.propTypes = {
  value: PropTypes.bool,
  handleOnChange: PropTypes.func
};

InputCheckbox.defaultProps = {
  value: false,
  handleOnChange: () => {}
};

export default React.memo(InputCheckbox);
