import React from 'react';


const PopularBook = ({ popularBook }) => {
    const { name, img, author } = popularBook;
    return (
        <div >
            <h4>{name}</h4>
        </div>
    );
};

export default PopularBook;