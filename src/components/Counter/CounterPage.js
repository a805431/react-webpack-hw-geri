import { IncrementButton, ButtonWrapper, NumberInput } from './counterPage.css';
import { useContext, useReducer } from 'react';
import FarmsContext from '../../context/farms';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      //the alternatives are to throw an error or to return the state
      //throw new Error('unexpected action type: ' + action.type);
      return state;
  }
};

function CounterPage({ initialCount }) {
  const value = useContext(FarmsContext);
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    //if we get back NaN for event.target.value, which is a falsy value
    //we will assign 0 instead to the value variable
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
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
      {value}
    </div>
  );
}

export default CounterPage;
