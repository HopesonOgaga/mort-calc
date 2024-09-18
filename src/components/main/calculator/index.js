import React from "react";
export default function Calculator() {
  return (
    <div className="bg-white w-[35vw] h-[80vh] flex flex-col gap-6 p-4 rounded-md shadow-md "> 
      <div>
        <div className="flex justify-between w-full ">
          <p className="text-Slate_900 font-bold capitalize text-xl ">mortgage calculator</p>
          <button className=" underline text-xl font-semibold capitalize">clear</button>
        </div>
        
      </div>
      <div>
        <form className="">
          <div>
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-Slate_700 capitalize "
            >
              mortgage amount
            </label>
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
            <div>
              <p className="block mb-2 text-sm font-medium text-Slate_700 capitalize mt-4 ">mortgage type</p>
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
            <button className="bg-cuLime  flex justify-center gap-6 py-2 w-1/2 h-12 rounded-md"><img src="/images/icon-calculator.svg" alt="calc"></img>calculate repayment</button>
          </div>
        </form>
      </div>
    </div>
  );
}
