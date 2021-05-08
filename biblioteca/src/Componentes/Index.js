import React,{useEffect, useState} from 'react';
import{useSelector, useDispatch} from 'react-redux';
import{getBook} from '../Actions/bookActions';
import DataTable from 'react-data-table-component';

const column = [
    {
        name:'Author of the book',
        selector: 'book_author',
        
    },
    {
        name:'Pages',
        selector: 'book_pages',
        sortable:true
    },
    {
        name:'City',
        selector: 'book_publication_city'
    },
    {
        name:'Country',
        selector: 'book_publication_country'
    },
    {
        name:'Year',
        selector: 'book_publication_year'
    },
    {
        name:'Title',
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

    const listBook = useSelector(state => state.books.books);

    return (
       <div>
            <DataTable
             columns={column}
             data={listBook}
             title="Registered books"
             pagination
            />
       </div>
    );
}
