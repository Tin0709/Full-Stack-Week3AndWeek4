import React from 'react';

function Calculator() {
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ width: "340px" }}>
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-3 text-end"
            value="0"
            readOnly
            style={{ fontSize: "2rem" }}
          />
          <div className="d-grid gap-2">
            <div className="row mb-2">
              <button className="col btn btn-light">7</button>
              <button className="col btn btn-light">8</button>
              <button className="col btn btn-light">9</button>
              <button className="col btn btn-secondary">/</button>
            </div>
            <div className="row mb-2">
              <button className="col btn btn-light">4</button>
              <button className="col btn btn-light">5</button>
              <button className="col btn btn-light">6</button>
              <button className="col btn btn-secondary">*</button>
            </div>
            <div className="row mb-2">
              <button className="col btn btn-light">1</button>
              <button className="col btn btn-light">2</button>
              <button className="col btn btn-light">3</button>
              <button className="col btn btn-secondary">-</button>
            </div>
            <div className="row">
              <button className="col btn btn-light">0</button>
              <button className="col btn btn-primary">=</button>
              <button className="col btn btn-secondary">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
