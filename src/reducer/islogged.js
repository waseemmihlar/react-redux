const isLogged=(state=false,action)=>{

    switch(action.type){
        case 'SIGN_IN':
            return !state
            break;
        default:
            return state    
    }

}


export default isLogged;






