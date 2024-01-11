"use client";
import React from "react";
import PDFDocument from "./PdfDocument";
import { saveAs } from "file-saver";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

const App = () => {
  const handleGeneratePDF = () => {
    // Logic to trigger PDF generation
    const pdfBlob = new Blob([<PDFDocument />], { type: "application/pdf" });
    saveAs(pdfBlob, "example.pdf");
  };

  return (
    <div>
      <h1>React PDF Converter</h1>
      <button onClick={handleGeneratePDF}>Generate and Download PDF</button>
      <PDFDownloadLink document={<PDFDocument />} fileName="from">
        {({ loading }) => (loading ? <button>loading document</button> : "dwonload")}
      </PDFDownloadLink>
      <PDFDocument />
    </div>
  );
};

export default App;

// MarkShitPage.js
// import styles from "../../styles/markshit/MarkShitPage.module.css";
// import { useRef } from "react";
// import { PDFViewer, Document, Page, View, Text, StyleSheet } from "@react-pdf-viewer/core";
// import html2pdf from "html2pdf.js";
// import url from "./images.jpeg";

// const MarkShitPage = () => {
//   const arr = [
//     { name: "react", point: "5.6" },
//     { name: "next.js", point: 3.3 },
//     { name: "javascript", point: 8.8 },
//   ];

//   return (
//     <div ref={pdfContainer}>
//       <div className={styles.container}>
//         <div className={styles.card1}>
//           <div className={styles.card2}>
//             <h1 className={styles.heading}>J A Academy quiz exam certification</h1>
//             <h3>Date:- 20/09/2024</h3>
//             <img className={styles.image} src={url} alt="Uploaded Image" />
//             <h1 className={styles.examInfo}>Examini Name:- johir abdullah</h1>
//             <div className={styles.subjects}>
//               <div className={styles.subject}>
//                 <h3>Subject</h3>
//                 <h3>Result</h3>
//               </div>
//               {arr.map((subject) => (
//                 <div className={styles.subject} key={subject.name}>
//                   <h4>{subject.name}</h4>
//                   <h4>{subject.point}</h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <button onClick={downloadPdf}>Download </button>
//       </div>
//     </div>
//   );
// };

// export default MarkShitPage;

// // import { getDataHandle } from "@/app/server/mark";
// import url from "./img.png";
// import { useEffect } from "react";
// const MarkShitPage = () => {
//   // const data = getDataHandle();
//   const arr = [
//     { name: "react", point: "5.6" },
//     { name: "next.js", point: 3.3 },
//     { name: "javascript", point: 8.8 },
//   ];
//   return (
//     <div>
//       <h1>J A Academy quiz exam certification</h1>
//       <h3>Date:- 20/09/2024</h3>
//       <img src={url} alt="Uploaded Image" />
//       <h1>Examini Name:- johir abdullah</h1>
//       <div>
//         <div>
//           <h3>Subject </h3>
//           <h3>Rejult </h3>
//         </div>
//         {arr.map((arr) => (
//           <div>
//             <h4>{arr.name}</h4>
//             <h4>{arr.point}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default MarkShitPage;
