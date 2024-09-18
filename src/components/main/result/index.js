import React, { useState } from "react";

export default function Result() {
  const [monthpay, setMonthPay] = useState("");
  const [termpay, setTermPay] = useState("");
  return (
    <div className="bg-Slate_800 w-[35vw] h-[80vh] flex flex-col justify-around p-4 rounded-md shadow-md ">
      <div>
        <p className="font-semibold text-2xl capitalize  text-White mb-4  ">
          your result
        </p>
        <p className="text-Slate_100 font-mono text-sm ">
          your result are shown below based on the information you provided. To
          adjust the results, edit the form and click calculate repayment again
          .
        </p>
      </div>
      <div className="bg-cuLime  rounded-md shadow-sm">
        <div className="w-full h-[40vh] bg-Slate_900 p-4 flex flex-col justify-around gap-4 rounded-md shadow-sm mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-Slate_100">your monthly payments</p>
            <p className="text-cuLime text-5xl font-semibold capitalize ">
              € 1,797.94
            </p>
          </div>
          <div className="underline border-2 border-t-2 rounded-lg border-Slate_100">

          </div>
          <div className="flex flex-col gap-2">
            <p className="text-Slate_100 capitalize text-sm">
              total you will repay over the term
            </p>
            <p className="text-Slate_100 font-semibold capitalize text-2xl ">
              € 539,322.94
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
