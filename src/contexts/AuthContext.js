import React , { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const [auth, setAuth] = useState(null);
    return (
        <AuthContext.Provider value={{auth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;