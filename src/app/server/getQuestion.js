// Importing question array data
import HTML from "./allQuestions/html";
import CSS from "./allQuestions/css";
import Bootstrap from "./allQuestions/bootstrap";
import Tailwind from "./allQuestions/tailwindData";
import Javascript from "./allQuestions/javascript";
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

// Organizing question array data in an object
const allQuestions = {
  HTML,
  CSS,
  Bootstrap,
  Tailwind,
  Javascript,
  React,
  Next,
  Veu,
  Python,
  PHP,
  Express,
  Node,
  Mahdi,
  Psychology,
  English,
  Math,
};

// Function to get questions based on the obj name
const getQuestions = (name) => {
  return allQuestions[name] || null;
};

export default getQuestions;
