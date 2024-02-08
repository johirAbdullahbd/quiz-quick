"use client";
import { useState, useMemo, useEffect } from "react";
import SkillsSelectUi from "../../components/skillsSelctUi/index";
import { useRouter } from "next/navigation";
import dataInstance from "@/app/server/mark";
import Loading from "../loading/page";

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
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (window) {
      sessionStorage.clear();
      // set props data to session storage or local storage
      sessionStorage.setItem("prevRoute", "skillselect");
    }
  }, []);
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
    dataInstance.setSubjectName({ subject: selectedValue });
    setLoading(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("questions", "step1");
      let obj = {};
      sessionStorage.setItem("obj", JSON.stringify(obj));
    }
    router.push("permission");
  };
  const handleRoute = (path) => {
    setLoading(true);
    router.push(path);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <SkillsSelectUi
          isDropdownVisible={isDropdownVisible}
          searchResults={filteredSearchResults}
          handleSearch={handleSearch}
          handleSelectSearchValue={handleSelectSearchValue}
          searchValue={searchValue}
          handleRoute={handleRoute}
        />
      )}
    </div>
  );
};

export default SearchPage;
