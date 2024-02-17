// components/ProgressBar.js
import React from "react";
import styles from "../../styles/show/progressBar.module.css";
import dataInstance from "@/app/server/mark";

const ProgressBar = ({ lastWine, wrong }) => {
  const steps = ["step1", "step2", "step3", "step4", "step5"];
  console.log(dataInstance.getData());
  console.log(dataInstance.getData(steps[lastWine]), steps[lastWine]);
  const getScore = (step) => {
    const data = dataInstance.getData(step);
    return data.score;
  };
  const getStyle = (step, index) => {
    const data = dataInstance.getData(step);
    if (data.wrong > 7) {
      return styles.completed;
    } else {
      if (index == lastWine) {
        if (data.wrong > 7) {
          return styles.completed;
        } else {
          return styles.active;
        }
      } else if (!steps[lastWine]) {
        if (step == "step5") {
          return styles.active;
        }
      }
    }
  };
  return (
    <div className={styles.progressBar}>
      {steps.map((step, index) => (
        <div key={index} className={`${styles.step} ${getStyle(step, index)}`}>
          {getScore(step)}
          <div className={styles.starWrapper}>
            {Array.from({ length: index + 1 }).map((_, iconIndex) => (
              <i key={iconIndex} className={`fas fa-star ${styles.starIcon}`} />
            ))}
          </div>
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
