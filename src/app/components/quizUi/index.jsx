import McqSelection from "./selection";
import Styles from "../../styles/quizStyle/page.module.css";
import Headding from "./headding";
import Navbar from "../navbar";
import Permision from "./permition";
import ShowRejult from "./rejultShow";

const QuizUi = ({
  selectedObj,
  handleSelectedObj,
  handleAnsViews,
  rejultShow,
  quizStart,
  timeString,
  seconds,
  score,
  allSelectedQuestionNumber,
  isVisible,
  scrollToTop,

  questions,
  seePage,
  resetQuiz,
  handleScore,
  handleAllSelectCount,
  handleQuizStart,
}) => {
  if (!questions) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <div>
      {rejultShow ? (
        <ShowRejult
          timeString={timeString}
          handleAnsViews={handleAnsViews}
          seconds={seconds}
          score={score}
          allSelectedQuestionNumber={allSelectedQuestionNumber}
          handleQuizStart={handleQuizStart}
        />
      ) : (
        <div>
          {quizStart ? (
            <div>
              <Navbar />
              <div className={Styles.mainContainer}>
                <div className={Styles.container}>
                  <Headding
                    seePage={seePage}
                    timeString={timeString}
                    score={score}
                    allSelectedQuestionNumber={allSelectedQuestionNumber}
                    isVisible={isVisible}
                    scrollToTop={scrollToTop}
                    handleQuizStart={handleQuizStart}
                  />

                  {questions.map((question, i) => (
                    <McqSelection
                      index={i}
                      selectedObj={selectedObj}
                      handleSelectedObj={handleSelectedObj}
                      seePage={seePage}
                      question={question.statement}
                      options={question.options}
                      answer={question.correctAnswer}
                      handleScore={handleScore}
                      handleAllSelectCount={handleAllSelectCount}
                      resetQuiz={resetQuiz}
                    />
                  ))}
                  {!seePage && (
                    <div className={Styles.bttm}>
                      <button className={Styles.btn}>Submit Qu</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Permision handleQuizStart={handleQuizStart} />
          )}
        </div>
      )}
    </div>
  );
};
export default QuizUi;
