import Styles from "../../styles/skilsSelectStyle/serchBox.module.css";
const SerchBox = ({ isDropdownVisible, searchResults, handleSearch, handleSelectSearchValue, searchValue }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <h2>welcome for subject or selected option</h2>
        <p>you select or serch box type your tittle exam name and click this button. click button to start exam time </p>
      </div>
      <div className={Styles.serchContainer}>
        <div>
          <h1>Search Page</h1>
        </div>
        <div className={Styles.searchBox}>
          <input className={Styles.input} type="text" placeholder="Search..." value={searchValue} onChange={(e) => handleSearch(e.target.value)} />
          {isDropdownVisible && (
            <ul className={Styles.dropdown}>
              {searchResults.map((result) => (
                <li key={result} onClick={() => handleSelectSearchValue(result)}>
                  {result}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default SerchBox;
