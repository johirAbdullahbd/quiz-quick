import Navbar from "../navbar";
import SerchBox from "./searchBox";
import SkillsList from "./skiilsList";
import Styles from "../../styles/skilsSelectStyle/page.module.css";
import styles from "../../styles/quizStyle/page.module.css";

const SkillsSelectUi = ({ isDropdownVisible, searchResults, handleSearch, handleSelectSearchValue, searchValue }) => {
  return (
    <div>
      <Navbar />
      <div className={Styles.mainContainer}>
        <SerchBox
          isDropdownVisible={isDropdownVisible}
          searchResults={searchResults}
          handleSearch={handleSearch}
          handleSelectSearchValue={handleSelectSearchValue}
          searchValue={searchValue}
        />
        <SkillsList handleClick={handleSelectSearchValue} />
        <div className={styles.bttm}>
          <button className={styles.btn}>Back to home</button>
        </div>
      </div>
    </div>
  );
};
export default SkillsSelectUi;
