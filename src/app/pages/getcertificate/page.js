"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "../../styles/signStyle/SignupForm.module.css";
import Custom404 from "@/app/error";
import Navbar from "@/app/components/navbar";

const API_URL = "http://localhost:4000/api/quiz/certificate";

const GetCertificate = () => {
  const [code, setCode] = useState("");

  const router = useRouter();

  //Check page route validaion
  if (!sessionStorage.getItem("prevRoute")) {
    return <Custom404 />;
  }
  useEffect(() => {
    //Runnig route path save for next page validationsd
    sessionStorage.setItem("prevRoute", "getcertificate");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_URL, { JAQC: code });
      const data = response.data;
      console.log(data, "dd");

      if (data.success) {
        sessionStorage.setItem("JAQC", data.JAQC);
        router.push("marksheet");
      } else {
        console.log("Error:", data);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.bodyContainear}>
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
          <button onClick={() => router.push("/")} className={styles.btn} type="submit">
            <span>&laquo; </span>back
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetCertificate;
