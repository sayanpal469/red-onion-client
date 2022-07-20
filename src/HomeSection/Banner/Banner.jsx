import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bannerArea mt-10'>
            <h1 className='text-center text-5xl font-semibold pt-44'>Best food waiting your belly</h1>
            <div className='text-center mt-10'>
                <input className='px-40 py-2 rounded-3xl text-lg' type="text" />
                <button className='bg-red-500 py-2 rounded-3xl px-5 text-white ml-2 text-lg search'>Search</button>
            </div>
        </div>
    );
};

export default Banner;