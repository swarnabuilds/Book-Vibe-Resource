import { Link } from "react-router";

 

 

const Book = ({ book }) => {
    const {bookId,bookName, author,image,  rating, category, tags} = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                    src={image}
                    alt="Shoes" />
                </figure>
                    <div className="card-body">
                       <div className="flex gap-5 justify-center">
                        {tags?.map((tag, index) => (
                            <button key={index} className="btn btn-md  btn-soft btn-success">
                                {tag}
                            </button>
                        ))}
                       </div>
                        <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">Identify</div>
                        </h2>
                        <p>By : {author}</p>
                        <div className="divider"></div>
                        <div className="card-actions justify-between">
                        <div className="badge badge-outline border-0">{category}</div>
                        <div className="badge badge-outline border-0 ml-4">{rating}
                            <div className="rating rating-lg rating-half">
                                <input type="radio" name="rating-11" className="rating-hidden" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="0.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="2 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="2.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="3 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="3.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="4 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="4.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="5 star" />
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        </Link>
    );
};

export default Book;