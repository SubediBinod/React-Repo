import { useState } from "react";
import './output.css'

function Respond() {
  const [count, setCount] = useState(0);
  
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
<div className="w-80 h-auto bg-white shadow-lg rounded-lg p-4 flex flex-col  items-center h-screenspace-y-4 ">

      <p className="mb-4">Current Value of Count is {count}</p>
      <div className="flex space-x-4">
        <button
          className="bg-gray-300 hover:bg-slate-500 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={increase}
        >
          Increase
        </button>
        <button
          className="bg-gray-300 hover:bg-slate-500 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={decrease}
        >
          Decrease
        </button>
        <button
          className="bg-gray-300 hover:bg-slate-500 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={reset}
        >
          Reset
        </button>
        </div>
        </div>
    </>
  );
}

export default Respond;

