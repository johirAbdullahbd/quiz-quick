"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/signStyle/SignupForm.module.css";
import { useRouter } from "next/navigation";
import Custom404 from "@/app/error";
import axios from "axios";
import Loading from "../loading/page";
import Fotter from "@/app/components/fotter";
import Navbar from "@/app/components/navbar/navBar";

// const API_URL = "http://localhost:4000/api/quiz/certificatedata";
const API_URL = "https://quiz-node-johirabdullahs-projects.vercel.app/api/quiz/certificatedata";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    email: "",
    password: "",
    showPassword: false,
    newPassword: "",
    newShowPassword: false,
  });

  const [passwordLenError, setPasswordLenError] = useState(true);
  const [newPasswordLenError, setNewPasswordLenError] = useState(true);

  const router = useRouter();
  //Check page route validaion
  // if (!dataInstance.getSubjectName()) {
  //   return <Custom404 />;
  // }
  useEffect(() => {
    if (window) {
      //Runnig route path save for next page validationsd
      sessionStorage.setItem("prevRoute", "signup");
    }
  }, []);
  useEffect(() => {
    const validatePasswordLength = (password) => password.length > 0 && (password.length < 6 || password.length > 10);

    setPasswordLenError(validatePasswordLength(formData.password));
  }, [formData.password]);

  useEffect(() => {
    const validateNewPasswordLength = (newPassword) => newPassword.length > 0 && (newPassword.length < 6 || newPassword.length > 10);

    setNewPasswordLenError(validateNewPasswordLength(formData.newPassword));
  }, [formData.newPassword]);

  const handleInputChange = (field, value) => setFormData((prevData) => ({ ...prevData, [field]: value }));

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const togglePasswordVisibility = (field) => setFormData((prevData) => ({ ...prevData, [field]: !prevData[field] }));

  const setData = async (obj) => {
    try {
      let str;
      if (typeof window !== "undefined") {
        str = sessionStorage.getItem("id");
      }
      const postData = {
        uniqueString: str,
        ...obj,
      };

      const response = await axios.post(API_URL, postData);
      const data = response.data;

      if (data.success) {
        console.log("Success:", data);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("JAQC", data.JAQC);
        }
        router.push(`${data.JAQC}`);
      } else {
        alert(data.message);
        console.log("Error:", data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching quiz questions:", error);
      if (error.message == "Network Error") {
        alert("Netword connection faild");
      } else {
        return <Custom404 />;
      }
    }
  };

  const handleSubmit = (event, logging) => {
    setLoading(true);
    event.preventDefault();

    const validatePassword = (message) => {
      if (passwordLenError) {
        alert(message);
        return false;
      }
      return true;
    };

    const emailField = logging ? "email" : "newEmail";
    const passwordField = logging ? "password" : "newPassword";

    if (!validateEmail(formData[emailField])) {
      alert("Invalid email address");
      setLoading(false);
      return;
    }

    if (!validatePassword(formData[passwordField], "Password must be between 6 - 10 characters")) return;

    const obj = logging
      ? { JAQC: formData.code, email: formData.email, password: formData.password.replace(/\s/g, "") }
      : { name: formData.name, email: formData.newEmail, password: formData.newPassword.replace(/\s/g, "") };

    setData(obj);
  };
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
          <div className={styles.bodyContainear}>
            <div className={styles.text}>
              <h1 className={styles.headText}>if your account already created </h1>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.text}>
                <h2>logging and add results previous certificate</h2>
              </div>
              <form onSubmit={(e) => handleSubmit(e, true)}>
                <label htmlFor="code">Certificate Code:</label>
                <input
                  type="number"
                  id="code"
                  value={formData.code}
                  onChange={(e) => handleInputChange("code", e.target.value)}
                  className={styles.inputField}
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={styles.inputField}
                  required
                />

                <div className={styles.passwordContainer}>
                  <label htmlFor="password">Password:</label>
                  <input
                    type={formData.showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={styles.passwordInput}
                    required
                  />
                  <span className={styles.showPasswordToggle} onClick={() => togglePasswordVisibility("showPassword")}>
                    {formData.showPassword ? "Hide" : "Show"}
                  </span>
                  <p className={passwordLenError && styles.passwordLen}>Password must be between 6 - 10 characters</p>
                </div>

                <div className={styles.btnDiv}>
                  <button className={styles.btn} type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className={styles.backBtn}>
                <button onClick={() => navigateTo("prog")} className={styles.btn}>
                  <span>&laquo; </span>back
                </button>
              </div>
            </div>
            <div className={styles.text}>
              <h2 className={styles.headText}>OR</h2>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.text}>
                <h2>create new account</h2>
              </div>
              <form onSubmit={(e) => handleSubmit(e, false)}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={styles.inputField}
                  required
                />

                <label htmlFor="newEmail">Email:</label>
                <input
                  type="newEmail"
                  id="newEmail"
                  value={formData.newEmail}
                  onChange={(e) => handleInputChange("newEmail", e.target.value)}
                  className={styles.inputField}
                  required
                />

                <div className={styles.passwordContainer}>
                  <label htmlFor="newPassword">Password:</label>
                  <input
                    type={formData.newShowPassword ? "text" : "password"}
                    id="newPassword"
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange("newPassword", e.target.value)}
                    className={styles.passwordInput}
                    required
                  />
                  <span className={styles.showPasswordToggle} onClick={() => togglePasswordVisibility("newShowPassword")}>
                    {formData.newShowPassword ? "Hide" : "Show"}
                  </span>
                  <p className={newPasswordLenError && styles.passwordLen}>Password must be between 6 - 10 characters</p>
                </div>

                <div className={styles.btnDiv}>
                  <button className={styles.btn} type="submit">
                    Create
                  </button>
                </div>
              </form>
            </div>
            <Fotter navigateTo={navigateTo} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
