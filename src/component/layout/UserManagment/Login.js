import React, { useState } from 'react'
import classes from 'classnames'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { Loging } from '../../../action'


const Login=(props)=>{
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [pressed,setPressed]=useState(false)



  var changingState=(e,settype)=>{
    let content=e.target.value
    settype(content)
  }

  var submiting=()=>{
    setPressed(true)
    if(username===""||password==="") return;

  }
  return(
        <div style={{position:'relative', top:'200px'}} className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form action="dashboard.html">
                <div className="form-group">
                  <input
                    type="email"
                    className={classes("form-control form-control-lg",{
                    "is-invalid":username===""&&pressed
                    })}
                    placeholder="Email Address"
                    name="email"
                    onClick={(e)=>changingState(e,setUsername)}

                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classes("form-control form-control-lg",{
                      "is-invalid":password===""&&pressed
                      })}              
                    placeholder="Password"
                    name="password"
                    onClick={(e)=>changingState(e,setPassword)}
                  />
                </div>
                <input type="button" className="btn btn-info btn-block mt-4" defaultValue="Submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

const maptoprops=dispatch=>{
  return{
    logingIn:(obj)=>dispatch(Loging(obj))
  }
}

export default connect() (withRouter(Login));