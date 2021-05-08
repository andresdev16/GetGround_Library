import React from 'react';

const Data = ({books}) =>{
    const {book_author,book_pages,book_publication_city,book_publication_country,book_publication_year, book_title, id} = books
    return(
        <tr>
            <td>{book_author}</td>
            <td>{book_pages}</td>
            <td>{book_publication_city}</td>
            <td>{book_publication_country}</td>
            <td>{book_publication_year}</td>
            <td>{book_title}</td>
            <td>{id}</td>
        </tr>
    );
}

export default Data;