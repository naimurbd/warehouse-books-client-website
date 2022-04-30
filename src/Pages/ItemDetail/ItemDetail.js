import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h2>welcome to detail: {inventoryId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;