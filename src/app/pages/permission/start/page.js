"use client";
import { useEffect, useState } from "react";
import Styles from "../../../styles/quizStyle/permision.module.css";
import { useRouter } from "next/navigation";
import markDataInstance from "@/app/server/mark";
const SecondStart = () => {
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [seconds, setSeconds] = useState(3);
  const router = useRouter();

  if (!markDataInstance.getSubjectName()) {
    return <Custom404 />;
  }
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
      setIsTimerActive(false);
      router.push("/pages/quiz");
    }
  }, [seconds]);
  return (
    <div className={Styles.startContainear}>
      <div className={Styles.start}>
        <span>{seconds}</span>
      </div>
    </div>
  );
};
export default SecondStart;
