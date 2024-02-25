"use client";

import { useEffect, useState } from "react";
import ResultCard from "./card";
import Congratulations from "./congrathulatoin";
import ProgressBar from "./progressBar";
import dataInstance from "@/app/server/mark";
import { useRouter } from "next/navigation";
import Loading from "../loading/page";
import Custom404 from "@/app/error";
import styles from "../../styles/show/card.module.css";

const Show = () => {
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(false);
  const [inisial, setInisial] = useState(false);
  const [step, setStep] = useState("");
  const [firstStep, setFirstStep] = useState(false);
  const [lastStep, setLastStep] = useState(false);
  const [lastWine, setLastWine] = useState("");
  const [stateData, setStateData] = useState({ seconds: 0, timeString: "00:00", score: 0, allSelect: 0, wrong: 0 });

  // Check previus route
  if (!dataInstance.getSubjectName()) {
    return <Custom404 />;
  }
  // Destructure the storage mark data

  const router = useRouter();

  const othersPageHandleRoute = (routePath) => {
    // Clear mark data when navigating to a new page
    dataInstance.setData({ score: "", allSelect: "", timeString: "", questions: [], selectedObj: "", rejultPage: false });
    routeHandle(routePath);
  };
  const againQuiz = () => {
    //
    if (typeof window !== "undefined") {
      sessionStorage.setItem("againRejult", "true");
    }
    router.push("permission");
  };
  const routeHandle = (path) => {
    setLoading(true);
    router.push(path);
  };
  const prev = () => {
    setLoading(true);
    step == "step2" && sessionStorage.setItem("questions", "step1");
    step == "step3" && sessionStorage.setItem("questions", "step2");
    step == "step4" && sessionStorage.setItem("questions", "step3");
    step == "step5" && sessionStorage.setItem("questions", "step4");
    setReload(!reload);
    setLoading(false);
  };
  const next = () => {
    setLoading(true);
    if (typeof window !== "undefined") {
      const checkNetworkData = dataInstance.getOnTimeData(step);
      if (Object.keys(checkNetworkData).length > 0) {
        console.log("callNet");
        sendDataBeforePageForNetworkError(checkNetworkData);
      } else {
        if (step == "step5") {
          routeHandle("signup");
        } else {
          firstStep && sessionStorage.setItem("questions", "step2");
          step == "step2" && sessionStorage.setItem("questions", "step3");
          step == "step3" && sessionStorage.setItem("questions", "step4");
          step == "step4" && sessionStorage.setItem("questions", "step5");
          if (lastStep) {
            sessionStorage.setItem("rejultRoute", step);
            routeHandle("permission");
          } else {
            setReload(!reload);
            setLoading(false);
          }
        }
      }
    }
  };
  const sendDataBeforePageForNetworkError = async (postData) => {
    console.log("nwtFunctionCall", postData);
    try {
      // Assuming you have some data to send in the request body

      const response = await axios.post("https://quiz-node-johirabdullahs-projects.vercel.app/api/quiz/examdata", { ...postData, step });
      // const response = await axios.post("http://localhost:4000/api/quiz/examdata", { ...postData, step });

      const data = response.data;

      if (data.success) {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("id", data.uniqueString);
          if (step == "step5") {
            routeHandle("signup");
          } else {
            firstStep && sessionStorage.setItem("questions", "step2");
            step == "step2" && sessionStorage.setItem("questions", "step3");
            step == "step3" && sessionStorage.setItem("questions", "step4");
            step == "step4" && sessionStorage.setItem("questions", "step5");
            if (lastStep) {
              routeHandle("permission");
            } else {
              setReload(!reload);
              setLoading(false);
            }
          }
        }
      }
    } catch (error) {
      if (error.message == "Network Error") {
        alert("Netword connection faild");
        sendDataBeforePageForNetworkError(postData);
      } else {
        if (error.message == "running time finish") {
          alert("your visible time out , please agian to view");
          router.push("/");
          return;
        }
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
    setFirstStep(false);
    setLastStep(false);
    if (window) {
      console.log("window1");
      const inisialPage = sessionStorage.getItem("inisial");
      // for  page congrathulation or faild  after exam inisial page
      if (inisialPage) {
      console.log("window2");

        setInisial(true);
        sessionStorage.removeItem("inisial");
      }
      sessionStorage.removeItem("againRejult");
      const prev = sessionStorage.getItem("prevRejult");
      if (prev) {
        let step = sessionStorage.getItem("rejultRoute");
        sessionStorage.setItem("questions", step);
        sessionStorage.removeItem("prevRejult");
        setStep(step);
      }
      let step = sessionStorage.getItem("questions");
      setStep(step);
      const data = dataInstance.getData(step);
      console.log("window3",data);

      setStateData((prevData) => ({
        ...prevData,
        seconds: data.seconds,
        score: data.score,
        timeString: data.timeString,
        allSelect: data.allSelect,
        wrong: data.wrong,
      }));
      const obj = JSON.parse(sessionStorage.getItem("obj"));
      const arr = Object.keys(obj);
      console.log("window4",obj);

      arr.map((key, i) => {
        if (step == key) {
          let index = arr.length - 1;
          if (i == 0) {
            setFirstStep(true);
            if (i == arr.length - 1) {
              setLastStep(true);
              setLastWine(0);
              return;
            } else {
              arr[index] == "step2" && setLastWine(1);
              arr[index] == "step3" && setLastWine(2);
              arr[index] == "step4" && setLastWine(3);
              arr[index] == "step5" && setLastWine(4);
              return;
            }
          } else if (i == 1) {
            if (i == arr.length - 1) {
              setLastStep(true);
              setLastWine(1);
            } else {
              arr[index] == "step3" && setLastWine(2);
              arr[index] == "step4" && setLastWine(3);
              arr[index] == "step5" && setLastWine(4);
              return;
            }
          } else if (i == 2) {
            if (i == arr.length - 1) {
              setLastStep(true);
              setLastWine(2);
            } else {
              arr[index] == "step4" && setLastWine(3);
              arr[index] == "step5" && setLastWine(4);
              return;
            }
          } else if (i == 3) {
            if (i == arr.length - 1) {
              setLastStep(true);
              setLastWine(3);
            } else {
              arr[index] == "step5" && setLastWine(4);
              return;
            }
          } else if (i == 4) {
            if (i == arr.length - 1) {
              setLastStep(true);
              setLastWine(5);
            }
          }
        }
      });
    }
  }, [reload]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={styles.containear}>
      {inisial && <Congratulations wrong={stateData.wrong} />}
      <ProgressBar lastWine={lastWine} wrong={stateData.wrong} />
      <ResultCard
        stateData={stateData}
        step={step}
        firstStep={firstStep}
        lastStep={lastStep}
        othersPageHandleRoute={othersPageHandleRoute}
        routeHandle={routeHandle}
        againQuiz={againQuiz}
        prev={prev}
        next={next}
      />
    </div>
  );
};

export default Show;
