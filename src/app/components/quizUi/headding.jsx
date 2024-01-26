import React from "react";
import Styles from "../../styles/quizStyle/questionSelect.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dataInstance from "@/app/server/mark";

const Headding = ({ timeString, score, allSelect, isVisible, scrollToTop }) => {
  const router = useRouter();

  // Function to handle page navigation and reset quiz data

  const renderQuizBack = () => (
    <div className={Styles.headString}>
      <button onClick={() => router.push("skillselect")}>Back</button>
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
        Scroll to Top
      </button>

      {/* Reset Quiz Button, only shown when not on results page */}

      <button className={Styles.quiz} onClick={() => router.push("permission")}>
        reset quiz
      </button>
    </div>
  );
};

export default Headding;
