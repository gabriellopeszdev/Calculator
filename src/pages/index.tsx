import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("0");
  const [result, setResult] = useState<string>("0");

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setInput("0");
      setResult("0");
    } else if (value === "=") {
      try {
        const cleanedInput = input.replace(/^0+/, "") || "0";
        const evalResult = eval(cleanedInput);
        setResult(String(evalResult));
        setInput(String(evalResult));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "+/-") {
      setInput((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    } else if (value === "%") {
      setInput((prev) => String(parseFloat(prev) / 100));
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 rounded-lg p-4 w-80 shadow-lg">
        <div className="text-right text-4xl font-light text-white mb-8 pr-2 custom-scroll">
          {input}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button
            className="bg-gray-600 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
            onClick={() => handleButtonClick("C")}
          >
            C
          </button>
          <button
            className="bg-gray-600 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
            onClick={() => handleButtonClick("+/-")}
          >
            +/-
          </button>
          <button
            className="bg-gray-600 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
            onClick={() => handleButtonClick("%")}
          >
            %
          </button>
          <button
            className="bg-orange-500 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
            onClick={() => handleButtonClick("/")}
          >
            ÷
          </button>
          {["7", "8", "9"].map((btn) => (
            <button
              key={btn}
              className="bg-gray-800 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
          <button
            className="bg-orange-500 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
            onClick={() => handleButtonClick("*")}
          >
            ×
          </button>

          {["4", "5", "6"].map((btn) => (
            <button
              key={btn}
              className="bg-gray-800 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
          <button
            className="bg-orange-500 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>

          {["1", "2", "3"].map((btn) => (
            <button
              key={btn}
              className="bg-gray-800 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
          <button
            className="bg-orange-500 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>

          <button
            className="col-span-2 bg-gray-700 text-white text-xl rounded-full w-full h-16 flex items-center justify-center"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="bg-gray-700 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className="bg-orange-500 text-white text-xl rounded-full w-16 h-16 flex items-center justify-center"
            onClick={() => handleButtonClick("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
