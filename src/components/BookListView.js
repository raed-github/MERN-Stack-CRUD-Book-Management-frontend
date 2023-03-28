import  React,{useReducer} from "react";
import {useSelector} from "react-redux";
import '../App.css';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import rootReducer from '../reducers/rootReducer'

const BookListView = ()=>{
    const books = useSelector(state=>state.books)
    const[state,dispatch] = useReducer(rootReducer,{books})
    const bookList = state.books.length === 0 ? 'no book found'
                        : state.books.map((book, k) => <BookCard book={book} key={k} />);
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