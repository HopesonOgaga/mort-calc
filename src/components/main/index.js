import React from "react";
import Result from "./result";
import Calculator from "./calculator";
export default function Main() {
  return (
    <div className="w-screen h-screen flex  justify-center items-center ">
      <Calculator />
      <Result />
    </div>
  );
}
