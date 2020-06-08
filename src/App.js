import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route }  from 'react-router-dom'
import Landing from './component/layout/Landing';
import Register from './component/layout/UserManagment/Register';
import Login from './component/layout/UserManagment/Login';
import All from './AllExceptMain'


function App(props) {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
    </Switch>

    <div className="App">
      <All/>
    </div>
  </BrowserRouter>


  );
}

export default App;
