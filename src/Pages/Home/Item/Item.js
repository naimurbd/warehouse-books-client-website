import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { id, name, img, description, price, quantity, supplierName } = item;
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <p>{quantity}</p>
            <h3>{supplierName}</h3>
            <button onClick={() => navigateToItemDetail(id)} className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Item;