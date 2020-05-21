import axios from 'axios'

export const createProject=(project,history)=>{
    return async dispatch=>{
        try{
            await axios.post("http://localhost:8080/api/project",project)

        }catch(e){
            console.log(e)
            dispatch(gettingResponse(e.response.data))

        }
    }
  
}

export const gettingResponse=(err)=>{
    return{
        type:'response',
        err:err
    }
}
