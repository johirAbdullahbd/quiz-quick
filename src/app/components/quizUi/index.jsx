import React, { useMemo } from "react";
import McqSelection from "./selection";
import Styles from "../../styles/quizStyle/page.module.css";
import Headding from "./headding";
import Navbar from "../navbar";

// Function to render the quiz header component
const renderQuizHeader = (rejultPage, timeString, score, allSelect, isVisible, scrollToTop) => (
  <Headding rejultPage={rejultPage} timeString={timeString} score={score} allSelect={allSelect} isVisible={isVisible} scrollToTop={scrollToTop} />
);

// Rendering of quiz buttons to
const renderQuizButtons = (submit) => (
  <div className={Styles.bttm}>
    <button onClick={submit} className={Styles.btn}>
      Submit Quiz
    </button>
  </div>
);

// Function to render an individual questions select component
const renderQuestion = (questions, index, handleSelectedObj, rejultPage, handleScore, handleAllSelectCount) => (
  <McqSelection
    key={index}
    index={index}
    handleSelectedObj={handleSelectedObj}
    rejultPage={rejultPage}
    questions={questions}
    handleScore={handleScore}
    handleAllSelectCount={handleAllSelectCount}
  />
);

// Main rendering of the QuizUi component
const QuizUi = ({
  submit,
  handleSelectedObj,
  timeString,
  score,
  allSelect,
  isVisible,
  scrollToTop,
  allQuestions,
  rejultPage,
  handleScore,
  handleAllSelectCount,
}) => {
  return (
    <div>
      <Navbar />
      <div className={Styles.mainContainer}>
        <div className={Styles.container}>
          {/* Conditional rendering based on the availability of allQuestions */}
          {renderQuizHeader(rejultPage, timeString, score, allSelect, isVisible, scrollToTop)}
          {allQuestions.map((questions, index) => renderQuestion(questions, index, handleSelectedObj, rejultPage, handleScore, handleAllSelectCount))}
          {renderQuizButtons(submit)}
        </div>
      </div>
    </div>
  );
};

export default QuizUi;
