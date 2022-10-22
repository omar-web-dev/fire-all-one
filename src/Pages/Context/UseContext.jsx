import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth' 


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

    const emailVerification =() => {
        setLording(true)
        return sendEmailVerification(auth.currentUser)
    } 
    
    const userProfileUpdate = (profile) => {
        console.log(profile);
        setLording(true)
        return (auth.currentUser, profile)
    }

    const createUser = ( email, password) => {
        setLording(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    // sign in with email and password
    const signInEmailPassword = (email, password) => {
        setLording(true)
        return signInWithEmailAndPassword(auth, email, password)
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
    const authInfo = {user, googleLongIn, createUser, signInEmailPassword, logOut, lording, userProfileUpdate, emailVerification}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>      
        </div>
    );
};

export default UseContext;