// components/ContactContainer.js
"use client";
import React from "react";
import Link from "next/link";
import styles from "@/app/styles/contact/headingContact.module.css";

import Image from "next/image";
import img1 from "./two2.png";
const SocialLinks = () => {
  const phoneNumber = 1775274498;
  const handleCallLog = () => {
    // Open call log with the specified phone number
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className={styles.mainContainear}>
      <div className={styles.containear}>
        <div className={styles.text}>
          <div>
            <h2>Contact Us</h2>
          </div>
          <div>
            <p>
              We’re available 24 hours a day, 7 days a week. Chat with us, call us at 1 (888) 949-0960 or ask us a question. We are also available on
              Facebook Messenger, WhatsApp and Google Messenger.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.IconContainear}>
            <div className={styles.contactItem} onClick={handleCallLog} role="button">
              <p>
                <i className="fas fa-phone"></i>
                <span className={styles.span}>Call </span>
              </p>
            </div>

            <div className={styles.contactItem}>
              <Link className={styles.faWhatsapp} href="https://wa.me/your-whatsapp-number" passHref>
                <i className="fab fa-whatsapp"></i>
                <span className={styles.span}>WhatsApp </span>
              </Link>
            </div>
          </div>

          <div className={styles.IconContainear}>
            <div className={styles.contactItem}>
              <Link className={styles.faFacebookMessenger} href="https://m.me/100088879760582" passHref>
                <i className="fab fa-facebook-messenger"></i>
                <span className={styles.span}>Facebook </span>
              </Link>
            </div>
            <div className={styles.contactItem}>
              <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=emon@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="far fa-envelope"></i>
                <span className={styles.span}>Email </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgDiv}>
        <Image className={styles.img} src={img1} alt="img1" />
      </div>
    </div>
  );
};

export default SocialLinks;
