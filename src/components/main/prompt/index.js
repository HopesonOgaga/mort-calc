import React from "react";

export default function Prompt() {
  return (
    <div className="bg-Slate_800 w-[35vw] h-[80vh] flex flex-col items-center justify-center   gap-6  p-4 rounded-md shadow-md ">
      <div className="">
        <img className="" src="/images/illustration-empty.svg" alt="empty"></img>
      </div>
      <div className="w-[25vw]">
        <p className="font-semibold text-3xl capitalize  text-White mb-4 text-center ">
          {" "}
          result shown here
        </p>
        <p className="text-Slate_100 font-mono text-sm text-center ">
          complete the form and click, calculate repayment to see what your
          monthly repayment would be
        </p>
      </div>
    </div>
  );
}
