import React from 'react';
import PropTypes from 'prop-types';

import {
  dropdownItems,
  fieldNames,
  fieldPlaceholders
} from '../../constants/searchBar';

import { Dropdown } from '../../../components-library';

function SearchBox(props) {
  const {
    id,
    fieldValue,
    handleDropdownClick,
    handleInputChange,
    isMandatory
  } = props;

  let selectedComponent = '';

  switch (id) {
    case fieldNames.serial: {
      selectedComponent = (
        <input
          className="text-black min-h-[47px] placeholder:text-black px-12 py-4 w-full border-1 border-gray-4 rounded-lg text-14"
          value={fieldValue.text}
          onChange={handleInputChange}
        />
      );
      break;
    }
    case fieldNames.type:
    case fieldNames.status: {
      selectedComponent = (
        <Dropdown
          className="text-14"
          selectedText={fieldValue}
          items={dropdownItems[id]}
          handleItemClick={handleDropdownClick}
        />
      );
      break;
    }
  }

  return (
    <div className="py-4 px-16 desktop:w-1/4">
      <p className="text-gray-4 text-14 pb-4">{`${fieldPlaceholders[id]} ${
        isMandatory ? '*' : ''
      }`}</p>
      {selectedComponent}
    </div>
  );
}

SearchBox.propTypes = {
  id: PropTypes.string,
  fieldValue: PropTypes.object,
  handleSelectClick: PropTypes.func
};

SearchBox.defaultProps = {
  isMandatory: false
};

export default SearchBox;
