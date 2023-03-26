import { useState } from "react";
import { useParams,Link } from "react-router-dom";
import '../App.css';

const UpdateBook = (props)=>{
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
        
    const {id} = useParams();

    const findArrayElementById = (array,id)=>{
        return array.find((element) => {
            return element.id === id;
        });
    };

    const bookToUpdate = findArrayElementById(books,id);

    const [book, setBook] = useState(bookToUpdate);
    
    const onChange = (e=>{
        setBook({...book, [e.target.name]:[e.target.value]
        });
    });

    const onSubmit = (e)=>{
            e.preventDefault();
            const newBookList = books.map((b) => {
                if (b.id === id) {
                    const updatedBook = {
                        id: book.id,
                        title: book.title,
                        isbn: book.isbn,
                        author: book.author,
                        description: book.description,
                        published_date: book.published_date,
                        publisher: book.publisher
                    };
                    return updatedBook;
                }
            return b;
            }
        );   
        setBooks(newBookList);
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
