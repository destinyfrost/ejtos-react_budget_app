import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components under here

//Code to import RemainingBudget.js
import RemainingBudget from './components/Remaining';

//Code to import ExpenseTotal.js
import ExpenseTotal from './components/ExpenseTotal';

//Code to import ExpenseList.js
import ExpenseList from './components/ExpenseList';

//Code to import ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';

//Code to import AllocationForm.js
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {// Budget component
                    <div className='col-sm'>
                        <Budget />
                    </div>}        

                        {//Remaining component
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>}        

                        {//ExpenseTotal component
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>}        

                    <h3 className='mt-3'>Allocation</h3>   
                        {//ExpenseList component
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>}         
  
                       
                    <h3 className='mt-3'>Change Allocation<br></br></h3>
                        {//AllocationForm component
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>}        

                </div>
            </div>
        </AppProvider>
    );
};

export default App;