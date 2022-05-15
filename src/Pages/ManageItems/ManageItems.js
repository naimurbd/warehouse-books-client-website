
import React from 'react';
import useItems from '../../hooks/useItems';


const ManageItems = () => {
    const [items, setItems] = useItems();

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
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);

                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-3 text-info'>My Items</h2>
            <div className=" ">
                {
                    items.map(item => <div className='item'>
                        <img className='m-3 mt-5' src={item.img} alt="" />
                        <h6>ID: {item._id}</h6>

                        <h2>{item.name}</h2>
                        <p><small>{item.description}</small></p>
                        <h6>Price: {item.price}</h6>
                        <h6>Quantity: {item.quantity}</h6>
                        <h5>Supplier: {item.supplier}</h5>
                        <button onClick={() => handleDelete(item._id)}>Delet</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageItems;

