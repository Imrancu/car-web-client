import React from 'react';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='banner-img'>
                <img src={image} alt="banner" className="w-full" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-white text-6xl font-bold'>Affordable <br />
                    Price for Car <br />
                    Servicing</h1>
            </div>
            <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn bg-orange-600 hover:bg-orange-500 mr-5">Discover More</button>
                <button className="btn btn-outline text-white border-2 border-orange-600 hover:bg-transparent hover:border-orange-400">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle border-0 ml-4 hover:bg-orange-600">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle border-0 ml-4 hover:bg-orange-600">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;