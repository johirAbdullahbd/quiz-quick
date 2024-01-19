"use client";

import { useState } from "react";
import styles from "../../styles/signStyle/SignupForm.module.css";
import markDataInstance from "@/app/server/mark";
import { useRouter } from "next/navigation";
import Custom404 from "@/app/error";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  if (!markDataInstance.getSubjectName()) {
    return <Custom404 />;
  }

  const validateEmail = () => {
    // Basic email validation (you can use a more sophisticated validation library)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail()) {
      alert("Invalid email address");
      return;
    }

    //  send the data to server
    markDataInstance.setMarkData({ name, email, password });
    router.push("marksheet");
  };

  return (
    <div className={styles.bodyContainear}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className={styles.inputField} required />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
            required
          />

          <div className={styles.passwordContainer}>
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.passwordInput}
              required
            />
            <span className={styles.showPasswordToggle} onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div className={styles.btnDiv}>
            <button className={styles.btn} type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className={styles.backBtn}>
        <button onClick={() => router.push("showrejult")} className={styles.btn} type="submit">
          <span>&laquo; </span>back
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
