import { useState, useEffect } from "react";

//name of this custom hook must start with use- and the other words after that must hint to the point of the function
function useCounterAndLog(initialCount) {
    const [count, setCount] = useState(initialCount);
  
    //the arrow func inside useEffect will run anytime the count piece of state changes
    useEffect(() => {
      console.log(count);
    }, [count]);
  
    const increment = () => { setCount(count + 1)};
  
    return {count, increment} // същото е като {count: count, handleClick: handleClick};
  }

export default useCounterAndLog;