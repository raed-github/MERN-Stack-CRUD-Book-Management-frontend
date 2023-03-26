import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import BookListView from './components/BookListView';
import BookDetail from './components/BookDetail';
import UpdateBook from './components/UpdateBook';

const App = () => {
    return (
    <Router>
        <div>
            <Routes>
                <Route exact path='/' element={<BookListView />} />
                <Route path='/create-book' element={<CreateBook />} />
                <Route path='/edit-book/:id' element={<UpdateBook />} />
                <Route path='/show-book/:id' element={<BookDetail />} />
            </Routes>
        </div>
    </Router>
    );
};

export default App;