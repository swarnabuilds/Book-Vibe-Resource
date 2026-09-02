import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreReadList } from '../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData()
    const [readList, setReadList] = useState([]);
    useEffect(() => {
        const storedReadList = getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        // worst way
        console.log(storedReadList, storedReadListInt, allBooks);
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        
        setReadList(readBookList);
    }, []);
    return (
        <div className='my-6'>
            <div className="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Read List" />
            <div className="tab-content bg-base-100 border-base-300 p-6">{readList.length}

                {
                    readList.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>

            <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish List" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6">My Wish List</div>
            </div>
        </div>
    );
};

export default ListedBooks;