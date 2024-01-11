import { useRouter } from "next/router";
import Styles from "../../styles/skilsSelectStyle/skillSelect.module.css";
const SkillsList = ({ handleClick }) => {
  return (
    <div>
      <ul className={Styles.skillsContainer}>
        {skills.map((skills) => (
          <li className={Styles.list} onClick={() => handleClick(skills)}>
            {skills} <span>-&gt;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SkillsList;
const skills = ["HTML", "CSS", "JavaScript", "Python", "PHP", "Bootstrap", "C", "Tailwind", "React.js", "Next.js", "Veu.js", "Node.js", "Express.js"];
