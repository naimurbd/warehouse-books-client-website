import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageInventories from '../ManageInventories/ManageInventories';
import './ItemDetail.css'


const ItemDetail = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://shielded-badlands-43873.herokuapp.com/item/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [inventoryId])

    //handleDelivary decrease

    const handleDelivered = async () => {
        await axios
            .put(`https://shielded-badlands-43873.herokuapp.com/item/${inventoryId}`, {
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


    //quantity increase

    const handleStock = (event) => {
        event.preventDefault();
        let inputFiled = event.target.number.value;
        console.log(inputFiled);
        const newQuantity = item.quantity;
        const newQuantityIncrease = parseInt(newQuantity) + parseInt(inputFiled);
        console.log(newQuantityIncrease, 'newQuantity');
        const updateItem = { newQuantityIncrease };
        fetch(`https://shielded-badlands-43873.herokuapp.com/restockitem/${inventoryId}`, {
            method: "PUT",

            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify(updateItem)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('success', data);
                setItem(data);
                toast.success('This book restock successfully');
            });
        event.target.reset()
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
                <ToastContainer />

                <form onSubmit={handleStock} >
                    <input className='mt-3' type="number" placeholder='ReStocked' name="number" required />{" "}
                    <br />
                    <button type="submit" className=' btn btn-primary mt-3'>Re Stock</button>
                </form>
                <ToastContainer />

            </div>
            <div className='item-btn'>
                <Link className='text-primary mt-3 pe-auto text-decoration-none' to="/manageinventories" element={<ManageInventories></ManageInventories>}>Manage Inventories</Link>
            </div>
        </div>





    );
};

export default ItemDetail;