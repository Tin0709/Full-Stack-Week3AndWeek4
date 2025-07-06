import React, { useEffect, useState } from "react";

export default function CountDown({ initial }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    if (count === 0) return;
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h2>CountDown: {count}</h2>
    </div>
  );
}
