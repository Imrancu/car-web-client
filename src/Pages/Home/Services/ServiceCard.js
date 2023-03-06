import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs'

const ServiceCard = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5 border">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <div className='flex items-center text-orange-600 font-semibold'>
                    <p className=' text-2xl'>Price: ${price}</p>
                    <BsArrowRightShort className='text-4xl' />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;