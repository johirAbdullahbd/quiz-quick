// components/ContactContainer.js
"use client";
import React from "react";
import Link from "next/link";
import styles from "@/app/styles/contact/headingContact.module.css";

import Image from "next/image";
const HeadingContact = ({ custom = false, name = false }) => {
  const text = !name
    ? "We notice that students and their guardians are experiencing delays in obtaining results. This is because students need to gain experiencethrough an academic system. Guardians are busy spending their time. They are eager to know about their children's results. We areconsidering launching such a system that respects time and experience, even informing you about your job preparation."
    : name == "founder"
    ? "I am ready to present myself as a newbie in learning new things. I have worked on a number of projects, always immersing myself in them, which will have global exposure in the future. These projects allowed me to learn new things and I took every challenge to improve myself. I like to be busy with work and learning new things and I am ready to face any challenge in new situations anytime."
    : "Hi, I look forward to meeting you, we can talk about making our dreams come true. I am serious about learning anything, I am Honors 2nd year student of Psychology Department of Shahjalal University of Science and Technology. I am excited for the possibility of improvement in the future and always feel free to contact me.";
  const url = !name
    ? "https://ipfs.filebase.io/ipfs/QmSEznqHVAowF9KykT57Gg9GgvLi1kd1hjFRphq8fAmcYU"
    : name == "founder"
    ? "https://ipfs.filebase.io/ipfs/QmNSu8q1kJtwhZxkPhu9drGw3NEu3yiHCrzdmG1zpTFL37"
    : "https://ipfs.filebase.io/ipfs/QmXm7VRyyogkTkDLnaoZyckJgU9BBZMXzgndnVLFioDp7N";

  return (
    <div className={styles.mainContainear}>
      <div className={styles.text}>
        <h2>{text}</h2>
      </div>

      <div className={custom ? styles.imgDivCustom : styles.imgDiv}>
        <Image className={custom ? styles.imgCustom : styles.img} src={url} alt="img1" width={600} height={400} />
      </div>
    </div>
  );
};

export default HeadingContact;
