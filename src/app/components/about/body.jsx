// components/ContactContainer.js

import React from "react";
import styles from "@/app/styles/contact/body.module.css";

import Image from "next/image";
const AboutBody = () => {
  return (
    <div className={styles.mainContainear}>
      <div className={styles.heading}>
        <h2>How is an exam administered?</h2>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.containear}>
        <div className={styles.imgDiv1}>
          <Image
            className={styles.img1}
            src="https://ipfs.filebase.io/ipfs/QmZcJpueGC1AZAwT3w4EdDCNQojcVMz1KJF5kEPVfYkk1S"
            alt="img1"
            width={600}
            height={400}
          />
        </div>
        <div className={styles.text1}>
          <h2>Exam within a specified time</h2>

          <div>
            <ul className={styles.list}>
              <li>We encourage completing the task in such a way that challenges you to assess yourself.</li>
              <li>You can share your experience with everyone.</li>

              <li>
                It's not just for fun; here, you won't be able to be clever, any kind of copy-pasting is not possible, and you'll have a specified
                time to complete.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.containear}>
        <div className={styles.text}>
          <div>
            <h2>Thank you for your interest. To obtain your experience certificate, you need to follow the steps below:</h2>
          </div>
          <div>
            <ul className={styles.list}>
              <li>Complete each step of the experience.</li>
              <li>Be present within the specified time for each step.</li>
              <li>Earn a minimum of 0.5 points at the end of each step.</li>
              <li>If you win, you will have the opportunity to receive your experience certificate.</li>
              <li>Download your experience certificate or share the live certificate from our server.</li>
            </ul>
          </div>
        </div>

        <div className={styles.imgDiv}>
          <Image
            className={styles.img}
            src="https://ipfs.filebase.io/ipfs/QmRxkqvUwkj3x11tofcxo8yNLS7gwynHA4hVkXswi2awtM"
            alt="img1"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
