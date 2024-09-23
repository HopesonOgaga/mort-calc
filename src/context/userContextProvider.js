import React from "react";
import { useState } from "react";

import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  return (
    <UserContext.Provider value={{ amount, term, rate }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
