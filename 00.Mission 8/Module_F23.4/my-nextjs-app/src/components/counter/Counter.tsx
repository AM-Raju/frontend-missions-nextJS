"use client"
import React, { useState } from 'react';

const Counter = () => {
      const [counter, setCounter] = useState(0)
    return (
        <div>
            <p>Counter: {counter}</p>
      <button  className='btn btn-accent' onClick={()=> setCounter(counter+1)}>Increase</button>
      <button className='btn btn-accent' onClick={()=> setCounter(counter-1)}>Decrease</button>
        </div>
    );
};

export default Counter;