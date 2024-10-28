import Count from "./Count";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Count count={count} />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
