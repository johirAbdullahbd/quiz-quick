// pages/index.js
import React from "react";
import styles from "@/app/styles/fotter/fotter.module.css";
import Image from "next/image";

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

        {/* Second div with six string as */}
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
        <div className={styles.IconContainear}>
          <div className={styles.socialMedia}>
            <div className={styles.contactItem}>
              <a target="_blank" href="https://twitter.com/byJAacademy">
                <Image
                  className={styles.Img}
                  src="https://ipfs.filebase.io/ipfs/QmU82Shg72DR2BDsiCNNbf1CFPDsJZTQHZ2s1bZoirbMSr"
                  alt="twitter"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className={styles.contactItem}>
              <a target="_blank" href="https://www.linkedin.com/">
                <Image
                  className={styles.Img}
                  src="https://ipfs.filebase.io/ipfs/Qmcejf9W8Cu3KNxx1DWcY4nU5qndPZQJrX9p1gVssuy2zb"
                  alt="linkedin"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className={styles.contactItem}>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jaacademypersonal@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image
                  className={styles.Img}
                  src="https://ipfs.filebase.io/ipfs/QmPUPdYzUiWZr5GPgNvFXZpK8v8UjiTMKasTA9QiSoJyeD"
                  alt="mail"
                  width={100}
                  height={100}
                />
              </a>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <a className={styles.faInstagram} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a className={styles.faYoutube} href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a className={styles.faFacebook} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; {currentYear} Your Company Name.</p>
      </div>
    </div>
  );
};

export default Fotter;
