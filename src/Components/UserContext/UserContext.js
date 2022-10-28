import React from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const providerLogin = (provider)=>{
        return signInWithPopup(auth, provider); 
      }
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change', currentUser);
            setUser(currentUser)
            setLoader(false)
        });
        return ()=>{
            unsubscribe();
        }
    }, [])
    
    const AuthInfo = {user,loader, providerLogin, signInWithGoogle, createUser, signIn, logOut};
    return (
        <div>
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default UserContext;