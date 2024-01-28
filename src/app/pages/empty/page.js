"use client";
import { useRouter } from "next/navigation";
import Styles from "../../styles/error.module.css";
import { useState } from "react";
import Loading from "../loading/page";
export default function Empty() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRoute = (path) => {
    setLoading(true);
    router.push(path);
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={Styles.containear}>
          <h1>this page is not raday. wait for write page</h1>
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
            onClick={() => handleRoute("skillselect")}
          >
            get programing quiz
          </button>
        </div>
      )}
    </div>
  );
}
