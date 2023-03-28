import { useState,useReducer } from "react";
import { useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import rootReducer from '../reducers/rootReducer'
import '../App.css';

const UpdateBook = (props)=>{
    const books = useSelector(state=>state.books)
    const params = useParams()
    const [state,dispatch] = useReducer(rootReducer,{books})
    const loadBook = state.books.find(obj => {
        return obj.id === params.id;
    });    
    const [book, setBook] = useState(loadBook)

    const onChange = (e=>{
        setBook({...book, [e.target.name]:[e.target.value]
        });
    });

    const onSubmit = (e)=>{
            e.preventDefault();
            const updatedBook = {
                id: book.id,
                title: book.title,
                isbn: book.isbn,
                author: book.author,
                description: book.description,
                published_date: book.published_date,
                publisher: book.publisher
            };   
        dispatch({type:"UPDATE_BOOK",payload:updatedBook})
    }

    return (
        <div className='UpdateBookInfo'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show BooK List
                        </Link>
                    </div>
                <div className='col-md-8 m-auto'>
                    <h1 className='display-4 text-center'>Edit Book</h1>
                    <p className='lead text-center'>Update Book's Info</p>
                </div>
                </div>
    
                <div className='col-md-8 m-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>Title</label>
                            <input
                            type='text'
                            placeholder='Title of the Book'
                            name='title'
                            className='form-control'
                            value={book.title}
                            onChange={onChange}
                            />
                        </div>
                        <br />
            
                        <div className='form-group'>
                            <label htmlFor='isbn'>ISBN</label>
                            <input
                            type='text'
                            placeholder='ISBN'
                            name='isbn'
                            className='form-control'
                            value={book.isbn}
                            onChange={onChange}
                            />
                        </div>
                        <br />
            
                        <div className='form-group'>
                            <label htmlFor='author'>Author</label>
                            <input
                            type='text'
                            placeholder='Author'
                            name='author'
                            className='form-control'
                            value={book.author}
                            onChange={onChange}
                            />
                        </div>
                        <br />
            
                        <div className='form-group'>
                            <label htmlFor='description'>Description</label>
                            <textarea
                            type='text'
                            placeholder='Description of the Book'
                            name='description'
                            className='form-control'
                            value={book.description}
                            onChange={onChange}
                            />
                        </div>
                        <br />
            
                        <div className='form-group'>
                            <label htmlFor='published_date'>Published Date</label>
                            <input
                            type='text'
                            placeholder='Published Date'
                            name='published_date'
                            className='form-control'
                            value={book.published_date}
                            onChange={onChange}
                            />
                        </div>
                        <br />
            
                        <div className='form-group'>
                            <label htmlFor='publisher'>Publisher</label>
                            <input
                            type='text'
                            placeholder='Publisher of the Book'
                            name='publisher'
                            className='form-control'
                            value={book.publisher}
                            onChange={onChange}
                            />
                        </div>
                        <br />
            
                        <button type='submit' className='btn btn-outline-info btn-lg btn-block'>
                            Update Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
        );
}   
export default UpdateBook;

