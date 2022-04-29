import React from 'react';
import newArival1 from '../../../Images/New arrival/New -arrival1.png'
import newArival2 from '../../../Images/New arrival/New-arrival2.png'
import newArival3 from '../../../Images/New arrival/FB_IMG_1651250909499.jpg'
import NewItem from '../NewItem/NewItem';

const newItems = [
    { id: 1, name: 'Ahoban', img: newArival1 },
    { id: 2, name: 'Boka Box', img: newArival2 },
    { id: 3, name: 'Ahoban', img: newArival3 },
]

const NewItems = () => {
    return (
        <div className='container'>
            <h2 className='text-info text-center'>New arrivals</h2>
            <div className="row">
                {
                    newItems.map(newItem => <NewItem
                        key={newItem.id}
                        newItem={newItem}
                    ></NewItem>)
                }
            </div>
        </div>
    );
};

export default NewItems;