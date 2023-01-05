import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleClick = () => setCounter(counter + 1);
  const handleReset = () => setCounter(value);
  const handleSubtract = () => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button
        className="bg-violet-900 hover:bg-violet-600 active:bg-violet-800 mr-2  border-2 border-violet-900 rounded-md px-1"
        onClick={handleClick}
      >
        +1
      </button>
      <button
        className="bg-violet-900 hover:bg-violet-600 active:bg-violet-800 mr-2  border-2 border-violet-900 rounded-md px-1"
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        className="bg-violet-900 hover:bg-violet-600 active:bg-violet-800 mr-2  border-2 border-violet-900 rounded-md px-1"
        onClick={handleSubtract}
      >
        -1
      </button>
    </>
  );
};

CounterApp.defaultProps = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
