import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import Backlog from './Backlog'
import {connect} from 'react-redux'
import {gettingTasks} from '../../action'

const ProjectBoard=(props)=>{
    const [id]=useState(props.match.params.id)

    useEffect(()=>{
         props.requestingTasks(id)

  // eslint-disable-next-line  
    },[])

 

    return(
        <div className="container">
        <NavLink to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </NavLink>
        <br />
        <hr />
        <Backlog/>
      </div>
    );
}

var maptoprops=dispatch=>{
  return{
      requestingTasks:(id)=>dispatch(gettingTasks(id))
  }
}



export default connect(null,maptoprops)(withRouter(ProjectBoard));