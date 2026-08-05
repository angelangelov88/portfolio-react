import useTypewriter from "./useTypewriter";

const Typewriter = ({ text, text2, delay }: { text: string; text2: string; delay: number }) => {
  const line1 = useTypewriter(text, delay, true);
  const line2 = useTypewriter(text2, delay, line1 === text);

  return (
    <>
      <h1>{line1}</h1>
      <h2>{line2}</h2>
    </>
  );
};

export default Typewriter;
