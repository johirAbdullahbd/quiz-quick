"use client";
import { useEffect, useState } from "react";
import Styles from "../../styles/quizStyle/permision.module.css";
const SecondStart = ({ handleQuizStart }) => {
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [seconds, setSeconds] = useState(3);
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
    if (seconds == 1) {
      handleQuizStart();
      setIsTimerActive(false);
    }
  }, [seconds]);
  return (
    <div className={Styles.card}>
      <span>{seconds}</span>
    </div>
  );
};
export default SecondStart;
