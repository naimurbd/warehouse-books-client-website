import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, img, description, price, quantity, supplier } = item;
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='item'>
            <img className='mb-3' src={img} alt="" />

            <h2>{name}</h2>
            <p><small>{description}</small></p>

            <h6>Price: {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <h5>Supplier: {supplier}</h5>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Item;