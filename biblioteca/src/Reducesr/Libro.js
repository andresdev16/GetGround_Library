import {AGREGAR_LIBRO, AGREGAR_LIBRO_EXITO, AGREGAR_LIBRO_ERROR, COMENZAR_DESCARGA_LIBRO, DESCARGA_LIBRO_EXITO, DESCARGAR_LIBRO_ERROR}
 from '../types/Index';
 
const initialState = {
    libros:[],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch (action.type) {
        
        case COMENZAR_DESCARGA_LIBRO:
        case AGREGAR_LIBRO:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_LIBRO_EXITO:
            return{
                ...state,
                loading:false,
                libros: [...state.libros, action.payload]
            }

        case DESCARGAR_LIBRO_ERROR:
        case AGREGAR_LIBRO_ERROR:
            return{
                ...state,
                loading:false,
                errror:action.payload
            }

        
        case DESCARGA_LIBRO_EXITO: 
             return{
                ...state,
                loading:false,
                error:null,
                libros:action.payload
                
          }
       default:
           return state;
    }
}