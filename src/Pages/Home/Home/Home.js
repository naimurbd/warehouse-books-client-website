import React from 'react';
import Activities from '../../Activities/Activities';
import Servicer from '../../Servicer/Servicer';

import Banner from '../Banner/Banner';
import Items from '../Items/Items';


const Home = () => {
    return (
        <>
            <h1 className='text-center m-3 text-secondary'> Welcome TO WareHouse Books Corner</h1>
            <Banner></Banner>
            <Items></Items>
            <Activities></Activities>
            <Servicer></Servicer>






        </>
    );
};

export default Home;