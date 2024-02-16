"use client";

import AskQuestionPage from "@/app/components/about/askQuestions";
import HeadingContact from "@/app/components/about/headding";
import Fotter from "@/app/components/fotter";
import Navbar from "@/app/components/navbar/navBar";
import styles from "@/app/styles/contact/main.module.css";
import IconContainear from "./iconContainear";
import { useState } from "react";
import Loading from "../../loading/page";
import { useRouter } from "next/navigation";

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
            <HeadingContact custom={true} name="ceo" />
            <div style={{ textAlign: "center" }}>
              <h2 className={styles.name}>Emranul_Amin</h2>
              <h2 className={styles.rank}>CEO</h2>
            </div>
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
