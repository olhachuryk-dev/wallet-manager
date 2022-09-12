import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const SOME_DUMMY_DATA = [
  {
    date: new Date(2022, 3, 13),
    title: "Car insurance",
    amount: 345.67,
  },
  {
    date: new Date(2021, 4, 23),
    title: "Party expenses",
    amount: 145.09,
  },
  {
    date: new Date(2022, 5, 5),
    title: "Dentist appointment",
    amount: 1345.67,
  },
  {
    date: new Date(2022, 6, 10),
    title: "Mothers B-day",
    amount: 400,
  },
];

function App() {
  const [expenses, setExpenses] = useState(SOME_DUMMY_DATA);

  const addExpenseHandler = (expenseToAdd) => {
    setExpenses((prevState) => {
      return [
        ...prevState,
        expenseToAdd
      ]
    })
  } 

  return (
    <div>
      <NewExpense onExpenseAdd = {addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
