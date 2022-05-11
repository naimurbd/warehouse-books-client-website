import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    //handleDelivary

    const handleDelivered = async () => {
        await axios
            .put(`http://localhost:5000/item/${inventoryId}`, {
                quantity: item.quantity - 1,
            })
            .then((response) => {
                if (response.data.modifiedCount > 0) {
                    setItem({ ...item, quantity: item.quantity - 1 });
                    toast("Successfully Delivered !!", {
                        type: "success",
                        draggable: true,
                    });
                }
            });
    };

    return (
        <div className='text-center'>
            <img className='m-3 mt-5' src={item.img} alt="" />
            <h6>ID: {item._id}</h6>
            <h2> {item.name}</h2>
            <p><small>{item.description}</small></p>
            <h6>Price: {item.price}</h6>
            <h6>Quantity: {item.quantity}</h6>
            <h5>Supplier: {item.supplier}</h5>
            <div className='text-center'>



                <button onClick={handleDelivered} className='btn btn-primary'>Delivered</button>
                {/* <ToastContainer />  */}

            </div>
        </div>
    );
};

export default ItemDetail;