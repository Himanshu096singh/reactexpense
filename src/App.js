import React from 'react';
import logo from './logo.svg';
import ExpenseItem from './Components/Expense/Expense';
import './App.css';

const App = () => {
  const item=[
      {title:"Wifi",price:"199.00", date:new Date(2022, 2, 17) },
      {title:"Food",price:"99.00", date:new Date(2022, 5, 27)},
      {title:"Travel",price:"205.00", date:new Date(2022, 1, 15)},
      {title:"Ticket",price:"300.00", date:new Date(2022, 6, 2)},
  ]
  
  return (
    <div className="App">
      <h1>React Expense List</h1>
      <ExpenseItem item={item} />
    </div>
  );
}

export default App;
