import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setBooks]=useState([]);
    useEffect(()=>{
        fetch('bookData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Books</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;