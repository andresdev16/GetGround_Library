import {AGREGAR_LIBRO, AGREGAR_LIBRO_EXITO, AGREGAR_LIBRO_ERROR, COMENZAR_DESCARGA_LIBRO, DESCARGA_LIBRO_EXITO,DESCARGAR_LIBRO_ERROR}
 from '../types/Index';
 import clienteAxios from '../config/axios';

 export function crearLibro (libro){
     return async (dispatch) =>{
         dispatch(agregarLibro());
         console.log(libro)
         try{
            await clienteAxios.post('/books', libro);
             dispatch(agregarLibroExito(libro));

         }catch (error){
             console.log(error);
             dispatch(agregarLibroError(true));
         }
     }
 }


 const agregarLibro = () => ({
     type: AGREGAR_LIBRO
 })

 const agregarLibroExito = libro => ({
     type: AGREGAR_LIBRO_EXITO,
     payload: libro
 })

 const agregarLibroError =  estado => ({
     type: AGREGAR_LIBRO_ERROR,
     payload:estado
 })

 export function obtenerLibro (){
     return async (dispatch) => {
         dispatch(descargarLibro ());

         try{

             const respuesta = await clienteAxios.post('/books');
             const response = respuesta.data.books;

             dispatch(descargaLibroExitosa(response))
             console.log(dispatch, "linea 45")
            
         }catch(error){
             console.log(error);
             dispatch(descargaLibroError())
         }
     }
 }

 const descargarLibro = () => ({
     type: COMENZAR_DESCARGA_LIBRO,
     payload:true
 })

 const descargaLibroExitosa = libros => ({
     type: DESCARGA_LIBRO_EXITO, 
     payload: libros
 })

 const descargaLibroError = () => ({
     type: DESCARGAR_LIBRO_ERROR,
     payload:true
 })