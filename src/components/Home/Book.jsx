import { FaRegStar } from "react-icons/fa6";
import React from 'react';

const Book = ({book}) => {
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book;
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure className="px-10 py-10 mb-5 bg-gray-200 rounded-xl">
                <img
                    src={image}
                    className="rounded-xl w-full h-72 object-fill" />
            </figure>
            <div className="flex flex-col space-y-4 flex-grow">
                <p className='flex flex-wrap'>{tags.map((tag,index)=><span className='text-green-500 mr-2 mt-3 px-2 py-2 bg-gray-200 rounded-xl font-medium' key={index}>{tag}</span>)}</p>
                <h2 className="card-title">{bookName}</h2>
                <p className='font-medium'>By : {author}</p>
                <hr />
                <div className="flex justify-between items-center">
                    <p className='font-medium'>{category}</p>
                    <p className='font-medium flex gap-2 items-center'>{rating}<FaRegStar /></p>
                </div>
            </div>
        </div>
    );
};

export default Book;