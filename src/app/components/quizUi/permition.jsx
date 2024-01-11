"use client";
import { useRouter } from "next/navigation";
import Styles from "../../styles/quizStyle/permision.module.css";
import SecondStart from "./startSecond";
import { useState } from "react";
const Permision = ({ handleQuizStart }) => {
  const [startNumber, setStartNumber] = useState(false);
  const router = useRouter();
  const handleClicked = (yeas) => {
    if (yeas) {
      setStartNumber(true);
    } else {
      router.push("skillselect");
    }
  };
  return (
    <div className={Styles.container}>
      {startNumber ? (
        <SecondStart handleQuizStart={handleQuizStart} />
      ) : (
        <div className={Styles.card}>
          <h1>hello start page to </h1>
          <p>kjdsk dkjfiej djflaup eoeurdhh = fjd </p>
          <div className={Styles.buttons}>
            <button onClick={() => handleClicked(false)}>Close</button>
            <button onClick={() => handleClicked(true)}>Start</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Permision;
