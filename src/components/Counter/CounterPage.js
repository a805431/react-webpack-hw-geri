import { IncrementButton, ButtonWrapper, NumberInput } from './counterPage.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  };
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch();
  };

  const decrement = () => {
    // setCount(count - 1);
  };

  const handleChange = (event) => {
    //if we get back NaN for event.target.value, which is a falsy value
    //we will assign 0 instead to the value variable
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <div style={{ margin: '0.75rem' }}>
      <h1 style={{ fontSize: '1.125rem', lineHeight: '1.75rem' }}>
        Count is {state.count}
      </h1>
      <ButtonWrapper>
        <IncrementButton onClick={increment}>Increment</IncrementButton>
        <IncrementButton onClick={decrement}>Decrement</IncrementButton>
      </ButtonWrapper>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        {/*value={valueToAdd || ''} --> means if we have valueToAdd piece of state of 0, then don't print out the zero, 
        just put in empty string instead*/}
        <NumberInput
          type="number"
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <IncrementButton>Add it!</IncrementButton>
      </form>
    </div>
  );
}

export default CounterPage;
