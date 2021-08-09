import React from 'react';
import searchIcon from '../images/search-ic.svg';

function SearchToolbar() {
  return (
    <div className="Boards--SearchToolbar">
      <img src={searchIcon} alt="Search Icon" />
    </div>
  );
}

export default SearchToolbar;
