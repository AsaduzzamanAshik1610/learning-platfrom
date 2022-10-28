import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PrivateRoutes = ({children}) => {
    const user = useContext(AuthContext);
    const location = useLocation()
    if(!user){
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }
    return children;
   
};

export default PrivateRoutes;