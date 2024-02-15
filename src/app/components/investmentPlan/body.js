// components/ContactContainer.js

import React from "react";
import styles from "@/app/styles/buissnesPlan/body.module.css";

import Image from "next/image";
import Call from "./call";
import Link from "next/link";
import ResponsiveTable from "./table";

const AboutBody = () => {
  return (
    <div className={styles.mainContainear}>
      <div className={styles.containear}>
        <div className={styles.heading}>
          <h2>How do you want to get it?</h2>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.bodyContainear}>
          <div className={styles.text}>
            <h2>
              Our system is starting to save parents time and money. We are going to group 20 students in each batch. For them we are going to get an
              experienced parent. Going to get 4 live teachers separately for 4 subject lessons daily.Also, there will be special recorded videos for
              each topic, which will help them develop their skills. Parents will be updated every week about all their child's activities. If parents
              want, they can view their child's daily report live. Also, there will be separate special clubs for the weak and strong, where they can
              connect with students from all over the world, including native speakers.
            </h2>
          </div>

          <div className={`${styles.imgDiv} ${styles.firstImg}`}>
            <Image
              className={`${styles.img} ${styles.imgFirst}`}
              src="https://ipfs.filebase.io/ipfs/QmSQjGTDWwZ74ZPErTyZLeeVZ9e2g3cjERosdL45Bh5Qnk"
              alt="img"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className={styles.containear}>
        <div className={styles.heading1}>
          <h2>How to start?</h2>
          <div className={styles.hr1}></div>
        </div>
        <div className={styles.bodyContainear}>
          <div className={styles.imgDiv}>
            <Image
              className={styles.img}
              src="https://ipfs.filebase.io/ipfs/QmZcJpueGC1AZAwT3w4EdDCNQojcVMz1KJF5kEPVfYkk1S"
              alt="img"
              width={600}
              height={400}
            />
          </div>
          <div className={styles.text1}>
            <h2>
              We chose our administered{" "}
              <a style={{ color: "blue", textDecoration: "underline" }} href="https://quiz-quick-theta.vercel.app/" target="blank">
                online testing service
              </a>{" "}
              as a first step, which we believe will help students, teachers, and parents get to know each other quickly.
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.containear}>
        <div className={styles.heading}>
          <h2>What is the shareholding like?</h2>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.bodyContainear}>
          <div className={styles.text}>
            <h2>We are trying to distribute a permanent share, which is a 50% share of profits worth $100,000.00.</h2>
          </div>

          <div className={styles.imgDiv}>
            <Image
              className={styles.img}
              src="https://ipfs.filebase.io/ipfs/QmbfVM5AiMiMRDSed14RQqwS4oMwH5tjfqAD4kZ7iKKdAq"
              alt="img"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className={styles.containear}>
        <div className={styles.heading1}>
          <h2>Any other options available?</h2>
          <div className={styles.hr1}></div>
        </div>
        <div className={styles.bodyContainear}>
          <div className={styles.imgDiv}>
            <Image
              className={styles.img}
              src="https://ipfs.filebase.io/ipfs/QmZjjTDggKitayxPoV7KuoNXu7QWa8UBHHXZ33gJqx47x8"
              alt="img"
              width={600}
              height={400}
            />
          </div>
          <div className={styles.text1}>
            <h2>
              Yes there are options if we cannot find someone who is willing to take the partnership alone. Alternatively, we would like to retail the
              partnership at a minimum value of (50% / 1)(100,000.00 / 2) = $2,000.00.
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.containear}>
        <div className={styles.heading1}>
          <h2>How the money will be spent</h2>
          <div className={styles.hr1}></div>
          <h4>See this chart below</h4>
        </div>
        <ResponsiveTable />
      </div>
      <div className={styles.containear}>
        <div className={styles.heading}>
          <h2>About partners?</h2>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.bodyContainear}>
          <div className={styles.text}>
            <h2>
              We want to find people in the world who want to benefit themselves by improving education and solving problems, and who prioritize deep
              thinking.
            </h2>
          </div>

          <div className={styles.imgDiv}>
            <Image
              className={styles.img}
              src="https://ipfs.filebase.io/ipfs/Qmcxz5h9EjLUs3ArBopKKEGpzdxvbCRd2rvG1yXZSy7ong"
              alt="img"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className={styles.containear}>
        <div className={styles.heading}>
          <h2>About partners?</h2>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.bodyContainear}>
          <div className={styles.text}>
            <h2>
              We want to find people in the world who want to benefit themselves by improving education and solving problems, and who prioritize deep
              thinking.
            </h2>
          </div>

          <div className={styles.imgDiv}>
            <Image
              className={styles.img}
              src="https://ipfs.filebase.io/ipfs/Qmcxz5h9EjLUs3ArBopKKEGpzdxvbCRd2rvG1yXZSy7ong"
              alt="img"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className={styles.containear}>
        <div className={styles.heading1}>
          <h2>Why should I become a shareholder, why should I join you without starting something new with my own money?</h2>
          <div className={styles.hr1}></div>
        </div>
        <div className={styles.bodyContainear}>
          <div className={styles.imgDiv}>
            <Image
              className={styles.img}
              src="https://ipfs.filebase.io/ipfs/QmR28CfYTdMYEW2rvBRDAdQbqLgXxgvqJ3Y7quQTb53bKz"
              alt="img"
              width={600}
              height={400}
            />
          </div>
          <div className={styles.text1}>
            <h2>Because we are working to involve you through a guide. We want to expand our influence globally.</h2>
          </div>
        </div>
      </div>

      <div className={styles.containear}>
        <div className={styles.heading1}>
          <h2>How can I speak? </h2>
          <div className={styles.hr1}></div>
          <h4>Of course, you can speak with our esteemed CEO. </h4>
        </div>
        <div className={styles.card}>
          <Image
            src="https://ipfs.filebase.io/ipfs/QmNSu8q1kJtwhZxkPhu9drGw3NEu3yiHCrzdmG1zpTFL37"
            alt="johir_abdullah"
            className={styles.cardImage}
            width={600}
            height={400}
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Emranul_Amin</h2>
            <h3>CEO</h3>
            <h2 className={styles.cardDescription}>
              "Hi, I look forward to meeting you, we can talk about making our dreams come true. I am serious about learning anything, I am Honors 2nd
              year student of Psychology Department of Shahjalal University of Science and Technology. I am excited for the possibility of improvement
              in the future and always feel free to contact me..
            </h2>
            <div>
              <div className={styles.IconContainear}>
                <Call bodyClass={styles.contactItem} Img={styles.Img} />

                <div className={styles.contactItem}>
                  <Link href="https://wa.me/01322646880" passHref>
                    <Image
                      className={styles.Img}
                      src="https://ipfs.filebase.io/ipfs/QmegGRha5BBxdEtsRnsQEJCx7iCgwVjS5sun3nKcaaxonX"
                      alt="WhatsApp"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>

                <div className={styles.contactItem}>
                  <Link href="https://m.me/100088879760582" passHref>
                    <Image
                      className={styles.Img}
                      src="https://ipfs.filebase.io/ipfs/QmR7aYsJ52h6tZZfYZVnt1bg6CpsyeVM3wf7CTzCsk2hW8"
                      alt="msngr"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div className={styles.contactItem}>
                  <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mdeaamin9@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      className={styles.Img}
                      src="https://ipfs.filebase.io/ipfs/QmPUPdYzUiWZr5GPgNvFXZpK8v8UjiTMKasTA9QiSoJyeD"
                      alt="call"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
