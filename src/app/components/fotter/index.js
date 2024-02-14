// pages/index.js
import React from "react";
import Link from "next/link";
import styles from "@/app/styles/fotter/fotter.module.css";

const Fotter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className={styles.container}>
        {/* First div with logo */}
        <div className={styles.logo}>
          <i className="fas fa-home"></i>
        </div>

        {/* Second div with six string links */}
        <div>
          <div className={styles.links}>
            <Link href="/">Brand New</Link>
            <Link href="/about">Recondition</Link>
            <Link href="/services">Used</Link>
          </div>
          <div className={styles.links}>
            <Link href="/portfolio">About Us</Link>
            <Link href="/contact">Customer Reviews</Link>
            <Link href="/blog">Contact Us</Link>
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
