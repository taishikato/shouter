import React , { useState, createContext} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const [auth, setAuth] = useState(null);
    const login = (user) => {
        setAuth(user)
    }
    const logout = () => {
        setAuth(null)
    }
    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;