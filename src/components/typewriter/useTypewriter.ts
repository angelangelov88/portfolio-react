import { useState, useEffect } from "react";

const useTypewriter = (text: string, delay: number, start: boolean) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!start || output.length >= text.length) return;
    const timeout = setTimeout(() => setOutput(text.slice(0, output.length + 1)), delay);
    return () => clearTimeout(timeout);
  }, [output, text, delay, start]);

  return output;
};

export default useTypewriter;
