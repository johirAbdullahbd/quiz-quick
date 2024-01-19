import React from "react";
import Styles from "../../styles/skilsSelectStyle/serchBox.module.css";

// SerchBox component receives props for its functionality
const SerchBox = ({ isDropdownVisible, searchResults, handleSearch, handleSelectSearchValue, searchValue }) => {
  // Function to render the dropdown based on search results
  const renderDropdown = () => (
    <ul className={Styles.dropdown}>
      {/* Mapping through search results to create list items */}
      {searchResults.map((result) => (
        <li key={result} onClick={() => handleSelectSearchValue(result)}>
          {result}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={Styles.container}>
      {/* Text container for welcome message and instructions */}
      <div className={Styles.textContainer}>
        <h2>welcome for subject or selected option</h2>
        <p>you select or search box type your title, exam name and click this button. Click the button to start exam time.</p>
      </div>
      {/* Container for the search box and associated elements */}
      <div className={Styles.serchContainer}>
        <div>
          <h1>Search Page</h1>
        </div>
        {/* Search box with input field and optional dropdown */}
        <div className={Styles.searchBox}>
          <input className={Styles.input} type="text" placeholder="Search..." value={searchValue} onChange={(e) => handleSearch(e.target.value)} />
          {/* Conditional rendering of the dropdown based on isDropdownVisible */}
          {isDropdownVisible && renderDropdown()}
        </div>
      </div>
    </div>
  );
};

export default SerchBox;
