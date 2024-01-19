"use client";
import React, { useState } from "react";
import Styles from "../../styles/quizStyle/questionSelect.module.css";
import Image from "next/image";
import url from "../../../../public/iim.png";

const McqSelection = ({ handleSelectedObj, rejultPage, index, question, options, answer, handleScore, handleAllSelectCount, selectedObj }) => {
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

  // Function to determine the styling based on resultPage and user selection
  const handleStyle = (option) => {
    if (rejultPage) {
      if (option === answer) {
        return option === selectedObj[index] ? Styles.correct : Styles.deafaultAns;
      } else {
        return selectedObj[index] === option ? Styles.wrong : Styles.resetPointer;
      }
    } else {
      return selectedOption === option ? Styles.selected : Styles.nonSelect;
    }
  };

  // Render the component JSX
  return (
    <div className={Styles.mcqContainer}>
      <h3>
        {index}. {question}
      </h3>
      <Image
        className={Styles.img}
        src="https://ipfs.filebase.io/ipfs/QmRdvZX4FTx84TjybCXpzoXLFK5u2x3JbhHVCaZS1piwp8"
        // src="https://i.postimg.cc/Lhxcrvm5/Screenshot-2023-10-21-073257.png"
        width={600}
        height={200}
        alt="Screenshot-2023-10-21-073257"
      />

      <ul>
        {options.map((option, idx) => (
          <div key={idx}>
            <li onClick={() => !rejultPage && handleOptionSelect(option)} className={handleStyle(option)}>
              {option}
            </li>
            {rejultPage && (
              <div className={Styles.ans}>
                {handleStyle(option) === Styles.correct && <span>Your answer is correct</span>}
                {handleStyle(option) === Styles.wrong && <span>Your answer is wrong</span>}
                {handleStyle(option) === Styles.deafaultAns && <span>Default answer</span>}
              </div>
            )}
          </div>
        ))}
      </ul>
      {!rejultPage && <p> Selected Option: {selectedOption}</p>}
    </div>
  );
};

export default McqSelection;
