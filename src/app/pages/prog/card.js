import { useState } from "react";
import styles from "../../styles/show/card.module.css";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p className={styles.pragraph}>{message}</p>
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const ResultCard = ({ stateData, step, firstStep, lastStep, othersPageHandleRoute, routeHandle, againQuiz, prev, next }) => {
  const [showModal, setShowModal] = useState(false);
  const [route, setRoute] = useState("");

  const handleClearAndGoToHomePage = () => {
    setRoute("/");
    setShowModal(true);
  };

  const handleClearAndSelectOthers = () => {
    setRoute("skillselect");
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    // Call the appropriate function
    // For example:
    othersPageHandleRoute(route);
    // othersPageHandleRoute("sillselect");
  };

  const handleModalCancel = () => {
    setRoute("");
    setShowModal(false);
  };

  const certificateStr = () => {
    if (step !== "step5") {
      return <h3 style={{ color: "greenyellow" }}>Get Your Certificate Need To Wine Step 5</h3>;
    } else {
      if (stateData.wrong > 2) {
        return <h3 style={{ color: "lightblue" }}>Ready Your Certificate</h3>;
      } else {
        return <h3 style={{ color: "greenyellow" }}>Get Your Certificate Need To Wine Step 5</h3>;
      }
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.heading}>{step.charAt(0).toUpperCase() + step.slice(1)}</div>
      <div className={styles.resultInfo}>
        {certificateStr()}
        <p>Your score: {stateData.score} of 100</p>
        <p>Your all questions selected: {stateData.allSelect} of 100</p>
        <p>Non-selected questions:{stateData.wrong - stateData.allSelect} of 100</p>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton} onClick={() => routeHandle("seepage")}>
          see your exam
        </button>
        {lastStep && (
          <button className={styles.secondaryButton} onClick={againQuiz}>
            again
          </button>
        )}
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton} onClick={handleClearAndGoToHomePage}>
          Clear all and go to home page
        </button>
        <button className={styles.secondaryButton} onClick={handleClearAndSelectOthers}>
          Clear and select others subject
        </button>
      </div>
      <div className={styles.buttonGroup}>
        {!firstStep && (
          <button className={`${styles.primaryButton} ${styles.navButton} `} onClick={prev}>
            <i className={`fas fa-chevron-left ${styles.left}`}></i> <i className={`fas fa-chevron-left ${styles.left}`}></i> Prev Page
          </button>
        )}
        <button
          className={`${styles.secondaryButton} ${styles.navButton}  ${lastStep && stateData.wrong < 3 && styles.disabled} ${
            lastStep && step === "step5" && styles.certificateBtn
          }`}
          onClick={next}
          disabled={lastStep && stateData.wrong < 3}
        >
          {lastStep ? (step === "step5" ? "get certificate" : "Start next step quiz") : "Next step"}
          <i className={`fas fa-chevron-right ${styles.right}`}></i>
          <i className={`fas fa-chevron-right ${styles.right}`}></i>
        </button>
      </div>

      {showModal && <ConfirmationModal message="Are you sure you want to delete?" onConfirm={handleModalConfirm} onCancel={handleModalCancel} />}
    </div>
  );
};

export default ResultCard;
