// Counter.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="component-container">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)} className="button">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="button">
          Decrement
        </button>
        <button onClick={() => setCount(0)} className="button">
          Reset
        </button>
      </div>
      <Link to="/" className="link">
        Go to Random Number Generator
      </Link>
    </div>
  );
}
