import './product.css';
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product = (props) => {
    
    const [quantity, setQuantity] = useState(1);

    const onQuantityChange = (value) =>{
        console.log("Quantity has changed to: ", value);
        setQuantity(value);
    };
    const getTotal = () => {
        let total = quantity * props.data.price;
        return "$" + getTotal.toFixed(2);
    }
    return (<div className='product'>
        <img src={"/img/"+props.data.image} alt="product image"></img>
        <h2> {props.title} </h2>
        <label className='price'>Price: {props.data.price}</label>
        <label className='total'>Total: {getTotal()} </label>
        <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
        <button>Add</button>
    </div>);
};

export default Product;

