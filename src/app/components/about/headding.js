// components/ContactContainer.js
"use client";
import React from "react";
import Link from "next/link";
import styles from "@/app/styles/contact/headingContact.module.css";

import Image from "next/image";
const HeadingContact = () => {
  const phoneNumber = 1775274498;
  const handleCallLog = () => {
    // Open call log with the specified phone number
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className={styles.mainContainear}>
      <div className={styles.text}>
        <h2>
          We notice that students and their guardians are experiencing delays in obtaining results. This is because students need to gain experience
          through an academic system. Guardians are busy spending their time. They are eager to know about their children's results. We are
          considering launching such a system that respects time and experience, even informing you about your job preparation.
        </h2>
      </div>

      <div className={styles.imgDiv}>
        <Image
          className={styles.img}
          src="https://ipfs.filebase.io/ipfs/QmSEznqHVAowF9KykT57Gg9GgvLi1kd1hjFRphq8fAmcYU"
          alt="img1"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default HeadingContact;
