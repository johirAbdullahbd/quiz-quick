"use client";
import axios from "axios";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    sessionStorage.setItem("prevRoute", "/");
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h3>
            <span style={{ fontSize: "25px" }}>By</span> <span style={{ fontSize: "44px", fontWeight: "bolder", color: "lightblue" }}>JA</span>
            Academy
          </h3>
        </div>

        <div className={styles.card} onClick={() => router.push("pages/getcertificate")}>
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

        <div className={styles.card} onClick={() => router.push("pages/empty")}>
          <h2>
            Academic Quiz <span>-&gt;</span>
          </h2>
          <p>This quiz for school, collage, university and govment permisionend religion (madrasha) academic subjects ,</p>
        </div>

        <div className={styles.card} onClick={() => router.push("pages/empty")}>
          <h2>
            world Wide Quiz <span>-&gt;</span>
          </h2>
          <p>This quiz for world economy, politics, history, playing, reserching, jolbayu and wolds social unnoyo , issue and others etc...</p>
        </div>

        <div className={styles.card} onClick={() => router.push("pages/empty")}>
          <h2>
            Job Peperation Quiz <span>-&gt;</span>
          </h2>
          <p>This quiz for govement and privets (like teacher banker acounting doctor nurs enginear and others etc..)</p>
        </div>
      </div>
    </main>
  );
}
