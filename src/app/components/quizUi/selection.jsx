// McqSelection.js
"use client";
import Styles from "../../styles/quizStyle/questionSelect.module.css";
import React, { useEffect, useState } from "react";

const McqSelection = ({ handleSelectedObj, seePage, index, question, options, answer, handleScore, handleAllSelectCount, selectedObj }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [ans, setAns] = useState(false);

  // useEffect(() => {
  //   if (selectedOption) {
  //     handleSelectedObj(index, selectedOption);
  //   } else {
  //     handleSelectedObj(index);
  //   }
  // }, [selectedOption]);
  // Handler function to update the selected option
  const handleOptionSelect = (option) => {
    if (selectedOption === option) {
      handleSelectedObj(index);
    } else {
      handleSelectedObj(index, option);
    }
    // console.log("call");
    setSelectedOption((prevSelectedOption) => (prevSelectedOption === option ? null : option));
    if (!selectedOption) {
      handleAllSelectCount(true);
      // console.log("111");
      if (answer === option) {
        // console.log("empty to write");
        handleScore(true);
        setAns(true);
      } else {
        // console.log("empty to wrong");
        setAns(false);
      }
    } else {
      selectedOption === option && handleAllSelectCount(false);

      // console.log("33");
      // console.log("222");
      if (answer === option && !ans) {
        // console.log("wrong to write");
        handleScore(true);
        setAns(true);
      } else {
        if (answer === option && ans) {
          // console.log("write to write");

          handleScore(false);
          setAns(false);
        } else {
          if (ans) {
            // console.log("write to wrong");

            handleScore(false);
            setAns(false);
          } else {
            // console.log("wrong to wrong");
          }
        }
      }
    }
  };
  const handleStyle = (option) => {
    if (seePage) {
      if (option === answer) {
        if (option == selectedObj[index]) {
          return Styles.correct;
        } else {
          return Styles.deafaultAns;
        }
      } else {
        if (selectedObj[index] === option) {
          return Styles.wrong;
        } else {
          return Styles.resetPointer;
        }
      }
    } else {
      return selectedOption === option ? Styles.selected : Styles.nonSelect;
    }
  };
  // Render the component JSX
  return (
    <div className={Styles.mcqContainer}>
      <h3>
        {index}. 33{question}11
      </h3>
      <ul>
        {options.map((option, index) => (
          <div>
            <li key={index} onClick={() => !seePage && handleOptionSelect(option)} className={handleStyle(option)}>
              {/* <span className="checkmark"> nn[&#10003;] </span> */}
              {option}
            </li>
            {seePage && (
              <div className={Styles.ans}>
                {handleStyle(option) === Styles.correct && <span>your answer correct</span>}
                {handleStyle(option) === Styles.wrong && <span>your answer wrong</span>}
                {handleStyle(option) === Styles.deafaultAns && <span> default answer</span>}
              </div>
            )}
          </div>
        ))}
      </ul>
      {!seePage && <p> Selected Option: {selectedOption}</p>}
    </div>
  );
};

export default McqSelection;

const handleOptionClick = (option) => {
  setSelectedOption(option);
  onAnswer(option === data.correctAnswer);
};

const handleAnswe = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }
};

const handleAnswer = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  // Move to the next question or show the result
  setCurrentQuestionIndex(currentQuestionIndex + 1);
};

const resetQuiz = () => {
  setCurrentQuestionIndex(0);
  setScore(0);
};
