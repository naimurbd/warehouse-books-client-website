import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const { name, img, description, price } = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Item;