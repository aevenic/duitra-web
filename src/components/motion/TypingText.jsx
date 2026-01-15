import React from "react";

const TypingText = ({ words }) => {
  const [text, setText] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [mode, setMode] = React.useState("typing");
  const [charPos, setCharPos] = React.useState(0);

  React.useEffect(() => {
    const currentWord = words[wordIndex];
    const speedTyping = 120;
    const speedDeleting = 60;

    let timeout;

    if (mode === "typing") {
      timeout = setTimeout(() => {
        const next = currentWord.slice(0, charPos + 1);
        setText(next);
        setCharPos(charPos + 1);
        if (next === currentWord) {
          setTimeout(() => setMode("waiting"), 800);
        }
      }, speedTyping);
    }

    if (mode === "waiting") {
      timeout = setTimeout(() => {
        setMode("deleting");
      }, 800);
    }

    if (mode === "deleting") {
      timeout = setTimeout(() => {
        const next = currentWord.slice(0, charPos - 1);
        setText(next);
        setCharPos(charPos - 1);
        if (next.length === 0) {
          setWordIndex((wordIndex + 1) % words.length);
          setMode("typing");
        }
      }, speedDeleting);
    }

    return () => clearTimeout(timeout);
  }, [charPos, mode, wordIndex, words]);

  return <span>{text}</span>;
};

export default TypingText;
