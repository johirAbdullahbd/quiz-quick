"use client";

import AskQuestionPage from "@/app/components/about/askQuestions";
import AboutBody from "@/app/components/about/body";
import HeadingContact from "@/app/components/about/headding";
import ImgShow from "@/app/components/about/imagShow";
import Fotter from "@/app/components/fotter";
import Navbar from "@/app/components/investmentPlan/nav";
import styles from "@/app/styles/contact/main.module.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.containear}>
        <HeadingContact />
        <AboutBody />
        <ImgShow />
        <AskQuestionPage />
        <Fotter />
      </div>
    </div>
  );
};
export default About;
