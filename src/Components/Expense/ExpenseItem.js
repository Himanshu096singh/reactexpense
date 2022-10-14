import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const  [title , setTitle] = useState(props.title);
    const clickHandler = () => {
      setTitle("Test");
    }
    return (
        <Card className='expenseitem'> 
            <ExpenseDate date={props.date} />
            <div className='title'>
                <h2>
                    {title}
                </h2>
            </div>
            <div className='price'>
                <p> $ {props.price} </p>
                <button onClick = {clickHandler}>Click Here </button>
            </div>
        </Card>
    )
}

export default ExpenseItem