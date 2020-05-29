import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/layout/header"
import Dashboard from './component/Dashboard'
import AddProject from './component/Project/AddProject'
import Update from './component/Project/UpdateProject'
import {BrowserRouter, Switch, Route }  from 'react-router-dom'
import ProjectBoard from './component/ProjectBoard/ProjectBoard'
import addProjectTask from './component/ProjectBoard/ProjectTask/addProjectTask';
import UpdateProjectTask from './component/ProjectBoard/ProjectTask/UpdateProjectTask';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path="/addproject" component={AddProject}/>
        <Route exact path="/project/:id" component={Update}/>
        <Route exact path='/projectboard/:id' component={ProjectBoard}/>
        <Route exact path='/addprojecttask/:id' component={addProjectTask}/>
        <Route exact path='/updateprojecttask/:id/:id2' component={UpdateProjectTask}/>
      </Switch>
    </div>
  </BrowserRouter>


  );
}

export default App;
