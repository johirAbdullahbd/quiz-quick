"use client";
import ReactDOMServer from "react-dom/server";

import React from "react";
import PDFDocument from "./pdfDocument";
import { saveAs } from "file-saver";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import markDataInstance from "@/app/server/mark";
import Custom404 from "@/app/error";
import Styles from "../../styles/marksheet/marksheetPage.module.css";
import { useRouter } from "next/navigation";

const generatePdfBlob = (content) => {
  try {
    const pdfContent = ReactDOMServer.renderToString(content);
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    return blob;
  } catch (error) {
    console.error("Error generating PDF Blob:", error);
    throw error;
  }
};

const App = () => {
  const route = useRouter();
  // Check previus route
  const name = markDataInstance.getMarkData().name;
  if (!name) {
    return <Custom404 />;
  }
  const handleGeneratePDF = () => {
    try {
      const pdfBlob = generatePdfBlob(<PDFDocument />);
      saveAs(pdfBlob, "example.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const DownloadButton = ({ loading }) => (
    <button className={Styles.btn} onClick={handleGeneratePDF} disabled={loading}>
      {loading ? "Loading document" : "Download PDF"}
    </button>
  );

  return (
    <div className={Styles.containear}>
      <div className={Styles.card}>
        <h1>React PDF Converter</h1>

        <PDFDocument />
        <div className={Styles.bttm}>
          <button onClick={() => route.push("signup")} className={Styles.backBtn}>
            <span>&laquo; </span>back
          </button>
          {/* Generate and Download PDF */}

          {/* PDF Download Link */}
          <PDFDownloadLink className={Styles.btn} document={<PDFDocument />} fileName="example.pdf">
            {({ loading }) => <DownloadButton loading={loading} />}
          </PDFDownloadLink>

          {/* PDF Viewer */}
        </div>
      </div>
    </div>
  );
};

export default App;
