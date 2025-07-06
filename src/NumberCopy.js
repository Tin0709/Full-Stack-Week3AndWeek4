import React, { useRef, useState } from "react";

export default function NumberCopy() {
  const [number, setNumber] = useState(0);
  const inputRef = useRef();

  return (
    <div style={{ marginTop: 24 }}>
      <h2>{number}</h2>
      <button onClick={() => setNumber((n) => n + 1)}>+</button>
      <button onClick={() => setNumber((n) => n - 1)}>-</button>
      <div>
        <input ref={inputRef} type="number" placeholder="Enter number" />
        <button
          onClick={() => {
            setNumber(Number(inputRef.current.value));
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
