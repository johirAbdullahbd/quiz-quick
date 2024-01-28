// components/Loading.js
"use client";
import { useEffect, useRef } from "react";
import styles from "../../styles/loading/loading.module.css";

// components/Loading.js

const Loading = () => {
  const text = "Loading...";
  const textContainerRef = useRef(null);

  useEffect(() => {
    const chars = textContainerRef.current.children;

    Array.from(chars).forEach((char, index) => {
      char.style.transition = `transform 0.5s ${index * 0.1}s ease-in-out, opacity 0.5s ease-in-out`;
      char.style.transform = "translateX(0)";
      char.style.opacity = "1";
    });
  }, []);

  return (
    <div className={styles.containear}>
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText} ref={textContainerRef}>
          {text.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Loading;
