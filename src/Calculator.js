import React from 'react';


function Button({ value, onClick, className }) {
  return (
    <button className={`btn ${className} m-1`} style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
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
   return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ width: "275px" }}>
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-3 text-end"
            value="0"
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
                  <Button key={btn} value={btn} className={className} />
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
