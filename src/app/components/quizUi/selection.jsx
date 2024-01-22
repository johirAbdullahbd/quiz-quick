"use client";
import React, { useState } from "react";
import Styles from "../../styles/quizStyle/questionSelect.module.css";
import Image from "next/image";
import url from "../../../../public/iim.png";

const McqSelection = ({ handleSelectedObj, img, index, question, options, answer, handleScore, handleAllSelectCount, selectedObj }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [ans, setAns] = useState(false);

  // Handler function to update the selected option and handle score
  const handleOptionSelect = (option) => {
    const isSameOption = selectedOption === option;
    handleSelectedObj(index, isSameOption ? null : option);
    setSelectedOption(() => (isSameOption ? null : option));

    // Handle score and answer state based on user selection

    if (!selectedOption) {
      handleAllSelectCount(true);
      if (answer === option) {
        // empty to correct
        handleScore(true);
        setAns(true);
      } else {
        // empty to wrong
        setAns(false);
      }
    } else {
      selectedOption === option && handleAllSelectCount(false);

      if (answer === option && !ans) {
        // wrong to correct
        handleScore(true);
        setAns(true);
      } else {
        if (answer === option && ans) {
          // correct to correct
          handleScore(false);
          setAns(false);
        } else {
          if (ans) {
            // correct to wrong
            handleScore(false);
            setAns(false);
          }
        }
      }
    }
  };

  // Render the component JSX
  return (
    <div className={Styles.mcqContainer}>
      <h3>
        {index}. {question}
      </h3>
      {img && (
        <Image
          className={Styles.img}
          src={img}
          // src="https://i.postimg.cc/Lhxcrvm5/Screenshot-2023-10-21-073257.png"
          width={600}
          height={200}
          alt="Screenshot-2023-10-21-073257"
        />
      )}
      <ul>
        {options.map((option, idx) => (
          <div key={idx}>
            <li onClick={() => handleOptionSelect(option)} className={selectedOption === option ? Styles.selected : Styles.nonSelect}>
              {option}
            </li>
          </div>
        ))}
      </ul>
      <p> Selected Option: {selectedOption}</p>
    </div>
  );
};

export default McqSelection;
