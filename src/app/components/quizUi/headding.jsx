"use client";
import Styles from "../../styles/quizStyle/questionSelect.module.css";
import styles from "../../styles/quizStyle/permision.module.css";
import { useRouter } from "next/navigation";

const Headding = ({ seePage, timeString, score, allSelectedQuestionNumber, isVisible, scrollToTop, handleQuizStart }) => {
  const router = useRouter();

  return (
    <div className={styles.containear}>
      {seePage ? (
        <div>
          <div className={Styles.headString}>
            <h3>
              time <span>{timeString}</span> munites finish
            </h3>
            <h3>
              all answer : <span>{allSelectedQuestionNumber}</span>
            </h3>
            <h3>
              correct answer : <span> {score}</span>
            </h3>
            <h3>
              wrong answer: <span>{allSelectedQuestionNumber - score}</span>{" "}
            </h3>
          </div>
          <div className={Styles.btn}>
            <button onClick={() => router.push("skillselect")}>closed</button>
            <button onClick={() => handleQuizStart(true)}>try again</button>
            <button onClick={() => router.push("markshit")}>markshit</button>
          </div>
        </div>
      ) : (
        <div>
          <div className={Styles.headString}>
            <button onClick={() => router.push("skillselect")}>Backkk </button>

            <h3> total question 100 </h3>
            <h3>
              your answer : <span> {allSelectedQuestionNumber}</span>
            </h3>
          </div>
          <h3 className={Styles.select}>answer: {allSelectedQuestionNumber} </h3>
          <h3 className={Styles.timeString}> {timeString} </h3>
        </div>
      )}

      <button className={`${Styles.scrollToTopButton} ${isVisible ? Styles.visible : ""}`} onClick={scrollToTop}>
        Scroll to Top
      </button>

      {!seePage && (
        <button className={Styles.quiz} onClick={() => handleQuizStart(true)}>
          reset quiz
        </button>
      )}
    </div>
  );
};
export default Headding;
