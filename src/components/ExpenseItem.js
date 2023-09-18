import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FcPlus } from 'react-icons/fc';
import { AiFillMinusCircle } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';
//Here, you are dispatching an action. Your action contains the type (so the reducer knows how to update the state) and the payload. In this case you are passing the ID of this expense (which you get from props when you rendered the ExpenseList).
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

    dispatch({
        type: 'RED_EXPENSE',
        payload: expense
    });
}
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus size='2em' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><AiFillMinusCircle size='2em' color="red" onClick={event=> decreaseAllocation(props.name)}></AiFillMinusCircle></td>
        <td><TiDelete size='2em' color="red" onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;