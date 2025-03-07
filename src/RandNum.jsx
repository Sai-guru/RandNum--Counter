// RandNum.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="component-container">
      <h1>Random Number Generator</h1>
      <button onClick={generateRandomNumber} className="button">
        Generate Random Number
      </button>
      {randomNumber !== null && <p>Generated Number: {randomNumber}</p>}
      <Link to="/counter" className="link">
        Go to Counter
      </Link>
    </div>
  );
}
