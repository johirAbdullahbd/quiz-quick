"use client";
import { useRouter } from "next/navigation";
import styles from "./empty.module.css";
import { useState } from "react";
import Loading from "../loading/page";
export default function Empty() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRoute = (path) => {
    setLoading(true);
    router.push("skillselect");
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.containear}>
          <h1>this quiz exam questions not ready. please wait for write questions</h1>
          <p>please start your jurny with quiz exam, click to down button </p>
          <button className={styles.btn} onClick={handleRoute}>
            Start To Quiz
            <i className={`fas fa-chevron-right ${styles.right}`}></i> <i className={`fas fa-chevron-right ${styles.right}`}></i>
          </button>
        </div>
      )}
    </div>
  );
}
