"use client";
import { useRouter } from "next/navigation";
import markDataInstance from "@/app/server/mark";
import Styles from "../../styles/quizStyle/permision.module.css";
import Custom404 from "@/app/error";

const ShowResult = () => {
  // Check previus route
  if (!markDataInstance.getSubjectName()) {
    return <Custom404 />;
  }
  // Destructure the storage mark data
  const { seconds, timeString, score, allSelect } = markDataInstance.getMarkData();

  const router = useRouter();

  const seePageRouteHandle = (routePath) => {
    // Clear mark data when navigating to a new page
    markDataInstance.setMarkData({ score: "", allSelect: "", timeString: "", questions: [], selectedObj: "", rejultPage: false });
    router.push(routePath);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        {seconds === 0 && <h3>Time over {timeString} of 10:00 minutes</h3>}
        <p>Your score: {score} of 100</p>
        <p>Your all questions selected: {allSelect} of 100</p>
        <p>Non-selected questions: {allSelect - 100} of 100</p>

        <div className={Styles.buttons}>
          <button onClick={() => router.push("quiz")}>See Your Answer</button>
          <button onClick={() => seePageRouteHandle("permission")}>Again Quiz</button>
        </div>

        <div className={Styles.buttons}>
          <button onClick={() => seePageRouteHandle("skillselect")}>Closed</button>
          <button onClick={() => seePageRouteHandle("/")}>Others Quiz</button>
        </div>

        <div className={Styles.buttons}>
          <button onClick={() => router.push("signup")}>Result Download</button>
        </div>
      </div>
    </div>
  );
};

export default ShowResult;
