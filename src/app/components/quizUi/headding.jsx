import React from "react";
import Styles from "../../styles/quizStyle/questionSelect.module.css";

const Headding = ({ timeString, allSelect, isVisible, scrollToTop, handleHeadingRoute }) => {
  // Function to handle page navigation and reset quiz data

  const renderQuizBack = () => (
    <div className={Styles.headString}>
      <button onClick={() => handleHeadingRoute("skillselect")}>
        <i className="fas fa-chevron-left"></i> <i className="fas fa-chevron-left"></i>Back
      </button>
      <h3>total question 100</h3>
      <h3>
        your answer: <span>{allSelect}</span>
      </h3>
    </div>
  );

  // Main component rendering
  return (
    <div className={Styles.container}>
      <div>
        {renderQuizBack()}
        <h3 className={Styles.select}>answer: {allSelect} </h3>
        <h3 className={Styles.timeString}>{timeString}</h3>
      </div>

      {/* Scroll to Top Button */}
      <button className={`${Styles.scrollToTopButton} ${isVisible ? Styles.visible : ""}`} onClick={scrollToTop}>
        Scroll Top <i class="fas fa-arrow-up"></i>
      </button>

      {/* Reset Quiz Button, only shown when not on results page */}

      <button className={Styles.quiz} onClick={() => handleHeadingRoute("permission")}>
        Reset quiz
      </button>
    </div>
  );
};

export default Headding;
