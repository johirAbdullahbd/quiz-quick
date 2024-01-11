import { useRouter } from "next/navigation";
import { setDataHandle } from "@/app/server/mark";

import Styles from "../../styles/quizStyle/permision.module.css";
const ShowRejult = ({ handleAnsViews, timeString, seconds, score, allSelectedQuestionNumber, handleQuizStart }) => {
  const handleMarkshitPage = () => {
    setDataHandle({ point: score, allSelect: allSelectedQuestionNumber });
    router.push("markshit");
  };
  const router = useRouter();
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        {seconds == 0 && <h3>time over {timeString} of 10:00 munites</h3>}
        <p>your score {score} of 100</p>
        <p>your all questions selected {allSelectedQuestionNumber} of 100</p>
        <p>non selected question {allSelectedQuestionNumber - 100} of 100</p>

        <div className={Styles.buttons}>
          <button onClick={handleAnsViews}>See Your Answer</button>
          <button onClick={() => handleQuizStart(true)}>Again Quiz</button>
        </div>
        <div className={Styles.buttons}>
          <button onClick={() => router.push("skillselect")}>Closed</button>
          <button onClick={() => router.push("/")}>Others Quiz</button>
        </div>
        <div className={Styles.buttons}>
          <button onClick={handleMarkshitPage}>Rejult Dwonload</button>
        </div>
      </div>
    </div>
  );
};
export default ShowRejult;
