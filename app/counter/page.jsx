'use client'; // This directive ensures the component runs on the client side

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/features/counterSlice'; // Verify this path!

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2"> {/* Center content vertically and horizontally */}
      <h1 className="text-4xl font-bold mb-6">Count: {count}</h1> {/* Style the count */}
      <div className="flex space-x-4"> {/* Add space between buttons */}
        <button
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:cursor-pointer transition duration-200" // Button styles
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white hover:cursor-pointer transition duration-200" // Button styles
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white hover:cursor-pointer transition duration-200" // Button styles
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}