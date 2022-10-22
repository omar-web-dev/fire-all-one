import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth' 


export const AuthContext = createContext()
const auth = getAuth(app)
const UseContext = ({children}) => {

const [user, setUser] = useState() 
const [lording, setLording] = useState(true)
    //sign in by google
    const googleLongIn = provider =>{
        setLording(true)
        return signInWithPopup(auth, provider)
    }

    

    const createUser = (name, photo_url, email, password) => {
        setLording(true)
        createUserWithEmailAndPassword(auth, name, photo_url, email, password)
    }

    // sign in with email and password
    const signInEmailPassword = (email, password) => {
        setLording(true)
        signInWithEmailAndPassword(auth, email, password)
    }


    // sing out a user
    const logOut = () => {
        setLording(true)
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log( currentUser);
            setUser(currentUser)
            setLording(false)
        })
        return ()=> unSubscribe();
    },[])
    // {displayName : 'Omar Farouk'}
    const authInfo = {user, googleLongIn, createUser, signInEmailPassword, logOut, lording}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>      
        </div>
    );
};

export default UseContext;