"use client";
import HTML from "./allQuestions/html";
import CSS from "./allQuestions/css";
import Bootstrap from "./allQuestions/bootstrap";
import Tailwind from "./allQuestions/tailwindData";
import JavaScript from "./allQuestions/javascript";
import React from "./allQuestions/react";
import Next from "./allQuestions/next";
import Veu from "./allQuestions/veu";
import Python from "./allQuestions/python";
import PHP from "./allQuestions/php";
import Express from "./allQuestions/express";
import Node from "./allQuestions/node";
import Mahdi from "./allQuestions/mahdi";
import Psychology from "./allQuestions/psychology";
import English from "./allQuestions/english";
import Math from "./allQuestions/math";

const getQuestions = (name) => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  switch (name) {
    case "HTML":
      return HTML;
    case "CSS":
      return CSS;
    case "JavaScript":
      return JavaScript;
    case "Python":
      return Python;
    case "PHP":
      return PHP;
    case "Bootstrap":
      return Bootstrap;
    case "Tailwind":
      return Tailwind;
    case "C":
      return C;
    case "Next.js":
      return Next;

    case "React.js":
      return React;
    case "Veu.js":
      return Veu;
    case "Node.js":
      return Node;
    case "Express.js":
      return Express;

    case "Psychology":
      return Psychology;
    case "Mahdi-Vai":
      return Mahdi;
    case "English-class-under-ten":
      return English;
    case "Math-class-under-ten":
      return Math;
  }
};
export default getQuestions;
