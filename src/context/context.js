import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 150,
    category: "Food",
    type: "Expense",
    date: "2021-12-20",
    id: "a3c2429d-bb5d-4e86-83a3-8d71c2114773",
  },
  {
    amount: 350,
    category: "Business",
    type: "Income",
    date: "2021-11-18",
    id: "b6c60a5d-fd72-405a-9745-336da63efbed",
  },
  {
    amount: 950,
    category: "House",
    type: "Expense",
    date: "2022-01-01",
    id: "e182f546-4ede-44ae-ab6c-c09b47be727d",
  },
  {
    amount: 2500,
    category: "Salary",
    type: "Income",
    date: "2022-01-07",
    id: "45342ca0-f3f1-4837-9ed1-5d325685022a",
  },
  {
    amount: 50,
    category: "Pets",
    type: "Expense",
    date: "2022-01-10",
    id: "22c200e6-a832-423f-b874-79c0f52e1568",
  },
];
export const BudgetTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <BudgetTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </BudgetTrackerContext.Provider>
  );
};
