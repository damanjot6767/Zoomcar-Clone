function reducer(state,action){
    switch(action.type){
        case "loading":
        return {...state,loading:action.loading}

        case "success":
        return {...state,loading:action.loading,token:action.token,authstatus:action.authstatus}

        case "error":
        return {...state,loading:action.loading,error:action.error}

        case "status":
        return {...state,authstatus:action.authstatus}
       
        case "data":
        return {...state,data:action.data}

        default:
        return state
    }
}
export default reducer