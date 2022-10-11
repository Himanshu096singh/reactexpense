import logo from './logo.svg';
import ExpenseItem from './Components/ExpenseItem';
import './App.css';

function App() {
  const item=[
    {title:"Wifi",price:199.00,date:"October 20 2020"},
    {title:"Food",price:99.00,date:"October 26 2020"},
    {title:"Travel",price:205.00,date:"November 22 2020"},
    {title:"Ticket",price:300.00,date:"December 10 2020"},
  ]
  return (
    <div className="App">
      <h1>React Expense List</h1>
      <ExpenseItem title={item[0].title} price={item[0].price} date={item[0].date}></ExpenseItem>
      <ExpenseItem title={item[1].title} price={item[1].price} date={item[1].date}></ExpenseItem>
      <ExpenseItem title={item[2].title} price={item[2].price} date={item[2].date}></ExpenseItem>
      <ExpenseItem title={item[3].title} price={item[3].price} date={item[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
