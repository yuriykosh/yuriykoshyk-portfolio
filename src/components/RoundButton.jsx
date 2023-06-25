"use client";

import { twMerge } from "tailwind-merge";

const RoundButton = ({ children, className, action }) => {
  return (
    <button
      onClick={() => action()}
      className={twMerge(
        `flex items-center justify-center border rounded-full`,
        className
      )}
    >
      {children}
    </button>
  );
};
export default RoundButton;
