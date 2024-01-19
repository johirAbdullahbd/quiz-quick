"use client";
import { useRouter } from "next/navigation";
import Styles from "../../styles/quizStyle/permision.module.css";
import markDataInstance from "@/app/server/mark";
import Custom404 from "@/app/error";

const Permision = () => {
  const router = useRouter();
  // Check previus route
  if (!markDataInstance.getSubjectName()) {
    return <Custom404 />;
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <h1>hello start page to </h1>
        <p>kjdsk dkjfiej djflaup eoeurdhh = fjd </p>
        <div className={Styles.buttons}>
          <button onClick={() => router.push("skillselect")}>Close</button>
          <button onClick={() => router.push("permission/start")}>Start</button>
        </div>
      </div>
    </div>
  );
};
export default Permision;
