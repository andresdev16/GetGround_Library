import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createBook} from '../Actions/libroActions';


const Libro = () =>{

    const[id, saveId] = useState('');
    const[book_author, savebook_author] = useState('');
    const[book_publication_country, savebook_publication_country] = useState('');
    const[book_publication_city, savebook_publication_city] = useState('');
    const[book_publication_year, savebook_publication_year] = useState('');
    const[book_pages, savebook_pages] = useState('');
    const[book_title, savebook_title] = useState('');

    const dispatch = useDispatch();

    const cargando = useSelector(state => state.libros.loading);

    const addBook = libro => dispatch(createBook(libro));

    const newBook = e =>{
        e.preventDefault();

        addBook({
            book_author,
            book_publication_country,
            book_publication_city,
            book_publication_year,
            book_pages,
            book_title,
            id
        });
    }

    return(
       <div className="row justify-content-center mt-4">
           <div className="col-md-8">
               <div className="card">
                   <div className="card-body">
                       <h2 className="text-center mb-4 font-weight-bold">
                           Agregar un Libro
                       </h2>
                   </div>
                   
                   <form onSubmit={newBook}>
                       <div className="form-group ml-3 mr-3">
                           <label>Autor</label>
                           <input
                               type="text"
                               className="form-control"
                               name="book_author" 
                               value={book_author}
                               onChange={e => savebook_author(e.target.value)}
                               required   
                           />
                       </div>

                       <div className="form-group ml-3 mr-3">
                           <label>Ciudad</label>
                           <input
                               type="text"
                               className="form-control"
                               name="book_publication_city" 
                               value={book_publication_city}
                               onChange={e => savebook_publication_city(e.target.value)}
                               required     
                           />
                       </div>

                       <div className="form-group ml-3 mr-3">
                           <label>Pais</label>
                           <input
                               type="text"
                               className="form-control"
                               name="book_publication_country"
                               value={book_publication_country}
                               onChange={e => savebook_publication_country(e.target.value)}
                               required       
                           />
                       </div>

                       <div className="form-group ml-3 mr-3">
                           <label>Año</label>
                           <input
                               type="number"
                               className="form-control"
                               name="book_publication_year" 
                               value={book_publication_year}
                               onChange={e => savebook_publication_year(Number(e.target.value))}
                               required       
                           />
                       </div>

                       <div className="form-group ml-3 mr-3">
                           <label>Paginas</label>
                           <input
                               type="number"
                               className="form-control"
                               name="book_pagess"
                               value={book_pages}
                               onChange={e => savebook_pages(Number(e.target.value))}
                               required       
                           />
                       </div>

                       
                       <div className="form-group ml-3 mr-3">
                           <label>Titulo</label>
                           <input
                               type="text"
                               className="form-control"
                               name="book_title"
                               value={book_title}
                               onChange={e => savebook_title(e.target.value)}
                               required        
                           />
                       </div>

                       <div className="form-group ml-3 mr-3">
                           <label>Id</label>
                           <input
                               type="number"
                               className="form-control"
                               name="id"
                               value={id}
                               onChange={e => saveId(Number(e.target.value))}
                               required       
                           />
                       </div>

                       <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                           Agregar
                       </button>

                   </form>
               </div>
           </div>
       </div>
        
    );
}

export default Libro;