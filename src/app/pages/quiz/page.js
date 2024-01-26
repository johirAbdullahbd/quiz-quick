"use client";

import Styles from "../../styles/quizStyle/permision.module.css";
import React, { useState, useEffect } from "react";
import QuizUi from "@/app/components/quizUi";
import { useRouter } from "next/navigation";
import Custom404 from "@/app/error";
import dataInstance from "@/app/server/mark";
import axios from "axios";

const App = () => {
  const router = useRouter();

  // Initial state
  const initialState = {
    allQuestions: [],
    selectedObj: {},
    timeString: "",
    seconds: 5,
    isTimerActive: false,
    score: 0,
    allSelect: 0,
    isVisible: false,
    loading: true,
    error: null,
    startTimerActive: true,
    startSeconds: 3,
  };

  const [state, setState] = useState(initialState);
  const subject = dataInstance.getSubjectName();
  if (!subject) {
    return <Custom404 />;
  }

  const fetchData = async () => {
    try {
      const response = await axios.post(" https://quiz-node-johirabdullahs-projects.vercel.app/api/quiz/questions", {
        subjectName: subject,
      });
      // const response = await axios.post("http://localhost:4000/api/quiz/questions", { subjectName: subject });
      const allQuestions = response.data.allQuestions;
      setState((prevState) => ({ ...prevState, allQuestions: [...allQuestions] }));
      dataInstance.setQuestions(allQuestions);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      setState((prevState) => ({ ...prevState, error: error }));
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  useEffect(() => {
    // Start the interval if state.startTimerActive is true
    if (state.startTimerActive) {
      const intervalId = setInterval(() => setState((prevState) => ({ ...prevState, startSeconds: prevState.startSeconds - 1 })), 1000);

      // Cleanup function to clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }

    // Stop the interval when state.startTimerActive becomes false
  }, [state.startTimerActive]);
  useEffect(() => {
    if (state.startSeconds == 0) {
      setState((prevState) => ({ ...prevState, startTimerActive: false }));
      if (state.error) {
        console.log(state.error, "error");
        router.push("/pages/permission");
      } else {
        if (!state.loading) {
          setState((prevState) => ({ ...prevState, isTimerActive: true }));
        }
      }
      // router.push("/pages/quiz");
    }
  }, [state.startSeconds]);

  // Event handler for scrolling
  const handleScroll = () => {
    const showThreshold = 200;
    setState((prevState) => ({ ...prevState, isVisible: window.scrollY > showThreshold }));
  };

  // Check previus route
  if (!dataInstance.getSubjectName()) {
    return <Custom404 />;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("JAQC");
    }

    fetchData();

    // Event listener setup for preventing text selection and context menu
    const preventTextSelection = (event) => event.preventDefault();
    document.addEventListener("selectstart", preventTextSelection);
    document.addEventListener("contextmenu", preventTextSelection);
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove event listeners when the component is unmounted
    return () => {
      document.removeEventListener("selectstart", preventTextSelection);
      document.removeEventListener("contextmenu", preventTextSelection);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Timer interval setup
  useEffect(() => {
    if (state.isTimerActive) {
      const intervalId = setInterval(
        () => setState((prevState) => ({ ...prevState, seconds: prevState.isTimerActive ? prevState.seconds - 1 : prevState.seconds })),
        1000
      );
      // Cleanup: Clear interval when the component is unmounted or on timer completion
      return () => clearInterval(intervalId);
    }
  }, [state.isTimerActive]);

  // Timer countdown and time string update
  useEffect(() => {
    // Conditional logic for submitting on timer completion
    state.seconds === 0 && submit();

    // Calculate minutes and remaining seconds
    const minutes = Math.floor((state.seconds % 3600) / 60);
    const remainingSeconds = state.seconds % 60;

    // Format time string
    const formattedTimeString = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

    // Update state with formatted time string
    setState((prevState) => ({ ...prevState, timeString: formattedTimeString }));
  }, [state.seconds]);

  // Event handler for updating score based on correctness
  const handleScore = (isCorrect) => setState((prevState) => ({ ...prevState, score: isCorrect ? prevState.score + 1 : prevState.score - 1 }));

  // Event handler for updating allSelect based on addition/removal
  const handleAllSelectCount = (isAdded) =>
    setState((prevState) => ({
      ...prevState,
      allSelect: isAdded ? prevState.allSelect + 1 : prevState.allSelect - 1,
    }));

  // Event handler for form submission
  const submit = () => {
    const points = (state.score / 100) * 10;
    const score = parseFloat(points.toFixed(10));

    // Save mark dataInstance to storage
    dataInstance.setData({
      seconds: state.seconds,
      timeString: state.timeString,
      score,
      allSelect: state.allSelect,
      selectedObj: state.selectedObj,
    });
    // Update state to stop the timer
    setState((prevState) => ({ ...prevState, isTimerActive: false }));
    // Navigate to the result page
    ///
    const setData = async () => {
      try {
        // Assuming you have some data to send in the request body
        let str;
        // if (typeof window !== "undefined") {
        //   str = sessionStorage.getItem("id");
        // }
        const postData = {
          uniqueString: str,
          subjectName: dataInstance.getSubjectName(),
          score,
        };

        const response = await axios.post("https://quiz-node-johirabdullahs-projects.vercel.app/api/quiz/examdata", postData);
        // const response = await axios.post("http://localhost:4000/api/quiz/examdata", postData);

        const data = response.data;

        if (data.success) {
          if (typeof window !== "undefined") {
            sessionStorage.setItem("id", data.uniqueString);
          }
        } else {
          console.log("error");
        }

        console.log(data);
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };
    setData();

    ///
    router.push("showrejult");
  };

  // Event handler for smooth scroll to top
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

  // Event handler for updating questions options selectedObj based on key and value
  const handleSelectedObj = (key, value) => {
    setState((prevState) => {
      const obj = { ...prevState.selectedObj };
      // Conditional logic for adding or removing key from obj
      if (value) obj[key] = value;
      else delete obj[key];
      // Update state with modified selectedObj
      return { ...prevState, selectedObj: obj };
    });
  };

  return (
    <div>
      {state.startSeconds !== 0 ? (
        <div className={Styles.startContainear}>
          <div className={Styles.start}>
            {state.startSeconds == 0 ? (
              <p>
                <span>L...</span>
              </p>
            ) : (
              <span>{state.startSeconds}</span>
            )}
          </div>
        </div>
      ) : (
        <QuizUi
          submit={submit}
          handleSelectedObj={handleSelectedObj}
          timeString={state.timeString}
          score={state.score}
          allSelect={state.allSelect}
          isVisible={state.isVisible}
          scrollToTop={scrollToTop}
          allQuestions={state.allQuestions}
          handleScore={handleScore}
          handleAllSelectCount={handleAllSelectCount}
        />
      )}
    </div>
  );
};

export default App;
