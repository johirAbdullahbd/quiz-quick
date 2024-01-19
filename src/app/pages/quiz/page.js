"use client";

import React, { useState, useEffect } from "react";
import getQuestions from "@/app/server/getQuestion";
import QuizUi from "@/app/components/quizUi";
import markDataInstance from "@/app/server/mark";
import { useRouter } from "next/navigation";
import Custom404 from "@/app/error";

const App = () => {
  const router = useRouter();

  // Initial state
  const initialState = {
    questions: [],
    selectedObj: {},
    timeString: "",
    rejultPage: false,
    seconds: 12,
    isTimerActive: true,
    score: 0,
    allSelect: 0,
    isVisible: false,
  };

  const [state, setState] = useState(initialState);

  // Event handler for scrolling
  const handleScroll = () => {
    const showThreshold = 200;
    setState((prevState) => ({ ...prevState, isVisible: window.scrollY > showThreshold }));
  };

  // Function to fetch questions
  const fetchQuestions = () => {
    const array = getQuestions(markDataInstance.getSubjectName());
    setState((prevState) => ({ ...prevState, questions: shuffleArray(array).slice(0, 100) }));
  };
  // Check previus route
  if (!markDataInstance.getSubjectName()) {
    return <Custom404 />;
  }
  useEffect(() => {
    // Check if there are no saved questions and fetch inisial data handle
    const data = markDataInstance.getMarkData();
    if (data.questions.length === 0) {
      // Fetch initial data
      fetchQuestions();
    } else {
      console.log("kkk");
      // Update this page for see all answer
      setState((prevState) => ({ ...prevState, isTimerActive: false, ...data, rejultPage: true }));
    }

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
    const intervalId = setInterval(
      () => setState((prevState) => ({ ...prevState, seconds: prevState.isTimerActive ? prevState.seconds - 1 : prevState.seconds })),
      1000
    );

    // Cleanup: Clear interval when the component is unmounted or on timer completion
    return () => clearInterval(intervalId);
  }, [state.isTimerActive]);

  // Timer countdown and time string update
  useEffect(() => {
    // Conditional logic for submitting on timer completion
    if (!state.rejultPage && state.seconds === 0) submit();

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
    // Save mark data to storage
    markDataInstance.setMarkData({
      seconds: state.seconds,
      timeString: state.timeString,
      score: state.score,
      allSelect: state.allSelect,
      selectedObj: state.selectedObj,
      questions: state.questions,
    });
    // Update state to stop the timer
    setState((prevState) => ({ ...prevState, isTimerActive: false }));
    // Navigate to the result page
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

  // Function for shuffling an questions data array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
      <QuizUi
        submit={submit}
        selectedObj={state.selectedObj}
        handleSelectedObj={handleSelectedObj}
        timeString={state.timeString}
        score={state.score}
        allSelect={state.allSelect}
        isVisible={state.isVisible}
        scrollToTop={scrollToTop}
        questions={state.questions}
        rejultPage={state.rejultPage}
        handleScore={handleScore}
        handleAllSelectCount={handleAllSelectCount}
      />
    </div>
  );
};

export default App;
