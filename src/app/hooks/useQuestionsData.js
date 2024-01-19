"use client";
import { useState, useEffect } from "react";
import { fetchQuestions } from "../utils/api/facthQuestins";
import markDataInstance from "../server/mark";

// Function for shuffling an questions data array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const useQuestions = (subject) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("facthDataCall");
      try {
        setLoading(true);
        setError(null);
        const data = await fetchQuestions(subject);
        markDataInstance.setMarkData({ questions: shuffleArray(data) });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { questionsData, loading, error };
};

export default useQuestions;
