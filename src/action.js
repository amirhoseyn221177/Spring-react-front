import axios from 'axios'

export const createProject=(project,history)=>{
    return async dispatch=>{
        try{
            const resp= await axios.post("http://localhost:8080/api/project",project)
            const data=await resp.data
            console.log(data)
        }catch(e){
            dispatch(gettingResponse(e))

        }
    }
  
}

export const gettingResponse=(err)=>{
    return{
        type:'response',
        err:err
    }
}
