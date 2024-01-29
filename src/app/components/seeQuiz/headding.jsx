"use client";

import Styles from "../../styles/quizStyle/questionSelect.module.css";

const SeeHeadding = ({ wrong, timeString, allSelect, score, isVisible, scrollToTop, handleHeadingRoute }) => {
  // Function to render the summary of quiz results
  const renderQuizSummary = () => (
    <div className={Styles.headString}>
      <h3>
        time <span>{timeString}</span> minutes finish
      </h3>
      <h3>
        all answer: <span>{allSelect}</span>
      </h3>
      <h3>
        score: <span>{score}</span>
      </h3>
      <h3>
        correct: <span>{wrong}</span>
      </h3>
      <h3>
        wrong answer: <span>{allSelect - wrong}</span>{" "}
      </h3>
    </div>
  );

  // Function to render quiz options/buttons
  const renderQuizOptions = () => (
    <div className={Styles.btn}>
      <button onClick={() => handleHeadingRoute("skillselect")}>closed</button>
      <button onClick={() => handleHeadingRoute("permission")}>try again</button>
      <button onClick={() => handleHeadingRoute("signup")}>save rejult</button>
    </div>
  );

  // Function to render the back button and quiz details when not on results page
  return (
    <div className={Styles.container}>
      {renderQuizSummary()}
      {renderQuizOptions()}
      <button className={`${Styles.scrollToTopButton} ${isVisible ? Styles.visible : ""}`} onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};
export default SeeHeadding;
