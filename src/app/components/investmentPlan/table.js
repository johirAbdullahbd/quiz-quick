// ResponsiveTable.js

import React from "react";
import styles from "@/app/styles/buissnesPlan/table.module.css";
const data = [
  {
    column1: "Data 1-1",
    column2:
      "Why should I become a shareholder, why should I join you without starting something new with my own moneyWhy should I become a shareholder, why should I join you without starting something new with my own moneyWhy should I become a shareholder, why should I join you without starting something new with my own money",
    column3: "Data 1-3",
    column4: "Data 1-4",
  },
  { column1: "Data 2-1", column2: "Data 2-2", column3: "Data 2-3", column4: "Data 2-4" },
  // Add more data rows as needed
];
const ResponsiveTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
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
