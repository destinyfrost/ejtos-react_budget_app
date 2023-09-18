import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
	const { budget, dispatch, currency, expenses } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget value lower than the spending!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
	
	return (
		<div className='alert alert-secondary'>
            <tr>
            <td>Budget:&nbsp;{props.name}</td>
            <td>{currency}{props.cost}</td>
            </tr>

			<input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>   
		</div>
	);
};

export default Budget;