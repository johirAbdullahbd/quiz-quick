"use client";
// SearchPage.js
import { useState } from "react";
import SkillsSelectUi from "../../components/skillsSelctUi/index";
import { useRouter } from "next/navigation";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const router = useRouter();
  // Dummy search values, replace it with your actual search logic
  const allSearchValues = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "PHP",
    "Bootstrap",
    "C",
    "Tailwind",
    "React.js",
    "Next.js",
    "Veu.js",
    "Node.js",
    "Express.js",
    "Psychology",
    "Mahdi-Vai",
    "English-class-under-ten",
    "Math-class-under-ten",
  ];

  const handleSearch = (value) => {
    // Replace this with your actual search logic

    setSearchValue(value);
    if (value) {
      const results = allSearchValues.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
      setSearchResults(results);
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  };

  const handleSelectSearchValue = (selectedValue) => {
    // setSearchValue(selectedValue)

    setIsDropdownVisible(false);
    sessionStorage.setItem("subject", selectedValue);
    router.push("quiz");
  };

  return (
    <div>
      <SkillsSelectUi
        isDropdownVisible={isDropdownVisible}
        searchResults={searchResults}
        handleSearch={handleSearch}
        handleSelectSearchValue={handleSelectSearchValue}
        searchValue={searchValue}
      />
    </div>
  );
};

export default SearchPage;
