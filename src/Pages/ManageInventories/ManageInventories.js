import React, { useEffect, useState } from 'react';

import ManageInventory from '../ManageInventory/ManageInventory';
import { Link } from 'react-router-dom';
import AddItem from '../AddItem/AddItem';


const ManageInventories = () => {


    const [manageInventories, setManageInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setManageInventories(data));
    }, []);




    return (
        <div id='items' className='container'>
            <h1 className='items-title m-5 '>Inventory Items</h1>
            <div className="items-container">
                {
                    manageInventories.map(manage => <ManageInventory
                        key={manage._id}
                        manage={manage}
                    >

                    </ManageInventory>)

                }
            </div >
            <Link className='text-primary m-5 pe-auto w-fit block mx-auto flex justify-center text-decoration-none' to="/additem" element={<AddItem></AddItem>}>Add Item</Link>

        </div >
    );
};

export default ManageInventories;