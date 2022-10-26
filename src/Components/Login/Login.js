import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)  
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset()
            navigate('/courses')
        })
        .catch(error=>{
            console.error(error);
        })      
    }
    return (
<div className='w-50 mx-auto bg-info text-white rounded'>
<form onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <h4 className='text-center'>Your Email</h4>
    <input type="email" name='email' className="form-control w-50 mx-auto" placeholder='your email' id="exampleInputEmail1" aria-describedby="emailHelp" required />
  </div>
  <div className="mb-3">
    <h4 className='text-center'>Your Password</h4>
    <input type="password" name='password' className="form-control w-50 mx-auto" placeholder='your password' id="exampleInputPassword1" required />
  </div>
  <div className='text-center'>
   <button type="submit" className="btn btn-primary  mb-3">Login</button>
  </div>
</form>
</div>
);
};

export default Login;