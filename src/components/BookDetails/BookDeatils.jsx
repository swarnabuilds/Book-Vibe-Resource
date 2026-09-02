import { useLoaderData, useParams } from "react-router";

 

const BookDeatils = ({}) => {
    // provide dynamic id from url using useParams 
        const {bookId} = useParams();
        const data = useLoaderData();
        const id = parseInt(bookId);
        const book = data.find(book => book.bookId === id);
        const {bookId: currentBookId, bookName, image, review, author, totalPages, rating, publisher, yearOfPublishing}= book || {};
        
    return (
        <div>
            <div className="hero bg-base-200 my-12">
                <div className="hero-content flex-col lg:flex-row gap-9 p-5">
                    <img
                    alt={bookName}
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="">
                     <h2 className="font-bold"> Book Id : {currentBookId}</h2> 
                     <h2 className="text-accent font-bold my-2">Author : {author}</h2>  
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="my-4 text-lg">
                        {review}
                    </p>
                    <div className="flex font-bold text-accent text-lg">
                        <p className="mr-7">Rating : {rating}</p>
                        <p>Publisher : {publisher}</p>
                    </div>
                     <div className="flex justify-between my-5 font-bold text-md">
                        <p>Total Pages : {totalPages}</p>
                        <p>Year Of Publishing :  {yearOfPublishing}</p>
                     </div>
                    <button className="btn btn-outline btn-accent px-7 font-semibold text-lg py-3 mr-4">Mark As Read</button>
                    <button className="btn btn-accent px-7 font-semibold text-lg text-white py-3">WishList</button>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default BookDeatils;