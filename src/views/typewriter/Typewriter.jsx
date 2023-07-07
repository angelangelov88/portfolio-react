import React, { useState, useEffect } from "react";

function Typewriter({ text, text2, delay }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText2, setCurrentText2] = useState("");
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
    if (currentIndex2 < text2.length) {
      const timeout = setTimeout(() => {
        setCurrentText2((prevText) => prevText + text2[currentIndex2]);
        setCurrentIndex2((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [currentIndex, delay, text, currentIndex2, text2]);

  return (
    <>
      <h1>{currentText}</h1>
      <h2>{currentText2}</h2>
    </>
  );
}

export default Typewriter;
