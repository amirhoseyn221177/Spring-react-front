import axios from 'axios'

export const createProject=(project,history)=>{
    return async dispatch=>{
        try{
            const resp= await axios.post("/api/project",project)
            const data=await resp.data
            console.log(data)
        }catch(e){
            dispatch(gettingResponse())

        }
    }
  
}

export const gettingResponse=()=>{
    return{
        type:'response',
    }
}

// export const gettingAllProjects=()=>{
//     return async dispatch=>{
//         try {
//             const resp = await axios.get('http://localhost:8080/api/project/all')
//             const data = await resp.data
//             console.log(data)
//             dispatch(allProjectsRecieved(data))
//         } catch (e) {
            
//         }
//     }
// }

export const allProjectsRecieved=(projects)=>{
    return{
        type:"projects",
        projects:projects
    }
}

export const errorProjectTask=()=>{
    return{
        type:'error'
    }
}


export const addingProjectTask=(task,backlog_id)=>{
    return async dispatch=>{
        try{
            console.log(task)
            const resp= await axios.post(`/api/backlog/${backlog_id}`,task)
            const data = await resp.data
            console.log(data)
        }catch(e){
            console.log(e)
            dispatch(errorProjectTask())
        }
    }
 
}

export const taskToReducer=(tasks)=>{
    return{
        type:'tasks',
        tasks:tasks
    }
}

export const gettingTasks=(id)=>{
    return async dispatch=>{
        try{
            const resp = await axios.get(`/api/backlog/${id}`)
            const data = await resp.data
            dispatch(taskToReducer(data))
        }catch(e){
            console.log(e)
            dispatch(errorProjectTask())
        }
    }
}

