import {ADD_BOOK, ADD_BOOK_EXITO, ADD_BOOK_ERROR, START_DOWNLOAD_BOOK, SUCCESS_BOOK_DOWNLOAD, DOWNLOAD_BOOK_ERROR}
 from '../types/Index';
 
const initialState = {
    books:[],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch (action.type) {
        
        case START_DOWNLOAD_BOOK:
        case ADD_BOOK:
            return{
                ...state,
                loading:action.payload
            }
        case ADD_BOOK_EXITO:
            return{
                ...state,
                loading:false,
                books: [...state.books, action.payload]
            }

        case DOWNLOAD_BOOK_ERROR:
        case ADD_BOOK_ERROR:
            return{
                ...state,
                loading:false,
                errror:action.payload
            }

        
        case SUCCESS_BOOK_DOWNLOAD: 
             return{
                ...state,
                loading:false,
                error:null,
                books:action.payload
                
          }
       default:
           return state;
    }
}