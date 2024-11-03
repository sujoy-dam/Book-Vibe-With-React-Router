import React from 'react';
import banner from '../../../public/Image/The Great Gatsby.jpg'

const Banner = () => {
    return (
        <div className="bg-base-200 py-20 px-28 rounded-xl">
            <div className="flex flex-col lg:items-center lg:justify-between lg:flex-row-reverse">
                <img
                    src={banner}
                    className="max-w-sm max-h-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold max-w-lg leading-snug">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-lg text-white bg-green-500 mt-8">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;