import './quantityPicker.css';
import { useState } from 'react';

const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if(quantity>1)
        setQuantity(quantity-1)
    }
    const handleIncrease = () => {
        console.log("this does too!");
        setQuantity(quantity+1);
    }

    return (<div className="quantityPicker">
        <button class="btn btn-primary btn-sm" className='btn btn-info'onClick={handleDecrease}>-</button>
        <label> {quantity} </label>
        <button onClick={handleIncrease}>+</button>
    </div>);
};

export default QuantityPicker;