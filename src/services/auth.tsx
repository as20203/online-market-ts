import React,{createContext,useReducer} from 'react';

const token = localStorage.getItem('Token');

const initialState:Object= {
    isAuthenticated:token?true:false
}




const authReducer:any = (state:any,action:any) =>{
    switch (action.type){
        case 'authenticated':
            return {isAuthenticated:action.value}
        case 'notauthenticated':
            return {isAuthenticated:action.value}
        default:
            return state;
    }
}

export const authContext = createContext([initialState,authReducer]);

interface Props{
    children:React.ReactNode
}

const AuthContextProvider:React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    return (
      <authContext.Provider value={[state,dispatch]}>
        {children}
      </authContext.Provider>
    );
};

export default AuthContextProvider;







