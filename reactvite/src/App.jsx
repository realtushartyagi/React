import React, { useState } from 'react';
import './index.css'; // Make sure this includes Tailwind CSS


const App = () => {
  const [count, setCount] = useState(0);

  const decreaseHandler = () => {
    setCount(count - 1);
  };

  const increaseHandler = () => {
    setCount(count + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className='text-[#0398d4] font-medium text-2xl'>Increment & Decrement</div>
      
      <div className="flex items-center gap-5 bg-white rounded-sm text-[25px] px-5 py-2">
        <button onClick={decreaseHandler} className='border-r-2 border-[#bfbfbf] pr-5'>
          -
        </button>
        
        <div className='font-bold'>
          {count}
        </div>

        <button onClick={increaseHandler} className='border-l-2 border-[#bfbfbf] pl-5'>
          +
        </button>
      </div>

      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-md'>
        Reset
      </button>
    </div>
  );
};

export default App;
