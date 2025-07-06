import React, { useState } from 'react';

function Button({ value, onClick, className }) {
  return (
    <button
      className={`btn ${className} m-1`}
      style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

const buttonRows = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '=', '+']
];

function Calculator() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        const evalResult = eval(display);
        setResult(evalResult);
        setDisplay(evalResult.toString());
      } catch {
        setResult('Error');
        setDisplay('');
      }
    } else {
      // If previous result shown, start new calculation
      if (result !== null && ['+', '-', '*', '/'].includes(value) === false) {
        setDisplay(value);
        setResult(null);
      } else {
        setDisplay(prev => prev + value);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ width: "275px" }}>
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-3 text-end"
            value={display || "0"}
            readOnly
            style={{ fontSize: "2rem" }}
          />
          {buttonRows.map((row, idx) => (
            <div className="d-flex justify-content-between mb-2" key={idx}>
              {row.map(btn => {
                let className = 'btn-light';
                if (['/', '*', '-', '+'].includes(btn)) className = 'btn-secondary';
                if (btn === '=') className = 'btn-primary';
                return (
                  <Button key={btn} value={btn} className={className} onClick={handleButtonClick} />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
