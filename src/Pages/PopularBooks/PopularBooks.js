import React from 'react';
import popularBook1 from '../../Images/Popular Books/popular1.jpg'
import popularBook2 from '../../Images/Popular Books/popular2.jpg'
import popularBook3 from '../../Images/Popular Books/popular3.jpg'
import PopularBook from '../PopularBook/PopularBook'


const popularBooks = [
    { id: 1, name: 'Keyamot', author: 'Raihan Khairullah', img: popularBook1 },
    { id: 2, name: 'Halal Binodon', author: 'Abu Ismail Kamdar', img: popularBook2 },
    { id: 3, name: 'Sultan Kahini', author: 'Tamim Raihan', img: popularBook3 },
]

const PopularBooks = () => {
    return (
        <div>
            <h2 className='text-info text-center mt-5'>Popular Books</h2>
            <div className="row">
                {
                    popularBooks.map(popularBook => <PopularBook>
                        key={popularBook.id}
                        newItem={popularBook}
                    </PopularBook>)
                }
            </div>
        </div>
    );
};

export default PopularBooks;