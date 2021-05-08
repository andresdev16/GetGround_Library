import {ADD_BOOK, ADD_BOOK_EXITO, ADD_BOOK_ERROR, START_DOWNLOAD_BOOK, SUCCESS_BOOK_DOWNLOAD,DOWNLOAD_BOOK_ERROR}
 from '../types/Index';
 import clientAxios from '../config/axios';

 export function createBook (book){
     return async (dispatch) =>{
         dispatch(addBook());
         console.log(book)
         try{
            await clientAxios.post('/books', book);
             dispatch(addBookSuccess(book));

         }catch (error){
             console.log(error);
             dispatch(addBookError(true));
         }
     }
 }


 const addBook = () => ({
     type: ADD_BOOK
 })

 const addBookSuccess = book => ({
     type: ADD_BOOK_EXITO,
     payload: book
 })

 const addBookError =  status => ({
     type: ADD_BOOK_ERROR,
     payload:status
 })

 export function getBook (){
     return async (dispatch) => {
         dispatch(downloadBook ());

         try{

             const responseThu = await clientAxios.post('/books');
             const response = responseThu.data.books;

             dispatch(descargabookExitosa(response))
            
         }catch(error){
             console.log(error);
             dispatch(descargabookError())
         }
     }
 }

 const downloadBook = () => ({
     type: START_DOWNLOAD_BOOK,
     payload:true
 })

 const descargabookExitosa = books => ({
     type: SUCCESS_BOOK_DOWNLOAD, 
     payload: books
 })

 const descargabookError = () => ({
     type: DOWNLOAD_BOOK_ERROR,
     payload:true
 })