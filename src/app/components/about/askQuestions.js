// pages/ask.js
"use client";
import { useState } from "react";
import styles from "@/app/styles/contact/askQuestion.module.css";

const AskQuestionPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (you can send the data to your server or process it as needed)
    console.log("Submitted data:", formData);
    // You may want to redirect the user or show a confirmation message
  };

  return (
    <div className={styles.mainContainear}>
      <h1 className={styles.title}>Ask a Question</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label className={styles.formLabel}>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={styles.formInput} required />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel}>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={styles.formInput} required />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel}>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.formInput} required />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel}>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={styles.formInput}
              rows={4}
              cols={50}
              required
            />
          </label>
        </div>

        <div className={styles.formBtn}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AskQuestionPage;
