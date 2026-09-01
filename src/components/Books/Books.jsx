import { useEffect, useState } from "react";
import Book from "../Book/Book";

 

const Books = () => {
    const [books, setBooks] = useState([0])
    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h2 className="text-7xl">books : {books.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-7">
                {
                books.map(book=> <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;