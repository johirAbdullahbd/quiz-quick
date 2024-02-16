// pages/index.js
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Loading from "./pages/loading/page";
import Fotter from "./components/fotter";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window) {
      sessionStorage.clear();
      sessionStorage.setItem("prevRoute", "/");
    }
  }, []);

  const navigateTo = (path) => {
    setLoading(true);
    router.push(`pages/${path}`);
  };

  const fotterNavigate = (path) => {
    setLoading(true);
    router.push(path);
  };

  const cardData = [
    {
      title: "Get Certificate",
      description: "For job and your profiles.",
      path: "getcertificate",
    },
    {
      title: "Programing Quiz",
      description: "For software engineering, development, programming, DevOps, and related topics.",
      path: "skillselect",
    },
    {
      title: "Academic Quiz",
      description: "For school, college, university, and government-approved academic subjects.",
      path: "empty",
    },
    {
      title: "World Wide Quiz",
      description: "For world economy, politics, history, playing, researching, and global social issues.",
      path: "empty",
    },
    {
      title: "Job Preparation Quiz",
      description: "For government and private job sectors like teaching, banking, accounting, healthcare, etc.",
      path: "empty",
    },
    {
      title: "Additional Exam",
      description: "Stack-learner, saifurse(banglades),retina(bangladesh),FM-methord(banglades),MIT-carere dipperment,Harverd-schienc-group,etc...",
      path: "empty",
    },
    {
      title: "Our Services",
      description: "create your custom questtions set your students,job employer,addmition, etc...",
      path: "empty",
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      {loading ? (
        <Loading />
      ) : (
        <main className={styles.main}>
          <div className={styles.description}>
            <div>
              <h3>
                <span className={styles.smallFontSize}>By</span> <span className={styles.largeFontSize}>JA</span> Academy
              </h3>
            </div>

            <div className={styles.card} onClick={() => navigateTo("getcertificate")}>
              <h2>
                {cardData[0].title} <span>-&gt;</span>
              </h2>
              <p>{cardData[0].description}</p>
            </div>
          </div>

          <h1 className={styles.center}>Welcome for quiz exam</h1>

          <div className={styles.grid}>
            {cardData.slice(1).map((card, index) => (
              <div key={index} className={styles.card} onClick={() => navigateTo(card.path)}>
                <h2>
                  {card.title} <span>-&gt;</span>
                </h2>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
          <Fotter navigateTo={fotterNavigate} />
        </main>
      )}
    </div>
  );
};

export default Home;
