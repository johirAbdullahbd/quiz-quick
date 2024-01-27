"use client";
import { useRouter } from "next/navigation";
import Styles from "../../styles/quizStyle/questionSelect.module.css";

const SeeHeadding = ({ timeString, allSelect, score, isVisible, scrollToTop }) => {
  const router = useRouter();

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
      <button onClick={() => router.push("skillselect")}>closed</button>
      <button onClick={() => router.push("permission")}>try again</button>
      <button onClick={() => router.push("signup")}>save rejult</button>
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
