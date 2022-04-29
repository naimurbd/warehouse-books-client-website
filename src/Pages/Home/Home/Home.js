import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import NewItems from '../NewItems/NewItems';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <NewItems></NewItems>
        </>
    );
};

export default Home;