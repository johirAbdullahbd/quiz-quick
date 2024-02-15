// pages/index.js
import React from "react";
import styles from "@/app/styles/fotter/fotter.module.css";

const Fotter = ({ navigateTo }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className={styles.container}>
        {/* First div with logo */}
        <div className={styles.logo}>
          <button className={styles.link} onClick={() => navigateTo("/")}>
            <i className="fas fa-home"></i>
          </button>
        </div>

        {/* Second div with six string links */}
        <div>
          <div className={styles.links}>
            <button className={styles.link} onClick={() => navigateTo("/pages/investmentplan")}>
              Get Partnership
            </button>
            <button className={styles.link} onClick={() => navigateTo("/pages/getcertificate")}>
              Get Certificate
            </button>
            <button className={styles.link} onClick={() => navigateTo("/pages/about")}>
              About Us
            </button>
          </div>
          <div className={styles.links}>
            <button className={styles.link} onClick={() => navigateTo("/pages/contact")}>
              Contact Us
            </button>
            <button className={styles.link} onClick={() => navigateTo("/pages/empty")}>
              Our Services
            </button>
            <button className={styles.link} onClick={() => navigateTo("/pages/empty")}>
              Career
            </button>
          </div>
        </div>

        {/* Third div with social media icons */}
        <div className={styles.socialMedia}>
          <a className={styles.faFacebook} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a className={styles.faInstagram} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a className={styles.faYoutube} href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; {currentYear} Your Company Name.</p>
      </div>
    </div>
  );
};

export default Fotter;
