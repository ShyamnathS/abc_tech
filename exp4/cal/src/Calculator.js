import React, { useState } from "react";
import "./Calculator.css"; // Import the CSS file

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString()); // Evaluates the expression
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear the input
    } else {
      setInput(input + value); // Append value
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((char) => (
          <button key={char} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
