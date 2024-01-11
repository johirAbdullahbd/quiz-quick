// PDFDocument.js
import React from "react";
import styles from "../../styles/markshit/MarkShitPage.module.css";
import { Page, Text, View, Document, StyleSheet, List } from "@react-pdf/renderer";

const style = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "blue",
  },
  red: {
    backgroundColor: "yollow",
    width: "60px",
    height: "auto",
  },
  container: {
    marginBottom: 10,
    backgroundColor: "blue",
    width: "200px",
    height: "auto",
  },
  school: {
    // fontFamily: "Lato Bold",
    fontSize: 10,
  },
  degree: {
    // fontFamily: "Lato",
    fontSize: 10,
  },
  candidate: {
    // fontFamily: "Lato Italic",
    fontSize: 10,
  },
  title: {
    // fontFamily: "Lato Bold",
    fontSize: 14,
    marginBottom: 10,
    textTransform: "uppercase",
  },
});

const PDFDocument = () => {
  return (
    <Document>
      <Page size="A4" className={styles.container}>
        <View className={styles.card1}>
          <View className={styles.card2}>
            <Text className={styles.heading}>J A Academy quiz exam certification</Text>
            <Text>Date:- 20/09/2024</Text>
            
            <Text className={styles.examInfo}>Examini Name:- johir abdullah</Text>
            <View className={styles.subjects}>
              <View className={styles.subject}>
                <Text>Subject</Text>
                <Text>Result</Text>
              </View>
              {arr.map((subject) => (
                <View className={styles.subject} key={subject.name}>
                  <Text>{subject.name}</Text>
                  <Text>{subject.point}</Text>
                </View>
              ))}
            </View>
          </View>
          {/* <View style={{ flexDirection: "column", width: 400 }}>
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <Text style={{ marginHorizontal: 8 }}>*</Text>
              <Text>hihihihihihihi</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <Text style={{ marginHorizontal: 8 }}>•</Text>
              <Text>11111111111111</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <Text style={{ marginHorizontal: 8 }}>•</Text>
              <Text>22222222222222</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Education</Text>
            <Text style={styles.school}>Jedi Academy</Text>
            <Text style={styles.degree}>Jedi Master</Text>
            <Text style={styles.candidate}>A long, long time ago</Text>
          </View>
          <Text style={styles.header}> But are non-input elements accessible? I’m not entirely sure.</Text>
          <Text>
            Notice I put role="textbox" on the element. That’s just a best-guess based on some docs. Even if that’s helpful… What about the fact that
            forms can be submitted with the Enter key? What about the idea that form data is often serialized and sent along, while the code that’s
            ed. For textareas, one classic technique is to count the number of line-breaks, use that to set the height, then multiply it by the
            line-height. That works great for preformatted text, like code, but not set the height, then multiply it by the line-height. That works
            great for preformatted text, like code, but not at all for long-form paragraph-like content. Here are all these ideas combined.
          </Text>*/}
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
