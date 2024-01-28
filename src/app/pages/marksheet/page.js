"use client";
import ReactDOMServer from "react-dom/server";

import { useEffect, useState } from "react";
import PDFDocument from "./pdfDocument";
import { saveAs } from "file-saver";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Custom404 from "@/app/error";
import Styles from "../../styles/marksheet/marksheetPage.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loading from "../loading/page";
// const API_URL = "http://localhost:4000/api/quiz/rejultcertificate";
const API_URL = "https://quiz-node-johirabdullahs-projects.vercel.app/api/quiz/rejultcertificate";
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
  const [data, setData] = useState({ name: "", JAQC: "" });
  const [rejult, setRejult] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRouter();

  let routePath;
  // Check previus route
  if (typeof window !== "undefined") {
    routePath = sessionStorage.getItem("prevRoute");
    if (!routePath) {
      return <Custom404 />;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(API_URL, { JAQC: sessionStorage.getItem("JAQC") });
        const mark = response.data;

        if (mark.success) {
          setRejult([...Object.values(mark.rejult)]);
          setData({ ...data, ...mark });
          setLoading(false);
        } else {
          route.push(routePath);
        }
      } catch (error) {
        if (error.message == "Network Error") {
          alert("Netword connection faild");
        }
        route.push(routePath);
        console.error("Error fetching quiz questions:", error);
      }
    };
    fetchData();
  }, []);

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
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={Styles.containear}>
          <div className={Styles.card}>
            <h1>Please memories Ceetificate Code for use next Time</h1>

            <PDFDocument name={data.name} JAQC={data.JAQC} rejult={rejult} />
            <div className={Styles.bttm}>
              <button onClick={() => route.push(routePath)} className={Styles.backBtn}>
                <span>&laquo; </span>back
              </button>
              {/* Generate and Download PDF */}

              {/* PDF Download Link */}
              {routePath === "showrejult" && (
                <PDFDownloadLink className={Styles.btn} document={<PDFDocument />} fileName="example.pdf">
                  {({ loading }) => <DownloadButton loading={loading} />}
                </PDFDownloadLink>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
