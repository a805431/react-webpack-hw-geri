import { IncrementButton } from './counterPage.css';
import useCounterAndLog from '../../hooks/use-counter-and-log';

function CounterPage({ initialCount }) {
  const { count, increment } = useCounterAndLog(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <IncrementButton onClick={increment}>Increment</IncrementButton>
    </div>
  );
}

export default CounterPage;
