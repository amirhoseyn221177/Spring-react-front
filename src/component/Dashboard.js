import React from 'react'
import Item from './Item'



const Dashboard=(props)=>{
    
    return(
        <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
             
              <br />
              <hr />
              <Item/>
            </div>
          </div>
        </div>
      </div>
    );
    
}


export default Dashboard;