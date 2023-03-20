import { IncrementButton, ButtonWrapper, NumberInput } from './counterPage.css';
import { useState } from 'react';

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div style={{margin: "0.75rem"}}> 
      <h1 style={{fontSize: "1.125rem", lineHeight: "1.75rem" }}>Count is {count}</h1>
      <ButtonWrapper>
        <IncrementButton onClick={increment}>Increment</IncrementButton>
        <IncrementButton onClick={decrement}>Decrement</IncrementButton>
      </ButtonWrapper>
    
      <form>
        <label>Add a lot!</label>
        <NumberInput type="number"/>
        <IncrementButton>Add it!</IncrementButton>
      </form>
    </div>
  );
}

export default CounterPage;
