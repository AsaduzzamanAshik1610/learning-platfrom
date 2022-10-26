import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2> this is home:{user.email} </h2>
        </div>
    );
};

export default Home;