import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
//Here, you are using the reduce function to get a total of all the costs, assigning this to a variable and displaying the variable in your JSX.
//Now whenever the user adds an expense, this causes the state to update, which will cause all components connected to the context to re-render and update themselves with new values.
const Remaining = (props) => {
    const { expenses, currency, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <tr>Remaining:&nbsp; 
            <td>{currency}{props.cost}</td>
            <td>{budget - totalExpenses}{props.name}</td>
            </tr>
        </div>
    );
};
export default Remaining;