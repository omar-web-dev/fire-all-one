import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth' 


export const AuthContext = createContext()
const auth = getAuth(app)
const UseContext = ({children}) => {

const [user, setUser] = useState() 
    //sign in by google
    const googleLongIn = provider =>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => signInWithEmailAndPassword(auth, email, password)


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log( currentUser);
            setUser(currentUser)
        })
        return unSubscribe();
    },[])
    // {displayName : 'Omar Farouk'}
    const authInfo = {user, googleLongIn, createUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>      
        </div>
    );
};

export default UseContext;