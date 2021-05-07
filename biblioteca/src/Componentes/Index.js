import React,{useEffect, useState} from 'react';
import{useSelector, useDispatch} from 'react-redux';
import{obtenerLibro} from '../Actions/libroActions';
import DataTable from 'react-data-table-component';

const columnas = [
    {
        name:'Autor del Libro',
        selector: 'book_author',
        
    },
    {
        name:'Paginas',
        selector: 'book_pages',
        sortable:true
    },
    {
        name:'Ciudad',
        selector: 'book_publication_city'
    },
    {
        name:'Pais',
        selector: 'book_publication_country'
    },
    {
        name:'Año',
        selector: 'book_publication_year'
    },
    {
        name:'Titulo',
        selector: 'book_title'
    },
    {
        name:'Id',
        selector: 'id',
        sortable:true
    }
]



export default function Index () {


    const dispatch = useDispatch();

    useEffect( ()=> {

        const cargarLibro = () => dispatch(obtenerLibro());
        cargarLibro();

    }, []);

    const listarLibro = useSelector(state => state.libros.libros);

    console.log(listarLibro, "linea 20")

    return (
       <div>
            <DataTable
             columns={columnas}
             data={listarLibro}
             title="Libros Registrados"
             pagination
            />
       </div>
    );
}
