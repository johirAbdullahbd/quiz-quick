"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./ask.module.css"; // Import CSS module

function YourComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:4000/api/quiz/ask");
        const response = await axios.get("https://quiz-node-johirabdullahs-projects.vercel.app/api/quiz/ask");
        console.log("data", response.data);
        setData([...response.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Ask Page</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <h2 className={styles.firstName}> firstName:-{item.firstName}</h2>
          <h2 className={styles.firstName}> lastName:-{item.lastName}</h2>
          <h3 className={styles.fullName}>
            fullName : {item.firstName}
            {item.lastName}
          </h3>
          <h4 className={styles.email}> email:-{item.email}</h4>
          <p className={styles.description}> description:-{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default YourComponent;
