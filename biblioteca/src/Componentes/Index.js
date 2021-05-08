import React,{useEffect, useState} from 'react';
import{useSelector, useDispatch} from 'react-redux';
import{getBook} from '../Actions/libroActions';
import DataTable from 'react-data-table-component';

const column = [
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

        const loadBook = () => dispatch(getBook());
        loadBook();

    }, []);

    const listBook = useSelector(state => state.libros.libros);

    return (
       <div>
            <DataTable
             columns={column}
             data={listBook}
             title="Libros Registrados"
             pagination
            />
       </div>
    );
}
