import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright @ {year} All Rights Reserved. Design by Naimur Rahaman.</small></p>
        </footer>
    );
};

export default Footer;