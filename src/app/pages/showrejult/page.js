"use client";
import { useRouter } from "next/navigation";
import Styles from "../../styles/quizStyle/permision.module.css";
import Custom404 from "@/app/error";
import dataInstance from "@/app/server/mark";

const ShowResult = () => {
  // Check previus route
  if (!dataInstance.getSubjectName()) {
    return <Custom404 />;
  }
  // Destructure the storage mark data
  const { seconds, timeString, score, allSelect } = dataInstance.getData();

  const router = useRouter();

  const seePageRouteHandle = (routePath) => {
    // Clear mark data when navigating to a new page
    dataInstance.setData({ score: "", allSelect: "", timeString: "", questions: [], selectedObj: "", rejultPage: false });
    router.push(routePath);
  };
  const rejultPageHandle = () => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("JAQC")) {
        router.push("marksheet");
      } else {
        router.push("signup");
      }
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        {seconds === 0 && <h3>Time over {timeString} of 10:00 minutes</h3>}
        <p>Your score: {score} of 100</p>
        <p>Your all questions selected: {allSelect} of 100</p>
        <p>Non-selected questions: {allSelect - 100} of 100</p>

        <div className={Styles.buttons}>
          <button onClick={() => router.push("seepage")}>See Your Answer</button>
          <button onClick={() => seePageRouteHandle("permission")}>Again Quiz</button>
        </div>

        <div className={Styles.buttons}>
          <button onClick={() => seePageRouteHandle("skillselect")}>Closed</button>
          <button onClick={() => seePageRouteHandle("/")}>Others Quiz</button>
        </div>

        <div className={Styles.buttons}>
          <button onClick={rejultPageHandle}>save rejult</button>
        </div>
      </div>
    </div>
  );
};

export default ShowResult;
