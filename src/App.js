import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/layout/header"
import Dashboard from './component/Dashboard'
import AddProject from './component/Project/AddProject'
import {BrowserRouter, Switch, Route }  from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path="/addproject" component={AddProject}/>
      </Switch>
    </div>
  </BrowserRouter>


  );
}

export default App;
