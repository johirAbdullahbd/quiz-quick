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

// Function to render an individual question select component
const renderQuestion = (question, index, selectedObj, handleSelectedObj, rejultPage, handleScore, handleAllSelectCount) => (
  <McqSelection
    key={index}
    index={index}
    selectedObj={selectedObj}
    handleSelectedObj={handleSelectedObj}
    rejultPage={rejultPage}
    question={question.statement}
    options={question.options}
    img={question.img}
    answer={question.correctAnswer}
    handleScore={handleScore}
    handleAllSelectCount={handleAllSelectCount}
  />
);

// Main rendering of the QuizUi component
const QuizUi = ({
  submit,
  selectedObj,
  handleSelectedObj,
  timeString,
  score,
  allSelect,
  isVisible,
  scrollToTop,
  questions,
  rejultPage,
  handleScore,
  handleAllSelectCount,
}) => {
  return (
    <div>
      <Navbar />
      <div className={Styles.mainContainer}>
        <div className={Styles.container}>
          {/* Conditional rendering based on the availability of questions */}
          {renderQuizHeader(rejultPage, timeString, score, allSelect, isVisible, scrollToTop)}
          {questions.map((question, index) =>
            renderQuestion(question, index, selectedObj, handleSelectedObj, rejultPage, handleScore, handleAllSelectCount)
          )}
          {renderQuizButtons(submit)}
        </div>
      </div>
    </div>
  );
};

export default QuizUi;
