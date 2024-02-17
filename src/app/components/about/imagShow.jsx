import styles from "@/app/styles/contact/imageShow.module.css";
import Image from "next/image";
import Link from "next/link";
const ImgShow = ({ navigateTo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src="https://ipfs.filebase.io/ipfs/QmNSu8q1kJtwhZxkPhu9drGw3NEu3yiHCrzdmG1zpTFL37"
          alt="johir_abdullah"
          className={styles.cardImage}
          width={600}
          height={400}
        />
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>Johir_Abdullah</h2>
          <h3>Founder</h3>
          <p className={styles.cardDescription}>
            I am ready to present myself as a newbie in learning new things. I have worked on a number of projects, always immersing myself in them,
            which will have global exposure in the future. These projects allowed me to learn new things and I took every challenge to improve myself.
            I like to be busy with work and learning new things and I am ready to face any challenge in new situations anytime.
          </p>
          <button className={styles.cardButton} onClick={() => navigateTo("/pages/contact/founder")}>
            Learn More..
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <Image
          src="https://ipfs.filebase.io/ipfs/QmXm7VRyyogkTkDLnaoZyckJgU9BBZMXzgndnVLFioDp7N"
          alt="johir_abdullah"
          className={styles.cardImage}
          width={600}
          height={400}
        />
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>Emranul_Amin</h2>
          <h3>CEO</h3>
          <p className={styles.cardDescription}>
            Hi, I look forward to meeting you, we can talk about making our dreams come true. I am serious about learning anything, I am Honors 2nd
            year student of Psychology Department of Shahjalal University of Science and Technology. I am excited for the possibility of improvement
            in the future and always feel free to contact me.
          </p>

          <button className={styles.cardButton} onClick={() => navigateTo("/pages/contact/ceo")}>
            Learn More..
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImgShow;
