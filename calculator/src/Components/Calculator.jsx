import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState(0);

  const setvalfn = (e) => {
    const val = e.target.value;
    if (val === "") {
      setValue(0);
    } else {
      setValue((prev) => (prev === 0 ? val : prev + val));
    }
  };

  const num_eval = () => {
    try {
      let res_val = eval(value);
      setValue(res_val);
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="bg-gray-200 border border-black rounded-lg p-4 w-full max-w-sm mx-auto mt-6 shadow-xl">
      <input
        className="border bg-black text-white border-green-800 p-4 w-full rounded-md text-right font-bold text-2xl mb-4"
        type="text"
        value={value}
        readOnly
      />

      <div className="grid grid-cols-4 gap-2">
        {/* Operators */}
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            onClick={setvalfn}
            value={op}
            className="bg-gray-600 hover:bg-gray-700 text-lg font-bold text-white py-4 rounded-md"
          >
            {op}
          </button>
        ))}

        {/* Numbers */}
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={setvalfn}
            value={num}
            className="bg-gray-400 hover:bg-gray-500 text-lg font-bold py-4 rounded-md"
          >
            {num}
          </button>
        ))}

        {/* Equals */}
        <button
          onClick={num_eval}
          value="="
          className="bg-gray-500 hover:bg-gray-600 text-lg font-bold text-white py-4 rounded-md row-span-4"
        >
          =
        </button>

        {[4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={setvalfn}
            value={num}
            className="bg-gray-400 hover:bg-gray-500 text-lg font-bold py-4 rounded-md"
          >
            {num}
          </button>
        ))}

        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={setvalfn}
            value={num}
            className="bg-gray-400 hover:bg-gray-500 text-lg font-bold py-4 rounded-md"
          >
            {num}
          </button>
        ))}

        <button
          onClick={setvalfn}
          value="."
          className="bg-gray-400 hover:bg-gray-500 text-lg font-bold py-4 rounded-md"
        >
          .
        </button>
        <button
          onClick={setvalfn}
          value="0"
          className="bg-gray-400 hover:bg-gray-500 text-lg font-bold py-4 rounded-md"
        >
          0
        </button>

        {/* Clear */}
        <button
          onClick={setvalfn}
          value=""
          className="bg-red-500 hover:bg-red-600 text-lg font-bold text-white py-4 rounded-md"
        >
          C
        </button>
      </div>
    </div>
  );
}
