"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

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
  reffer: {
    paddingTop: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "10px",
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
// Create a new Date object
const currentDate = new Date();

// Get various parts of the date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Note: Month is zero-based, so we add 1
const day = currentDate.getDate();

const PDFDocument = ({ name, JAQC, rejult }) => {
  return (
    <Document>
      <Page size={{ width: 595.276, height: "auto" }}>
        <View style={styles.card2}>
          <View style={styles.subjects}>
            <Text style={styles.heading}>J A Academy quiz exam certification</Text>
            <View style={styles.reffer}>
              <Text style={styles.textD}>Ceetificate Code:- {JAQC}</Text>
              <Text style={styles.textD}>
                Date:- {day}/{month}/{year}
              </Text>
            </View>

            <Text style={styles.examInfo}>Examini Name:- {name}</Text>
          </View>

          <View style={styles.subjects}>
            <View style={styles.subject}>
              <Text style={styles.examInfo}>Subject</Text>
              <Text style={styles.examInfo}>Result</Text>
            </View>

            {rejult &&
              rejult.map((obj) => (
                <View style={styles.subject}>
                  <Text style={styles.text}>{obj.subjectName}</Text>
                  <Text style={styles.text}>{obj.score}</Text>
                </View>
              ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
