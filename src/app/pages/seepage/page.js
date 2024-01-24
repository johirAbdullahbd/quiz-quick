"use client";
import Navbar from "@/app/components/navbar";
import Styles from "../../styles/quizStyle/page.module.css";
import SeeHeadding from "@/app/components/seeQuiz/headding";
import Questions from "@/app/components/seeQuiz/questions";
import dataInstance from "@/app/server/mark";
import { useState, useEffect } from "react";

const SeePage = () => {
  // Initial state
  const initialState = {
    allQuestions: [],
    selectedObj: {},
    timeString: "",
    score: 0,
    allSelect: 0,
    isVisible: false,
  };

  const [state, setState] = useState(initialState);

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

  return (
    <div>
      <Navbar />
      <div className={Styles.mainContainer}>
        <div className={Styles.container}>
          <SeeHeadding
            timeString={state.timeString}
            allSelect={state.allSelect}
            score={state.score}
            isVisible={state.isVisible}
            scrollToTop={scrollToTop}
          />
          {state.allQuestions.map((questions, index) => (
            <Questions index={index} questions={questions} selectedObj={state.selectedObj} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SeePage;
