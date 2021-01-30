import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import cui from '../cui/cui';

const InputRadio = ({ value, name, selectedOption, title, handleOnChange, customClass, errorMsg }) => {
  const onChange = () => {
    handleOnChange(value, name);
  }

  return (
    <>
      <div className={`input-radio ${customClass || ''}`} key={value} onClick={onChange}>
        <input
          type='radio'
          name={name}
          value={value}
          checked={cui.isNumber(value) ? selectedOption.toString() === value.toString() : selectedOption === value}
          onChange={onChange}
        />
        <div className="input-radio__title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      {errorMsg &&
        <div className="err-msg">{errorMsg}</div>
      }
    </>
  );
}

InputRadio.propTypes = {
  handleOnChange: PropTypes.func,
  selectedOption: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

InputRadio.defaultProps = {
  handleOnChange: () => {}
};

export default React.memo(InputRadio);
