import React from 'react';
import PopularBooks from '../../PopularBooks/PopularBooks';

import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import NewItems from '../NewItems/NewItems';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <NewItems></NewItems>
            <PopularBooks></PopularBooks>

        </>
    );
};

export default Home;