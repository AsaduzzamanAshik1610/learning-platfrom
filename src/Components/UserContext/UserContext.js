import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const providerLogin = (provider)=>{
        return signInWithPopup(auth, provider); 
      }
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change', currentUser);
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
    }, [])
    
    const AuthInfo = {user, providerLogin, createUser, signIn, logOut};
    return (
        <div>
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default UserContext;