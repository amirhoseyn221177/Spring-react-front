import '../action'

const initialreducer={
    error:null
}


const reducer=(state=initialreducer,action)=>{
    if(action.type==="response"){
        return{
            ...state,
            error:action.error
        }
    }

    return reducer
}

export default reducer

