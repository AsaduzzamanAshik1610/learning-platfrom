import React from 'react';

const submitHandle = event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photourl,email, password);
}
const Register = () => {
    return (  
 <div className='w-50 mx-auto bg-info p-10 text-white rounded'>
  <form onSubmit={submitHandle}>
  <div className="mb-3 ">
    {/* <label for="exampleInputEmail1" className="form-label text-center">Your Name</label> */}
    <h4 className='text-center mt-3'>Your email</h4>
    <input type="text" name='name' className="form-control w-50 mx-auto" placeholder='Your Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    {/* <label for="exampleInputEmail1" className="form-label">PhotoURL</label> */}
    <h4 className='text-center'>PhotoURL</h4>
    <input type="photourl" name='photourl' className="form-control w-50 mx-auto" placeholder='PhotoURL' id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 mt-3">
    {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
    <h4 className='text-center'>Your Email</h4>
    <input type="email" name='email' className="form-control w-50 mx-auto" placeholder='Your email' id="exampleInputEmail1" aria-describedby="emailHelp"required />
  </div>
  <div className="mb-3">
    {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
    <h4 className='text-center'>Your Password</h4>
    <input type="password" name='password' className="form-control w-50 mx-auto" placeholder='your password' id="exampleInputPassword1" required />
  </div>
  <div className='text-center'>
      <button type="Login" className="btn btn-primary mb-3">Register</button>
  </div>
</form>
</div>
    );
};

export default Register;