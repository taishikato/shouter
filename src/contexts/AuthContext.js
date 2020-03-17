import React , { useState, createContext} from 'react';
import firebase from '../plugins/firebase';

export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (user) => { 
        setAuth(user)
        if(user.displayName === null) {
            try {   
                const data = await firebase
                    .firestore()
                    .collection('users')
                    .where('email', '==', user.email)
                    .get();
                const userData = data.docs[0].data()
                setAuth({
                    ...user,
                    displayName: userData.userName
                })
            } catch(err) {console.log(err)}
        }
        setLoading(false);
    }
    const logout = () => {
        setAuth(null)
    }
    return (
        <AuthContext.Provider value={{auth, login, logout, loading}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;