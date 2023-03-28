const initialState = {
  books: []
}
const rootReducer = (state = initialState, action) => {
  switch (action.type ){
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload]
        }
    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload.id ? action.payload : book
          )
        }        
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload.id)
      }      
    case "FIND_BOOK":
      return state.books.filter(book => book.id !== action.payload.id)
    default:
        return state;
  }
};

export default rootReducer;
