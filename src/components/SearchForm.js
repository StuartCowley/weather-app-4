import propTypes from "prop-types";
import React from "react";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  searchText: propTypes.string.isRequired,
  setSearchText: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default SearchForm;
