"use client";
import { useState, useMemo } from "react";
import SkillsSelectUi from "../../components/skillsSelctUi/index";
import { useRouter } from "next/navigation";
import markDataInstance from "@/app/server/mark";

// Dummy search value, replace with actual search values
const allSearchValues = [
  "HTML",
  "CSS",
  "Javascript",
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

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const router = useRouter();

  // Caching for new search results
  const filteredSearchResults = useMemo(() => {
    if (!searchValue) return [];

    return allSearchValues.filter((item) => item.toLowerCase().includes(searchValue.toLowerCase()));
  }, [searchValue]);

  // Search logic
  const handleSearch = (value) => {
    setSearchValue(value);
    setIsDropdownVisible(!!value);
  };

  // Logic for selecting a search value
  const handleSelectSearchValue = (selectedValue) => {
    setIsDropdownVisible(false);
    markDataInstance.setSubjectName({ subject: selectedValue });
    router.push("permission");
  };

  return (
    <div>
      <SkillsSelectUi
        isDropdownVisible={isDropdownVisible}
        searchResults={filteredSearchResults}
        handleSearch={handleSearch}
        handleSelectSearchValue={handleSelectSearchValue}
        searchValue={searchValue}
      />
    </div>
  );
};

export default SearchPage;
