
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

        const url = 'https://shielded-badlands-43873.herokuapp.com/item';
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