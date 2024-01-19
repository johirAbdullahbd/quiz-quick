import React from "react";
import Styles from "../../styles/quizStyle/questionSelect.module.css";
import { useRouter } from "next/navigation";
import markDataInstance from "@/app/server/mark";
import Image from "next/image";
import url from "../../../../public/nayemvai.jpg";

const Headding = ({ rejultPage, timeString, score, allSelect, isVisible, scrollToTop }) => {
  const router = useRouter();

  // Function to handle page navigation and reset quiz data
  const rejultPageRouteHandle = (page) => {
    // Reset quiz data
    markDataInstance.setMarkData({ score: "", allSelect: "", timeString: "", questions: [], selectedObj: "", rejultPage: false });
    router.push(page);
  };

  // Function to render the summary of quiz results
  const renderQuizSummary = () => (
    <div className={Styles.headString}>
      <Image style={{ width: "100px", height: "100px" }} src={url} />
      <h3>
        time <span>{timeString}</span> minutes finish
      </h3>
      <h3>
        all answer: <span>{allSelect}</span>
      </h3>
      <h3>
        correct answer: <span>{score}</span>
      </h3>
      <h3>
        wrong answer: <span>{allSelect - score}</span>{" "}
      </h3>
    </div>
  );

  // Function to render quiz options/buttons
  const renderQuizOptions = () => (
    <div className={Styles.btn}>
      <button onClick={() => rejultPageRouteHandle("skillselect")}>closed</button>
      <button onClick={() => rejultPageRouteHandle("permission")}>try again</button>
      <button onClick={() => rejultPageRouteHandle("signup")}>marksheet</button>
    </div>
  );

  // Function to render the back button and quiz details when not on results page
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
      {rejultPage ? (
        <div>
          {renderQuizSummary()}
          {renderQuizOptions()}
        </div>
      ) : (
        <div>
          {renderQuizBack()}
          <h3 className={Styles.select}>answer: {allSelect} </h3>
          <h3 className={Styles.timeString}>{timeString}</h3>
        </div>
      )}

      {/* Scroll to Top Button */}
      <button className={`${Styles.scrollToTopButton} ${isVisible ? Styles.visible : ""}`} onClick={scrollToTop}>
        Scroll to Top
      </button>

      {/* Reset Quiz Button, only shown when not on results page */}
      {!rejultPage && (
        <button className={Styles.quiz} onClick={() => router.push("permission")}>
          reset quiz
        </button>
      )}
    </div>
  );
};

export default Headding;
