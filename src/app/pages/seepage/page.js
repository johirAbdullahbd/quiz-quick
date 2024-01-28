"use client";
import Navbar from "@/app/components/navbar";
import Styles from "../../styles/quizStyle/page.module.css";
import SeeHeadding from "@/app/components/seeQuiz/headding";
import Questions from "@/app/components/seeQuiz/questions";
import dataInstance from "@/app/server/mark";
import { useState, useEffect } from "react";
import Custom404 from "@/app/error";
import Loading from "../loading/page";
import { useRouter } from "next/navigation";

const SeePage = () => {
  const [loading, setLoading] = useState(false);
  // Initial state
  const initialState = {
    allQuestions: [],
    selectedObj: {},
    timeString: "",
    score: 0,
    wrong: 0,
    allSelect: 0,
    isVisible: false,
  };

  const [state, setState] = useState(initialState);

  const router = useRouter();
  if (!dataInstance.getSubjectName()) {
    return <Custom404 />;
  }

  const handleScroll = () => {
    const showThreshold = 200;
    setState((prevState) => ({ ...prevState, isVisible: window.scrollY > showThreshold }));
  };
  useEffect(() => {
    const data = dataInstance.getData();
    const allQuestions = dataInstance.getQuestions();
    console.log("helo", allQuestions, "allQuesions", data);
    setState((prevState) => ({ ...prevState, ...data, allQuestions: [...allQuestions] }));
    window.addEventListener("scroll", handleScroll);
    // Cleanup: Remove event listeners when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1 * 60);
    let scrollPosition = window.scrollY;
    const scrollInterval = setInterval(() => {
      if (scrollPosition > 0) {
        window.scrollBy(0, scrollStep);
        scrollPosition += scrollStep;
      } else clearInterval(scrollInterval);
    }, 1000 / 60);
  };
  const handleRoute = (path) => {
    setLoading(true);
    console.log("path", path);
    if (path == "signup") {
      console.log("path1");
      const checkNetworkData = dataInstance.getOnTimeData();
      if (Object.keys(checkNetworkData).length > 0) {
        console.log("path2");
        sendDataBeforePageForNetworkError(checkNetworkData);
      } else {
        console.log("path3");
        router.push(path);
      }
    } else {
      console.log("path4");
      router.push(path);
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
        router.push("signup");
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
        <div>
          <Navbar handleNavRoute={handleRoute} />
          <div className={Styles.mainContainer}>
            <div className={Styles.container}>
              <SeeHeadding
                wrong={wrong}
                timeString={state.timeString}
                allSelect={state.allSelect}
                score={state.score}
                isVisible={state.isVisible}
                scrollToTop={scrollToTop}
                handleHeadingRoute={handleRoute}
              />
              {state.allQuestions.map((questions, index) => (
                <Questions index={index} questions={questions} selectedObj={state.selectedObj} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SeePage;
