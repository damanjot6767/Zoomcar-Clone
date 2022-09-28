export const loading1=(val)=>{
    return{
        type:"loading",
        loading:val,
    }
}

export const success=(val,token,val1)=>{
    return{
        type:"success",
        loading:val,
        token:token,
        authstatus:val1
    }
}

export const error1=(val,val1)=>{
    return{
        type:"error",
        loading:val,
        error:val1,
    }
}