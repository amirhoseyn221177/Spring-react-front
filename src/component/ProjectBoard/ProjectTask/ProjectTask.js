import React from 'react'
import { NavLink } from 'react-router-dom'



const ProjectTask=(props)=>{

  let prioclass;
  let priostring;
  if(props.priorityString===1){
    prioclass='bg-danger text-light'
    priostring="HIGH"
  }else if(props.priorityString===2){
    prioclass="bg-warning text-light"
    priostring="MEDIUM"
  }else{
    prioclass="bg-info text-light"
    priostring="LOW"
  }
    return(
        <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${prioclass}`}>
          <div>ID: {props.projectSequence}</div>
         Priority: {priostring}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{props.summary}</h5>
          <p className="card-text text-truncate ">
            {props.acceptanceCriteria}
          </p>
          <NavLink to="" className="btn btn-primary">
            View / Update
          </NavLink>

          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    )
    
}

export default ProjectTask