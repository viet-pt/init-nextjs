import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import InputText from 'components/common/InputText/InputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

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
      <div className="search__icon">
        <FontAwesomeIcon
          icon={faSearch} color="#fff"
          onClick={onSearch}
          size="lg"
        />
      </div>
    </div>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func
};

InputSearch.defaultProps = {
  value: '',
  handleOnChange: () => { }
};

export default React.memo(InputSearch);
