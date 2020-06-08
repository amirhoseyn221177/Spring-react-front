import '../action'

const initialstate={
    token:null,
    error:null
    
}




const reducer=(state=initialstate,action)=>{

    if(action.type==='errorForAuth'){
        return{
            ...state,
            error:action.resp
        }
    }
    return state

}


export default reducer