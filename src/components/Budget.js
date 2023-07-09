import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget, expenses, currency} = useContext(AppContext);

    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (val < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending!");
        }
        else if (val > 20000){
            alert("You can not increase the budget more than 20000!")
        } else {
            dispatch({
                type:'SET_BUDGET',
                payload:val,
            })
        }
        
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" value={budget} max="20000" step="10" onInput={(event) => changeBudget(event.target.value)}></input>
        </div>
    );
};
export default Budget;