import React , { useState, createContext} from 'react';
import firebase from '../plugins/firebase';

export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const [auth, setAuth] = useState(null);
    const login = async (user) => { 
        setAuth(user)
        if(user.displayName === null) {
            try {   
                const data = await firebase.firestore().collection('users').get();
                data.forEach(doc =>{ 
                    if(user.email === doc.data().email) {   
                        setAuth({
                            ...user,
                            displayName: doc.data().userName
                        })
                    }
                });
            
            } catch(err) {
                console.log(err)
            }
        }
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