import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState(
    new Date().getFullYear().toString()
  );

  const selectedFilterHandler = (filter) => {
    setYearFilter(filter);
  };

  const filteredExpenses = props.expenses.filter((expenseToFilter) => {
    return expenseToFilter.date.getFullYear().toString() === yearFilter;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectedFilter={selectedFilterHandler}
        selectedYear={yearFilter}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((expense, index) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={index}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
