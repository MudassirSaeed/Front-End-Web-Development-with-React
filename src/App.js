import React from 'react';  
import { Component} from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/menuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
    </div>
  );
}

export default App;
