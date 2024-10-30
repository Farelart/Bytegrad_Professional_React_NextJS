import Title from "./Title";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";
import Count from "./Count";
import { useState, useEffect } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  /* const handleClick = () => {
    setCount(count + 1);
  }; */

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked}></Title>
      <Count count={count}></Count>
      <ResetButton setCount={setCount}></ResetButton>
      <CountButtons setCount={setCount} locked={locked}></CountButtons>
    </div>
  );
}
