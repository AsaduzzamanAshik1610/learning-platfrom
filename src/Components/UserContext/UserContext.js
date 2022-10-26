import React from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user] = useState({});
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const AuthInfo = {user, createUser, signIn};
    return (
        <div>
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default UserContext;