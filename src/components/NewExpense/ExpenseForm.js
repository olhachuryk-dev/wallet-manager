import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // const [eneteredTitle, setEnteredTitle] = useState("");
  // const [eneteredAmount, setEnteredAmount] = useState(0);
  // const [eneteredDate, setEnteredDate] = useState(new Date().toISOString().slice(0, 10));
  const [showForm, setShowForm] = useState(false);

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: 0,
    enteredDate: new Date().toISOString().slice(0, 10),
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState, //to not to lose other data, otherwise it will be overwritten
        enteredTitle: event.target.value, //overwrites only this one key-value pair
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState, //to not to lose other data, otherwise it will be overwritten without any other object's key
        enteredAmount: event.target.valueAsNumber, //overwrites only this one key-value pair
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState, //to not to lose other data, otherwise it will be overwritten
        enteredDate: event.target.valueAsDate.toISOString().slice(0, 10), //overwrites only this one key-value pair
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData); //passing data to a NewExpense.js file

    setUserInput({
      enteredTitle: "",
      enteredAmount: 0,
      enteredDate: new Date().toISOString().slice(0, 10),
    });

    showExpenseForm();
  };

  const showExpenseForm = () => {
    setShowForm((prev)=>{return !prev});
  }

  if(!showForm) {
    return (<button onClick={showExpenseForm}>Add new expense</button>);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={showExpenseForm}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
