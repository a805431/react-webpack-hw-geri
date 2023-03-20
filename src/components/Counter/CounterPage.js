import { useState, useEffect } from 'react';
import { IncrementButton } from './counterPage.css';

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  //the arrow func inside useEffect will run anytime the count piece of state changes
  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => { setCount(count + 1)};

  return (
    <div>
      <h1>Count is {count}</h1>
      <IncrementButton id="btn-counter-increment" onClick={handleClick}>Increment</IncrementButton>
    </div>
  );
}

export default CounterPage;
