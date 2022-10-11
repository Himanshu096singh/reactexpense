import './ExpenseItem.css';
function ExpenseItem(props){
    return (
        <div className='expenseitem'> 
            <div className='date'>
                <p>{props.date}</p>
            </div>
            <div className='title'>
                <h2>
                    {props.title}
                </h2>
            </div>
            <div className='price'>
                <p> {props.price} </p>
            </div>
        </div>
    )
}

export default ExpenseItem