// MarkShitPage.js;
import styles from "../../styles/marksheet/MarkShitPage.module.css";

import url from "./images.jpeg";

const MarkShitPage = () => {
  const arr = [
    { name: "react", point: "5.6" },
    { name: "next.js", point: 3.3 },
    { name: "javascript", point: 8.8 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card1}>
        <div className={styles.card2}>
          <h1 className={styles.heading}>J A Academy quiz exam certification</h1>
          <h3>Date:- 20/09/2024</h3>
          <img className={styles.image} src={url} alt="Uploaded Image" />
          <h1 className={styles.examInfo}>Examini Name:- johir abdullah</h1>
          <div className={styles.subjects}>
            <div className={styles.subject}>
              <h3>Subject</h3>
              <h3>Result</h3>
            </div>
            {arr.map((subject) => (
              <div className={styles.subject} key={subject.name}>
                <h4>{subject.name}</h4>
                <h4>{subject.point}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkShitPage;
