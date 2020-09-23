import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import InputText from 'components/CommonComponents/InputText/InputText';

const InputSearch = ({ value, handleOnChange, onSearch, customClass, placeholder }) => {

  return (
    <div className={`search ${customClass || ''}`}>
      <InputText
        type="text"
        placeholder={placeholder || "Tìm kiếm"}
        extensionClass="search__input"
        value={value}
        handleOnChange={handleOnChange}
        onEnter={onSearch}
      />
      {value === '' &&
        <img
          alt="icon-search"
          src='/static/imgs/search.svg'
          className="search__icon"
        />
      }
    </div>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func
};

InputSearch.defaultProps = {
  value: '',
  handleOnChange: () => {}
};

export default React.memo(InputSearch);
