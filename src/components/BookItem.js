import React from 'react';
import '../App.css';

const BookItem = (props) =>{
    const book = props.book;
    return(
        <div>
            <table className='table table-hover table-dark'>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Title</td>
                        <td>{book.title}</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>Author</td>
                        <td>{book.author}</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>ISBN</td>
                        <td>{book.isbn}</td>
                    </tr>
                    <tr>
                        <th scope='row'>4</th>
                        <td>Publisher</td>
                        <td>{book.publisher}</td>
                    </tr>
                    <tr>
                        <th scope='row'>5</th>
                        <td>Published Date</td>
                        <td>{book.published_date}</td>
                    </tr>
                    <tr>
                        <th scope='row'>6</th>
                        <td>Description</td>
                        <td>{book.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default BookItem;