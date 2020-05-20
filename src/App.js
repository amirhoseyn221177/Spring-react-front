import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/layout/header"
import Dashboard from './component/Dashboard'
import {BrowserRouter }  from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Dashboard/>
    </div>
  </BrowserRouter>


  );
}

export default App;
