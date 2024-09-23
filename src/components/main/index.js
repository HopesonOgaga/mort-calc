import React from "react";
import Result from "./result";
import Calculator from "./calculator";
import UserContext from "../../context/userContext";
import { useContext } from "react";
import Prompt from "./prompt";
export default function Main() {
  const { data } = useContext(UserContext);
  return (
    <div className="w-screen h-screen flex  justify-center items-center ">
      <Calculator />
      {data ? <Result></Result> : <Prompt></Prompt>}
    </div>
  );
}
