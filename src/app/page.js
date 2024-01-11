"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
        </div>

        <div className={styles.card}>
          <h2>
            Get Sertificate <span>-&gt;</span>
          </h2>
          <p> for job and your profiles. </p>
        </div>
      </div>

      <h1 className={styles.center}>welcome for quiz exam</h1>

      <div className={styles.grid}>
        <div className={styles.card} onClick={() => router.push("pages/skillselect")}>
          <h2>
            Programing Quiz <span>-&gt;</span>
          </h2>
          <p>This quiz for softwer enginearing, development , programing,deveopses and same related </p>
        </div>

        <div className={styles.card} onClick={() => router.push("")}>
          <h2>
            Academic Quiz <span>-&gt;</span>
          </h2>
          <p>This quiz for school, collage, university and govment permisionend religion (madrasha) academic subjects ,</p>
        </div>

        <div className={styles.card} onClick={() => router.push("")}>
          <h2>
            world Wide Quiz <span>-&gt;</span>
          </h2>
          <p>This quiz for world economy, politics, history, playing, reserching, jolbayu and wolds social unnoyo , issue and others etc...</p>
        </div>

        <div className={styles.card} onClick={() => router.push("")}>
          <h2>
            Job Peperation Quiz <span>-&gt;</span>
          </h2>
          <p>This quiz for govement and privets (like teacher banker acounting doctor nurs enginear and others etc..)</p>
        </div>
      </div>
    </main>
  );
}
