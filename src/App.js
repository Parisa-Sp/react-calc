import React, { useState } from 'react';
import './calcss.css'; 

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleOperation = (operation) => {
    const numInput = parseFloat(input);
    if (isNaN(numInput)) {
      alert("Please enter a valid number");
      return;
    }

    let newResult = parseFloat(result);
    if (isNaN(newResult)) {
      newResult = 0;
    }

    switch (operation) {
      case 'add':
        newResult += numInput;
        break;
      case 'subtract':
        newResult -= numInput;
        break;
      case 'multiply':
        newResult *= numInput;
        break;
      case 'divide':
        if (numInput === 0) {
          alert("Cannot divide by zero");
          return;
        }
        newResult /= numInput;
        break;
      default:
        return;
    }

    setResult(newResult);
    setInput('');
  };

  const resetInput = () => setInput('');
  const resetResult = () => setResult('');

  return (
    <div className="calculator">
      <h1>Simplest Working Calculator</h1>
      <div className="result">{result}</div>
      <input type="text" value={input} onChange={handleInput} />
      <div className="button-row">
        <button onClick={() => handleOperation('add')}>add</button>
        <button onClick={() => handleOperation('subtract')}>subtract</button>
        <button onClick={() => handleOperation('multiply')}>multiply</button>
        <button onClick={() => handleOperation('divide')}>divide</button>
      </div>
      <button onClick={resetInput} className="reset-button">reset input</button>
      <button onClick={resetResult} className="reset-button">reset result</button>
    </div>
  );
}

export default Calculator;
