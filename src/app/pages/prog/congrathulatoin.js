// components/Congratulations.js
import styles from "../../styles/show/congrathulation.module.css";

const Congratulations = ({ wrong }) => {
  return (
    <div className={styles.congratulationsContainer}>
      {wrong > 7 ? <h1 className={styles.congratulationsHeader}>Congratulations!</h1> : <h2 style={{ color: "brown" }}>Faild your exam score</h2>}
      {wrong > 7 ? (
        <p className={styles.congratulationsText}>You've achieved wine amazing! score</p>
      ) : (
        <p style={{ color: "#ed979a" }}>You've achieved wine score minmum 7 up</p>
      )}
      {/* Add more content or animations as needed */}
    </div>
  );
};

export default Congratulations;
