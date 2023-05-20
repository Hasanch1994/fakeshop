"use client";

import Image from "next/image";
import React, { useState } from "react";

const NumberInput = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        className="px-2 input input-bordered border-r-0 rounded-tl-md rounded-bl-md border-dark_/30 rounded-none"
        onClick={decreaseCount}
      >
        <Image src={"/icons/mines.svg"} width={24} height={24} alt="mines" />
      </button>

      <input
        type="number"
        min="1"
        max="10"
        className="input input-bordered w-16 border-r-0 border-l-0 border-dark_/30 rounded-none text-center"
        value={count}
        readOnly
      />

      <button
        type="button"
        className="px-2 input input-bordered border-l-0 rounded-tr-md rounded-br-md border-dark_/30 rounded-none"
        onClick={increaseCount}
      >
        <Image src={"/icons/plus.svg"} width={24} height={24} alt="mines" />
      </button>
    </div>
  );
};

export default NumberInput;
