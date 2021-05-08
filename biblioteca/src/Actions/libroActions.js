import {ADD_BOOK, ADD_BOOK_EXITO, ADD_BOOK_ERROR, START_DOWNLOAD_BOOK, SUCCESS_BOOK_DOWNLOAD,DOWNLOAD_BOOK_ERROR}
 from '../types/Index';
 import clientAxios from '../config/axios';

 export function createBook (libro){
     return async (dispatch) =>{
         dispatch(addBook());
         console.log(libro)
         try{
            await clientAxios.post('/books', libro);
             dispatch(addBookSuccess(libro));

         }catch (error){
             console.log(error);
             dispatch(addBookError(true));
         }
     }
 }


 const addBook = () => ({
     type: ADD_BOOK
 })

 const addBookSuccess = libro => ({
     type: ADD_BOOK_EXITO,
     payload: libro
 })

 const addBookError =  estado => ({
     type: ADD_BOOK_ERROR,
     payload:estado
 })

 export function getBook (){
     return async (dispatch) => {
         dispatch(downloadBook ());

         try{

             const responseThu = await clientAxios.post('/books');
             const response = responseThu.data.books;

             dispatch(descargaLibroExitosa(response))
            
         }catch(error){
             console.log(error);
             dispatch(descargaLibroError())
         }
     }
 }

 const downloadBook = () => ({
     type: START_DOWNLOAD_BOOK,
     payload:true
 })

 const descargaLibroExitosa = libros => ({
     type: SUCCESS_BOOK_DOWNLOAD, 
     payload: libros
 })

 const descargaLibroError = () => ({
     type: DOWNLOAD_BOOK_ERROR,
     payload:true
 })