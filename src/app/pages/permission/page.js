"use client";
import { useRouter } from "next/navigation";
import Styles from "../../styles/quizStyle/permision.module.css";
import markDataInstance from "@/app/server/mark";
import Custom404 from "@/app/error";
import Loading from "../loading/page";
import { useState } from "react";

const Permision = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // Check previus route
  if (!markDataInstance.getSubjectName()) {
    return <Custom404 />;
  }
  const handleRoute = (path) => {
    setLoading(true);
    router.push(path);
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={Styles.container}>
          <div className={Styles.card}>
            <h1> Ready your exam jurny </h1>
            <p>click to start button and exam time start </p>
            <div className={Styles.buttons}>
              <button onClick={() => handleRoute("skillselect")}>Close</button>
              <button onClick={() => handleRoute("quiz")}>Start</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Permision;
