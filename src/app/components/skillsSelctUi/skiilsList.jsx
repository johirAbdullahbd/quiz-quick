import Styles from "../../styles/skilsSelectStyle/skillSelect.module.css";
const SkillsList = ({ handleClick }) => {
  return (
    <div>
      <ul className={Styles.skillsContainer}>
        {/* Mapping through skills to create list items */}

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
const skills = ["HTML", "CSS", "Javascript", "Python", "PHP", "Bootstrap", "C", "Tailwind", "react", "Next.js", "Veu.js", "Node.js", "Express.js"];
