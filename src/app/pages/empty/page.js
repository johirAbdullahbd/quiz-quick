"use client";
import { useRouter } from "next/navigation";
import Styles from "../../styles/error.module.css";
export default function Empty() {
  const router = useRouter();
  return (
    <div className={Styles.containear}>
      <h1>this quizes is not raday. wait for write questions</h1>
      <p>try programing quiz</p>
      <button
        style={{
          padding: "5px",
          background: "white",
          color: "blue",
          border: "1px solid blue",
          cursor: "pointer",
          borderRadius: "5px",
          margin: "20px",
        }}
        onClick={() => router.push("skillselect")}
      >
        get programing quiz
      </button>
    </div>
  );
}
