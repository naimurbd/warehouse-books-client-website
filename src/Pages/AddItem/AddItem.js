// import React from 'react';
// import { useForm } from "react-hook-form";

// const AddItem = () => {
//     const { register, handleSubmit } = useForm();

//     const onSubmit = (data) => {
//         fetch("http://localhost:5000/item",
//             {
//                 method: "POST",
//                 headers: { "content-type": "application/json" },
//                 body: JSON.stringify(data),
//             })
//             .then((res) => res.json())
//             .then((result) => {
//                 console.log(result);
//             });
//     };

//     return (
//         <div className='w-50 mx-auto'>
//             <h2>Please Add New Item</h2>
//             <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
//                 <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
//                 <textarea className='mb-2' placeholder='Description' {...register("description")} />
//                 <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
//                 <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
//                 <input className='mb-2' placeholder='Supplier' type="name" {...register("supplier")} />
//                 <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
//                 <input type="submit" value="delivered" />
//             </form>
//         </div>
//     );
// };

// export default AddItem;


import React, { Fragment, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth);
    const [validated, setValidated] = useState(false);

    const handleAddItem = (event) => {
        event.preventDefault();
        const data = {
            name: event.target.name?.value,
            price: event.target.price?.value,
            quantity: event.target.quantity?.value,
            supplier: event.target.supplier?.value,
            email: user?.email,
            img: event.target.img?.value,
            description: event.target.description?.value,
        };
        console.log(data);

        const url = 'http://localhost:5000/item';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });

        toast("Thanks for Adding Item");
        event.reset();
    };
    return (
        <Fragment>
            <section className="add-form-container container-style">
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleAddItem}
                >
                    <div className="text-center mb-5">
                        <h1>Please Add Item</h1>
                    </div>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                name="name"
                                placeholder="Item name"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Control
                                required
                                type="text"
                                value={user?.email}
                                readOnly
                                placeholder="Email"
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Control
                                required
                                name="price"
                                type="number"
                                placeholder="Price"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Control
                                required
                                name="quantity"
                                type="number"
                                placeholder="Quantity"
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Control
                                required
                                name="supplier"
                                type="text"
                                placeholder="Supplier Name"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Control
                                required
                                name="img"
                                type="text"
                                placeholder="Image URL"
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Control
                                required
                                name="description"
                                type="text"
                                as="textarea"
                                placeholder="Description"
                            />
                        </Form.Group>
                    </Row>

                    <Button className="btn-style" type="submit">
                        Add Item
                    </Button>
                    <ToastContainer />
                </Form>
            </section>
        </Fragment>
    );
};

export default AddItem;