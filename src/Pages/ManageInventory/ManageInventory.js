import React, { useState } from 'react';

const ManageInventory = ({ manage }) => {
    const { _id, name, img, description, price, quantity, supplier } = manage;

    const [manageInventories, setManageInventories] = useState([]);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = manageInventories.filter(item => item._id !== id);
                    setManageInventories(remaining);

                })
        }
    }


    return (
        <div>
            <div className='item'>
                <img className='mb-3' src={img} alt="" />

                <h2>{name}</h2>
                <p><small>{description}</small></p>

                <h6>Price: {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h5>Supplier: {supplier}</h5>
                < button className='btn btn-primary' onClick={() => handleDelete(manage._id)}>Delet</button>
            </div>

        </div>

    );
};

export default ManageInventory;