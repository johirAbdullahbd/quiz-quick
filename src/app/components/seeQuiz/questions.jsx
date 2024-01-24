import Image from "next/image";
import Styles from "../../styles/quizStyle/questionSelect.module.css";

const Questions = ({ index, questions, selectedObj }) => {
  const handleStyle = (option) => {
    if (option === questions.correctAnswer) {
      return option === selectedObj[index] ? Styles.correct : Styles.deafaultAns;
    } else {
      return selectedObj[index] === option ? Styles.wrong : Styles.resetPointer;
    }
  };

  return (
    <div className={Styles.mcqContainer}>
      <h3>
        {index}. {questions.question}
      </h3>
      <Image
        className={Styles.img}
        src="https://ipfs.filebase.io/ipfs/QmRdvZX4FTx84TjybCXpzoXLFK5u2x3JbhHVCaZS1piwp8"
        // src="https://i.postimg.cc/Lhxcrvm5/Screenshot-2023-10-21-073257.png"
        width={600}
        height={200}
        alt="Screenshot-2023-10-21-073257"
      />
      <ul>
        {questions.options.map((option, idx) => (
          <div key={idx}>
            <li className={handleStyle(option)}>{option}</li>

            <div className={Styles.ans}>
              {handleStyle(option) === Styles.correct && <span>Your answer is correct</span>}
              {handleStyle(option) === Styles.wrong && <span>Your answer is wrong</span>}
              {handleStyle(option) === Styles.deafaultAns && <span>Default answer</span>}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Questions;
