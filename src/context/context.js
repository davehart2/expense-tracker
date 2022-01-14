import React, { useReducer, createContext } from "react";

const initialState = [];
export const BudgetTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  return (
    <BudgetTrackerContext.Provider value={{ appName: "Budget Tracker" }}>
      {children}
    </BudgetTrackerContext.Provider>
  );
};
