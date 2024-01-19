// pages/404.js
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Styles from "./styles/error.module.css";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the custom path after 3 seconds
    const redirectTimeout = setTimeout(() => {
      router.push("/"); // Adjust the custom path as needed
    }, 3000);

    // Clear the timeout on component unmount
    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className={Styles.containear}>
      <h1>somthih is wrong. please try again </h1>
      <p> You will be redirected to the home page shortly.</p>
    </div>
  );
};

export default Custom404;
