import React, { useState, useMemo } from 'react';


const ExpensiveComponent = ({ value }) => {
  const expensiveResult = useMemo(() => {
    console.log('Calculating expensive result...');
    // Simulating a computationally expensive task
    let result = 0;
    for (let i = 0; i < value; i++) {
      result += i;
    }
    return result;
  }, [value]); // Dependency array: recompute if 'value' changes

  return (
    <div>
      <p>Expensive Result: {expensiveResult}</p>
    </div>
  );
};

const Test2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ExpensiveComponent value={count} />
    </div>
  );
};

export default Test2;

