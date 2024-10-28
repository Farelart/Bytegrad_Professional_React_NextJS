import { useEffect } from "react";

export default function Count({ count }) {
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return <span className="count">{count}</span>;
}
