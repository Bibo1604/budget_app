import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary' style={{backgroundColor: '#93E499'}}>
            <label style={{marginLeft: '1rem', backgroundColor: '#93E499', color: 'white'}}>Currency
                <select id='currency' name='hover_color' 
                style={{marginLeft: '1rem', backgroundColor: '#93E499', color: 'white'}} 
                onChange={event => changeCurrency(event.target.value)}>
                    <option style={{color:'black'}} defaultValue value='£' name='£'>£ Pound</option>
                    <option style={{color:'black'}} value='$' name='$'>$ Dollar</option>
                    <option style={{color:'black'}} value='€' name='€'>€ Euro</option>
                    <option style={{color:'black'}} value='₹' name='₹'>₹ Ruppee</option>
                </select>
            </label>
        </div>
    );
};

export default Currency;