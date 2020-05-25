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