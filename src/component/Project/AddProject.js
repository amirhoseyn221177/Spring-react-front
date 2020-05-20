import React, { useState } from 'react'



const AddProject=(props)=>{
    const[projectName,setProjectName]=useState("");
    const [projectIdentifier,setProjectIdentifier]=useState("");
    const [description,setDescription]=useState("");
    const [start,setStart]=useState("");
    const [end,setEnd]=useState("");

    var onChange=(e,settype)=>{
        let content=e.target.value
        settype(content)
        
    }

    var onSubmit=(e)=>{
        e.preventDefault();
        let obj={
            projectName: projectName,
            projectIdentifier: projectIdentifier,
            description: description,
            start_date: start,
            end_date: end
        }
        console.log(obj)
    }

    return(
        <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                <form >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Project Name"
                      name="projectName"
                      value={projectName}
                      onChange={(e)=>onChange(e,setProjectName)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={projectIdentifier}
                      onChange={(e)=>onChange(e,setProjectIdentifier)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description"
                      name="description"
                      value={description}
                      onChange={(e)=>onChange(e,setDescription)}
                    />
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="start_date"
                      value={start}
                      onChange={(e)=>onChange(e,setStart)}
                    />
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="end_date"
                      value={end}
                      onChange={(e)=>onChange(e,setEnd)}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={onSubmit}
                    className="btn btn-primary btn-block mt-4">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
}


export default AddProject;