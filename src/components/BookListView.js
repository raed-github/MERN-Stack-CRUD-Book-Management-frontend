import { useState } from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const BookListView = ()=>{
    const initialState = [
        {
            id: '1',
            title: 'title',
            isbn: 'isbn',
            author: 'author',
            description: 'descrition',
            published_date: 'published_date',
            publisher: 'publisher'
        },
        {
            id: '2',
            title: 'title',
            isbn: 'isbn',
            author: 'author',
            description: 'descrition',
            published_date: 'published_date',
            publisher: 'publisher'
        },
        {
            id: '3',
            title: 'title',
            isbn: 'isbn',
            author: 'author',
            description: 'descrition',
            published_date: 'published_date',
            publisher: 'publisher'
        },
        {
            id: '4',
            title: 'title',
            isbn: 'isbn',
            author: 'author',
            description: 'descrition',
            published_date: 'published_date',
            publisher: 'publisher'
        }
    ];
    const [books,setBooks] = useState(initialState);
    const bookList = books.length === 0 ? 'no book found'
                        : books.map((book, k) => <BookCard book={book} key={k} />);
    return(
        <div className='ShowBookList'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <br />
                        <h2 className='display-4 text-center'>Books List View</h2>
                    </div>

                    <div className='col-md-11'>
                        <Link to='/create-book' className='btn btn-outline-warning float-right'>
                        + Add New Book
                        </Link>
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>
                <div className='list'>{bookList}</div>
            </div>
        </div>
    );
}
export default BookListView;