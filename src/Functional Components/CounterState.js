import React, { useState } from 'react';

const CounterState = () =>{
    const [state ,  setState] = useState(0)
    return (
      <>
        <button onClick={()=>setState(state+1)}>Increment</button>
        <h1>{state}</h1>
        <button onClick={()=>setState(state-1)}>Decrement</button>
      </>
    );
}

export default CounterState;