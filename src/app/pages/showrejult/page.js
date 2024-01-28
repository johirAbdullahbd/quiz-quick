"use client";
import { useRouter } from "next/navigation";
import Styles from "../../styles/quizStyle/permision.module.css";
import Custom404 from "@/app/error";
import dataInstance from "@/app/server/mark";
import { useState } from "react";
import Loading from "../loading/page";

const ShowResult = () => {
  const [loading, setLoading] = useState(false);
  // Check previus route
  if (!dataInstance.getSubjectName()) {
    return <Custom404 />;
  }
  // Destructure the storage mark data
  const { seconds, timeString, score, allSelect } = dataInstance.getData();

  const router = useRouter();

  const othersPageHandleRoute = (routePath) => {
    // Clear mark data when navigating to a new page
    dataInstance.setData({ score: "", allSelect: "", timeString: "", questions: [], selectedObj: "", rejultPage: false });
    routeHandle(routePath);
  };
  const routeHandle = (path) => {
    setLoading(true);
    router.push(path);
  };
  const rejultPageHandle = () => {
    setLoading(true);
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("JAQC")) {
        routeHandle("marksheet");
      } else {
        const checkNetworkData = dataInstance.getOnTimeData();
        if (Object.keys(checkNetworkData).length > 0) {
          sendDataBeforePageForNetworkError(checkNetworkData);
        } else {
          routeHandle("signup");
        }
      }
    }
  };
  const sendDataBeforePageForNetworkError = async (postData) => {
    try {
      // Assuming you have some data to send in the request body

      const response = await axios.post("https://quiz-node-johirabdullahs-projects.vercel.app/api/quiz/examdata", postData);
      // const response = await axios.post("http://localhost:4000/api/quiz/examdata", postData);

      const data = response.data;

      if (data.success) {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("id", data.uniqueString);
        }
        routeHandle("signup");
      }
      console.log(data);
    } catch (error) {
      setLoading(false);
      if (error.message == "Network Error") {
        alert("Netword connection faild");
      }
    }
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={Styles.container}>
          <div className={Styles.card}>
            {seconds === 0 && <h3>Time over {timeString} of 10:00 minutes</h3>}
            <p>Your score: {score} of 100</p>
            <p>Your all questions selected: {allSelect} of 100</p>
            <p>Non-selected questions: {allSelect - 100} of 100</p>

            <div className={Styles.buttons}>
              <button onClick={() => routeHandle("seepage")}>See Your Answer</button>
              <button onClick={() => othersPageHandleRoute("permission")}>Again Quiz</button>
            </div>

            <div className={Styles.buttons}>
              <button onClick={() => othersPageHandleRoute("skillselect")}>Closed</button>
              <button onClick={() => othersPageHandleRoute("/")}>Others Quiz</button>
            </div>

            <div className={Styles.buttons}>
              <button onClick={rejultPageHandle}>save rejult</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowResult;
