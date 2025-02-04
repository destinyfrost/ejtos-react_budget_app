import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
//Here you are creating a list using the map function to iterate over the expenses, and displaying an ExpenseItem component.
const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    
    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col" align="center">Increase by 10</th>
              <th scope="col" align="center">Decrease by 10</th>  
              <th scope="col" align="center">Delete</th> 
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;