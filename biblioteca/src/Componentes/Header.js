import React from 'react';

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>Biblioteca Internacional</h1>
            </div>
            
            <a href="/libros/nuevo" className="btn btn-danger nuevo-post d-block d-md-inline-block mr-2">
                Agregar nuevo registro
            </a>

            <a href="/" className="btn btn-dark nuevo-post d-block d-md-inline-block">
                Ir al Inicio
            </a>
        </nav>
    );
}

export default Header;