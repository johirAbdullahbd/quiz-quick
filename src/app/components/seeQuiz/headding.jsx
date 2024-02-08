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

  // Function to render the back button and quiz details when not on results page
  return (
    <div className={Styles.container}>
      <div className={Styles.btn}>
        <button onClick={handleHeadingRoute}>Back to rejult page</button>
      </div>
      {renderQuizSummary()}
      <button className={`${Styles.scrollToTopButton} ${isVisible ? Styles.visible : ""}`} onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};
export default SeeHeadding;
