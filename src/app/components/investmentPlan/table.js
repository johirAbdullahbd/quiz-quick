import React from "react";
import styles from "@/app/styles/buissnesPlan/table.module.css";

const data = [
  {
    column1: "1",
    column2: (
      <>
        Making our Managed
        <a style={{ color: "blue", textDecoration: "underline" }} href="https://quiz-quick-theta.vercel.app/" target="blank">
          Quiz Exam Service app
        </a>
        more user friendly. Making questions on all subjects.
      </>
    ),

    column3: "15 Days - 1 Month",
    column4: "$2500 - $3000",
    showLink: false, // Add a flag to indicate whether to show the link
  },
  {
    column1: "2",
    column2: (
      <>
        Promoting our
        <a style={{ color: "blue", textDecoration: "underline" }} href="https://quiz-quick-theta.vercel.app/" target="blank">
          online quiz exam services
        </a>
        worldwide on virtual and all valid online platforms.
      </>
    ),
    column3: "1 Month",
    column4: "$5000",
    showLink: true, // Add a flag to indicate whether to show the link
  },
  {
    column1: "3",
    column2: <>Direct promotion to students and teachers in school colleges and related institutions of Bangladesh.</>,
    column3: "15 Days",
    column4: "$3000",
    showLink: false,
  },
  {
    column1: "4",
    column2: <>Building our core business tools, the business system through which we aim to have a global impact</>,
    column3: "2 Month",
    column4: "$15,000",
    showLink: false,
  },
  {
    column1: "5",
    column2: <>Using digital media to promote globally, tell about our services directly to teachers and parents in Bangladesh.</>,
    column3: "1 Month",
    column4: "$20,000",
    showLink: false,
  },
  {
    column1: "6",
    column2: <>Fully launching our service in Bangladesh.</>,
    column3: "Starts",
    column4: "$55,000",
    showLink: false,
  },
  {
    column1: "7",
    column2: <>Gradually expanding our business globally.</>,
    column3: "Starts",
    column4: "pending",
    showLink: false,
  },
  // Add more data rows as needed
];

const ResponsiveTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Steps</th>
            <th>Summary</th>
            <th>Duration</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.showLink ? <div>{row.column2}</div> : row.column2}</td>
              <td>{row.column3}</td>
              <td>{row.column4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
