"use client";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import "@fortawesome/fontawesome-svg-core/styles.css";

// library.add(faCheck);

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import getQuestions from "@/app/server/getQuestion";
// import questions from "./quetionData";
import QuizUi from "@/app/components/quizUi";

const App = () => {
  const [pdfView, setPdfView] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [selectedObj, setSelectedObj] = useState({});
  const [quizStart, setQuizStart] = useState(false);
  const [timeString, setTimeString] = useState("");
  const [rejultShow, setRejultShow] = useState(false);

  const [seePage, setSeePage] = useState(false);
  const [seconds, setSeconds] = useState(20);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [score, setScore] = useState(0);
  const [allSelectedQuestionNumber, setAllSelectedQuestionNumber] = useState(0);
  const [resetQuiz, setResetQuiz] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 200; // Adjust this threshold as needed

    setIsVisible(scrollY > showThreshold);
  };
  useEffect(() => {
    // setQuestions(getQuestions(sessionStorage.getItem("subject")));

    // const preventTextSelection = (event) => {
    //   event.preventDefault();
    // };

    // Attach the preventTextSelection function to the selectstart and contextmenu events
    // document.addEventListener("selectstart", preventTextSelection);
    // document.addEventListener("contextmenu", preventTextSelection);
    window.addEventListener("scroll", handleScroll);
    //Cleanup: Remove event listeners when the component is unmounted
    return () => {
      // document.removeEventListener("selectstart", preventTextSelection);
      // document.removeEventListener("contextmenu", preventTextSelection);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const array = getQuestions(sessionStorage.getItem("subject"));

    setQuestions(shuffleArray(array).slice(0, 100));
  }, [resetQuiz]);

  const handleScore = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
  };
  const handleAllSelectCount = (isAdded) => {
    if (isAdded) {
      setAllSelectedQuestionNumber((preNumber) => preNumber + 1);
    } else {
      setAllSelectedQuestionNumber((preNumber) => preNumber - 1);
    }
  };

  useEffect(() => {
    // Start the interval if isTimerActive is true
    if (isTimerActive) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      // Cleanup function to clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }

    // Stop the interval when isTimerActive becomes false
  }, [isTimerActive]);

  useEffect(() => {
    if (seconds == 0) {
      setIsTimerActive(false);
      // setSeePage(true);
      setRejultShow(true);
    }
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTimeString = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

    setTimeString(formattedTimeString);
  }, [seconds]);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1 * 60);
    let scrollPosition = window.scrollY;

    const scrollInterval = setInterval(() => {
      if (scrollPosition > 0) {
        window.scrollBy(0, scrollStep);
        scrollPosition += scrollStep;
      } else {
        clearInterval(scrollInterval);
      }
    }, 1000 / 60);
  };

  const handleButtonClick = () => {
    scrollToTop();
  };

  const handleQuizStart = (again) => {
    if (again) {
      setSeePage(false);
      setTimeString("");
      setSeconds(10);
      setAllSelectedQuestionNumber(0);
      setScore(0);
      setRejultShow(false);
      setResetQuiz((prevData) => !prevData);
      setQuizStart(false);
      setIsTimerActive(false);
    } else {
      setQuizStart(true);
      setIsTimerActive(true);
    }
  };
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  // useEffect(() => shuffleArray(array), []);
  const handleAnsViews = () => {
    setSeePage(true);
    setRejultShow(false);
  };

  const handleSelectedObj = (key, value) => {
    const obj = selectedObj;
    if (value) {
      obj[key] = value;
      setSelectedObj(obj);
    } else {
      delete obj[key];

      setSelectedObj(obj);
    }
  };

  return (
    <div>
      <QuizUi
        selectedObj={selectedObj}
        handleSelectedObj={handleSelectedObj}
        handleAnsViews={handleAnsViews}
        rejultShow={rejultShow}
        quizStart={quizStart}
        timeString={timeString}
        seconds={seconds}
        score={score}
        allSelectedQuestionNumber={allSelectedQuestionNumber}
        isVisible={isVisible}
        scrollToTop={scrollToTop}
        questions={questions}
        seePage={seePage}
        resetQuiz={resetQuiz}
        handleScore={handleScore}
        handleAllSelectCount={handleAllSelectCount}
        handleQuizStart={handleQuizStart}
      />
    </div>
  );
};

export default App;
const array = [
  { 1: "ab" },
  { 2: "33" },
  { 3: "22" },
  { 9: "kdd" },
  { 4: "dd" },
  { 5: "jj" },
  { 6: "dd", 7: "dd" },
  { 6: "ddd" },
  { 0: "dd" },
  { dd: "dd", d: "dd" },
  { b: "dd", s: "dsd" },
  { ddd: "dd" },
  { 6: "ddt" },
];
