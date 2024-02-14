import styles from "@/app/styles/contact/imageShow.module.css";
import Image from "next/image";
const ImgShow = () => {
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
            "Our system is starting in such a way that parents can allocate time and money. We are forming groups of 20 students in each batch. For
            them, we are arranging an experienced parent. We are arranging 4 live teachers separately for teaching each of the 4 subjects every day.
            In addition, there will be special recorded videos for each topic, which will help in their intellectual development.
          </p>
          <button className={styles.cardButton}>Learn More</button>
        </div>
      </div>
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
          <h3>CEO</h3>
          <p className={styles.cardDescription}>
            "Our system is starting in such a way that parents can allocate time and money. We are forming groups of 20 students in each batch. For
            them, we are arranging an experienced parent. We are arranging 4 live teachers separately for teaching each of the 4 subjects every day.
            In addition, there will be special recorded videos for each topic, which will help in their intellectual development.
          </p>
          <button className={styles.cardButton}>Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default ImgShow;
