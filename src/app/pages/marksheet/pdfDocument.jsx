"use client";
import React from "react";
import markDataInstance from "@/app/server/mark";
import { Page, Text, View, Document, StyleSheet, List } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  card2: {
    padding: "10px",
    color: "whitesmoke",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "whitesmoke",
    boxShadow: " 0 0 10px rgba(0, 0, 0, 0.1)" /* Optional: Add a box shadow for better visual appeal */,
  },
  heading: {
    color: "blue",
    textAlign: "center",
    fontSize: "34px",
    fontWeight: "bold",
  },
  examInfo: {
    color: "blue",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
  textD: { margin: "5px", fontSize: "20px", fontWeight: "bold", textAlign: "center" },
  text: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  subjects: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "grey",
  },
  subject: {
    paddingTop: "5px",
    borderTop: "1px solid white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "10px",
  },
});

const PDFDocument = () => {
  const data = markDataInstance.getMarkData();
  return (
    <Document>
      <Page size={{ width: 595.276, height: "auto" }}>
        <View style={styles.card2}>
          <View style={styles.subjects}>
            <Text style={styles.heading}>J A Academy quiz exam certification</Text>
            <Text style={styles.textD}>Date:- 20/09/2024</Text>
            <Text style={styles.examInfo}>Examini Name:- {data.name}</Text>
          </View>

          <View style={styles.subjects}>
            <View style={styles.subject}>
              <Text style={styles.examInfo}>Subject</Text>
              <Text style={styles.examInfo}>Result</Text>
            </View>

            <View style={styles.subject}>
              <Text style={styles.text}>{data.subject}</Text>
              <Text style={styles.text}>{data.score}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
