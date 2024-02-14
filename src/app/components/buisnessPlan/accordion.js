"use client";
import React, { useState } from "react";
import styles from "@/app/styles/buissnesPlan/accordion.module.css";

import Image from "next/image";
import img1 from "./one1.png";
import img2 from "./two2.png";

// pages/index.js

const IndexPage = () => {
  const accordionItems = [
    {
      title: "How do I capture my vehicles using your app?",
      content:
        "With our capture and inspection app, anyone with a smartphone can complete a guided vehicle inspection in 5 minutes or less with just 13 photos and an odometer reading. Once you receive your capture link, simply follow the steps, take a few pictures and we will take care of the rest.",
    },
    {
      title: "How do you get the best price for my vehicle?",
      content:
        "We have access to hundreds of buyers looking for vehicles just like yours, which allows us to get you the BEST offer on your vehicle. No need to make an appointment or spend your valuable time driving from dealership to dealership, or getting low-ball offers from private buyers. We offer you a fair price without the hassle, so you can get into a new vehicle faster.",
    },
    {
      title: "How long does the entire process take?",
      content:
        "As soon as you have captured the required images for your vehicle, we will reach out to our network and secure the best price for you by the end of the day. Once you are happy with the offer, we will make arrangements to pick-up the vehicle from your home at a time that is convenient for you.",
    },
  ];

  const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
      <div className={styles.mainContainear}>
        <div className={styles.containear}>
          <div className={styles.imgDiv}>
            <Image className={styles.img} src={img1} alt="image1" />
          </div>
          <div className={styles.accordion}>
            {accordionItems.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <button onClick={() => handleAccordionClick(index)} className={styles.accordionButton}>
                  <span>{item.title}</span>
                  <span>{index === openIndex ? "▲" : "▼"}</span>
                </button>
                {index === openIndex && <div className={styles.accordionItemContent}>{item.content}</div>}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containear}>
          <div className={styles.accordion}>
            {accordionItems.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <button onClick={() => handleAccordionClick(index)} className={styles.accordionButton}>
                  <span>{item.title}</span>
                  <span>{index === openIndex ? "▲" : "▼"}</span>
                </button>
                {index === openIndex && <div className={styles.accordionItemContent}>{item.content}</div>}
              </div>
            ))}
          </div>
          <div className={styles.imgDiv}>
            <Image className={styles.img} src={img2} alt="image2" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>Modern Accordion</h1>
      <Accordion />
    </div>
  );
};

export default IndexPage;
