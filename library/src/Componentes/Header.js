import React from 'react';

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>International Library</h1>
            </div>
            
            <a href="/books/nuevo" className="btn btn-danger nuevo-post d-block d-md-inline-block mr-2">
                 Add new record
            </a>

            <a href="/" className="btn btn-dark nuevo-post d-block d-md-inline-block">
                 Go to start
            </a>
        </nav>
    );
}

export default Header;