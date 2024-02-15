"use client";

import AskQuestionPage from "@/app/components/about/askQuestions";
import AboutBody from "@/app/components/about/body";
import HeadingContact from "@/app/components/about/headding";
import ImgShow from "@/app/components/about/imagShow";
import Fotter from "@/app/components/fotter";
import Navbar from "@/app/components/investmentplan/nav";
import styles from "@/app/styles/contact/main.module.css";
import IconContainear from "./iconContainear";
import Loading from "../loading/page";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const navigateTo = (path) => {
    setLoading(true);
    router.push(path);
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar handleNavRoute={navigateTo} />
          <div className={styles.containear}>
            <HeadingContact />
            <IconContainear />
            <AskQuestionPage />
            <Fotter navigateTo={navigateTo} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Contact;
