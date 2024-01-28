"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "../../styles/signStyle/SignupForm.module.css";
import Custom404 from "@/app/error";
import Navbar from "@/app/components/navbar";
import Loading from "../loading/page";

const API_URL = "https://quiz-node-johirabdullahs-projects.vercel.app/api/quiz/rejultcertificate";
// const API_URL = "http://localhost:4000/api/quiz/rejultcertificate";

const GetCertificate = () => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");

  const router = useRouter();

  if (typeof window !== "undefined") {
    if (!sessionStorage.getItem("prevRoute")) {
      return <Custom404 />;
    }
  }

  useEffect(() => {
    if (window) {
      // set props data to session storage or local storage
      sessionStorage.setItem("prevRoute", "getcertificate");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_URL, { JAQC: code });
      const data = response.data;

      if (data.success) {
        setLoading(true);
        router.push(data.JAQC);
      } else {
        console.log("Error:", data);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    }
  };

  const handleRoute = (path) => {
    setLoading(true);
    router.push(path);
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar handleNavRoute={handleRoute} />
          <div className={styles.bodyContainear1}>
            <div className={styles.text}>
              <h1>Send certificate code </h1>
            </div>
            <div className={styles.formContainer}>
              <form onSubmit={(e) => handleSubmit(e, true)}>
                <label htmlFor="code">Certificate Code:</label>
                <input type="number" id="code" value={code} onChange={(e) => setCode(e.target.value)} className={styles.inputField} required />
                <div className={styles.btnDiv}>
                  <button className={styles.btn} type="submit">
                    Send Code
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.backBtn2}>
              <button onClick={() => handleRoute("/")} className={styles.btn} type="submit">
                <span>&laquo; </span>back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetCertificate;
