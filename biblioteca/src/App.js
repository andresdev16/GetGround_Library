import React, {Fragment} from 'react';
import Header from './Componentes/Header';
import Libro from './Componentes/Libro';
import Index from './Componentes/Index';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import{Provider } from 'react-redux';
import Store from './Store';


function App() {
  return (
    <Router>
      <Provider store={Store}>
      <Header/>

      <div className="container">
        <Switch>
          <Route exact path="/libros/nuevo" component={Libro}/>
          <Route exact path="/" component={Index}/>
        </Switch>
      </div>
    </Provider>
    </Router>
      
  );
}

export default App;
