// import Navbar from "../navbar";
import SerchBox from "./searchBox";
import SkillsList from "./skiilsList";
import Styles from "../../styles/skilsSelectStyle/page.module.css";
import styles from "../../styles/quizStyle/page.module.css";
import { useRouter } from "next/navigation";
import Navbar from "../investmentplan/navBar";
import Fotter from "../fotter";

const SkillsSelectUi = ({ isDropdownVisible, searchResults, handleSearch, handleSelectSearchValue, searchValue, handleRoute }) => {
  const router = useRouter();
  return (
    <div>
      <Navbar handleNavRoute={handleRoute} />
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
          <button onClick={() => router.push("/")} className={styles.btn}>
            Back to home
          </button>
        </div>
        <Fotter navigateTo={handleRoute} />
      </div>
    </div>
  );
};
export default SkillsSelectUi;
