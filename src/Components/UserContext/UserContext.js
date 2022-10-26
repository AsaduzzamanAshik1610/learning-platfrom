import React from 'react';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}
const UserContext = ({children}) => {
    const AuthInfo = {createUser};
    return (
        <div>
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default UserContext;