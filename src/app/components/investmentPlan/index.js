// pages/index.js
"use client";
import { useEffect, useState, useRef } from "react";
import styles from "@/app/styles/buissnesPlan/Home.module.css";
import Fotter from "../fotter";
import Image from "next/image";
import AboutBody from "./body";
import AskQuestionPage from "../about/askQuestions";
import Navbar from "./nav";

const Home = () => {
  const textRef = useRef(null);
  useEffect(() => {
    const startAnimation = () => {
      textRef.current.style.animationPlayState = "running";
    };

    const removeCursor = () => {
      textRef.current.style.borderRight = "none";
    };
    const showText = () => {
      textRef.current.style.opacity = 1;
    };

    const timeoutId = setTimeout(() => {
      showText();
      startAnimation();
      const duration = parseFloat(getComputedStyle(textRef.current).animationDuration) * 1000;
      setTimeout(removeCursor, duration);
    }, 2000); // Start the animation after 2 seconds
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <div className={styles.scrollDown}>
        <Navbar />
        <div className={styles.headingComponent}>
          <Image
            className={styles.firstImg}
            src="https://ipfs.filebase.io/ipfs/QmZe14NYAyHdFJZtJkqoJxszFNdRyyZEmkhunwYbV4wRBF"
            alt="firstImage"
            width={400}
            height={600}
          />
          <div className={styles.typewriterContainer}>
            <div className={styles.typewriterText} ref={textRef}>
              <h2>Wellcome</h2>
            </div>
          </div>
          <div className={styles.ImgTex}>
            <h4>We assure our shareholders of receiving $5-$10 thousand each month.</h4>
            <h6>
              You've expressed your commitment to giving time to your child. And here we are to assist you in being supportive. Depending on his
              institution or taking him to a counselor who will guide him in a specific subject, many counselors may be needed. Your child uses
              digital devices all day, which can be detrimental to learning. How will you be able to find solutions to all these problems?
            </h6>
          </div>
        </div>
        <AboutBody />
        <AskQuestionPage />
        <Fotter />
      </div>
    </div>
  );
};

export default Home;
