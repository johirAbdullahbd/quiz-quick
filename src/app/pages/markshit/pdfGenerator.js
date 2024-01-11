import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";

const generatePDF = async (elementId, pdfOptions) => {
  try {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element with id ${elementId} not found`);
    }

    const canvas = await html2canvas(element);
    const imageData = canvas.toDataURL("image/png");

    const pdf = await html2pdf().from(imageData).set(pdfOptions).outputPdf();

    return pdf;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
};

export default generatePDF;
