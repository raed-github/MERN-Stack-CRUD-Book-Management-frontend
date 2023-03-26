import { useState,useEffect } from "react";

import { Link,useParams } from "react-router-dom";
import BookItem from './BookItem';
import '../App.css';

const BookDetail = () => {
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

const [book, setBook] = useState({});

const id = useParams();
useEffect(()=>{
  const newBookList = books.map((book) => {
      if (book.id === id) {
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
      setBook(book);
  return book;
  }
);   
setBooks(newBookList);
},[])
    const onDeleteClick = (id)=>{
        console.log('deleting book');
    }

    return (
        <div className='BookDetail'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 m-auto'>
                <br /> <br />
                <Link to='/' className='btn btn-outline-warning float-left'>
                  Show Books
                </Link>
              </div>
              <br />
              <div className='col-md-8 m-auto'>
                <h1 className='display-4 text-center'>Book's Record</h1>
                <p className='lead text-center'>View Book's Info</p>
                <hr /> <br />
              </div>
              <div className='col-md-10 m-auto'>
                <BookItem book={book} />
              </div>
              <div className='col-md-6 m-auto'>
                <button
                  type='button'
                  className='btn btn-outline-danger btn-lg btn-block'
                  onClick={() => {
                    onDeleteClick(book.id);
                  }}
                >
                  Delete Book
                </button>
              </div>
              <div className='col-md-6 m-auto'>
                <Link
                  to={`/edit-book/${book.id}`}
                  className='btn btn-outline-info btn-lg btn-block'
                >
                  Edit Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
}
export default BookDetail;
