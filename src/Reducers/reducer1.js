import '../action'
const initialreducer={
    error:false
}


const reducer=(state=initialreducer,action)=>{
    if(action.type==="response"){
        
        return{
            ...state,
            error:action.err
        }

    }
    return reducer
}

export default reducer

