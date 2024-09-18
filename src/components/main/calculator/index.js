import React, { useState } from "react";

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [repay, setRepay] = useState("");
  const [interest, setInterest] = useState("");
  // clear
  function clear() {
    setAmount("");
    setTerm("");
    setRate("");
    setRepay("");
    setInterest("");
  }
  //
  function handleSubmit(e) {
    e.preventDefault();

    //
    const annaulTerm = parseFloat(term);
    const interestRate = parseFloat(rate) / 100 / 12;
    const principal = parseFloat(amount);
    setAmount("");
    setTerm("");
    setRate("");
    setRepay("");
    setInterest("");

    if (!principal || !interestRate || !annaulTerm) {
      alert("Please enter valid numeric values for all fields.");
      return;
    }

    // Calculate monthly repayment using the formula:
    // R = P[r(1+r)^n] / [(1+r)^n - 1]
    const repayment =
      (principal * interestRate * Math.pow(1 + interestRate, annaulTerm)) /
      (Math.pow(1 + interestRate, annaulTerm) - 1);

    const totalRepayment = repayment * annaulTerm;
    const totalInterest = totalRepayment - principal;

    setRepay(totalRepayment.toFixed(2));
    setInterest(totalInterest.toFixed(2));

    const data = {
      term,
      rate,
      amount,
      repayment: totalRepayment.toFixed(2),
      interest: totalInterest.toFixed(2),
    };

    console.log(data);
  }
  return (
    <div className="bg-white w-[35vw] h-[80vh] flex flex-col gap-6 p-4 rounded-md shadow-md ">
      <div>
        <div className="flex justify-between w-full ">
          <p className="text-Slate_900 font-bold capitalize text-xl ">
            mortgage calculator
          </p>
          <button
            onClick={clear}
            className=" underline text-xl font-semibold capitalize"
          >
            clear
          </button>
        </div>
      </div>
      <div>
        <form className="" onSubmit={handleSubmit}>
          <div>
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-Slate_700 capitalize "
            >
              mortgage amount
            </label>
            <input
              required
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
          </div>
          <div>
            <div>
              <label
                for="large-input"
                className="block mb-2 text-sm font-medium text-Slate_700 capitalize "
              >
                mortgage term
              </label>
              <input
                required
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              ></input>
            </div>
            <div>
              <label
                for="large-input"
                className="block mb-2 text-sm font-medium text-Slate_700 capitalize "
              >
                interest rate
              </label>
              <input
                required
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              ></input>
            </div>
            <div>
              <p className="block mb-2 text-sm font-medium text-Slate_700 capitalize mt-4 ">
                mortgage type
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="bordered-radio-1"
                  class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize "
                >
                  repayment
                </label>
              </div>
              <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="bordered-radio-2"
                  class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
                >
                  interest only
                </label>
              </div>
            </div>
          </div>
          <div className="mt-6 ">
            <button className="bg-cuLime  capitalize font-bold flex justify-center gap-6 py-2 w-1/2 h-12 rounded-md">
              <img src="/images/icon-calculator.svg" alt="calc"></img>calculate
              repayment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
