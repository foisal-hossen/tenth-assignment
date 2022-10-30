import React from 'react';
import { useContext } from 'react';
import  { AuthContext } from '../Context/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    let location=useLocation()
    let from =location.state?.from?.pathname || "/"
     const nav=useNavigate();
    const {user,createUser,handleUpdateProfile,setLoading}=useContext(AuthContext);
     const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const fullName=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const PhotoURL=form.photoURL.value;

        createUser(email,password)
        .then(result=>{
            console.log(user);
            handleUpdateProfile(fullName,PhotoURL).then(()=>{
                console.log("profile Updated")
            })
            setLoading(false);
            nav(from ,{replace:true})

        }).catch(error=>console.error(error))
                         
     }
    return (
       <div className='pb-10 bg-gray-300'>
        <h1 className='text-3xl text-slate-900 text-center pt-10'>Register Here To Enroll Courses</h1>
          <p className='text-center mt-5'>Already Have an Account <Link className='text-yellow-400' to="/login">Login</Link></p>
         <form onSubmit={handleSubmit} className='flex flex-col items-center justify-between   py-10 space-y-4 bg-indigo-300 text-slate-900 mx-auto rounded w-1/2 my-2'>
                 <span>FULL NAME:</span>
                 <input name='name' type="text" placeholder="Full Name" className="input  input-bordered input-info w-full max-w-xs text-black" />
                 <span>EMAIL:</span><input name="email" type="email" placeholder="Enter Email" className="input  input-bordered input-info w-full max-w-xs text-black" />
                 <span>PASSWORD:</span><input name='password' type="password" placeholder="Enter Password" className="input  input-bordered input-info w-full max-w-xs text-black" />
                  <span>Photo URL</span> <input name='photoURL' type="text" placeholder="Enter PhotoURL" className="input  input-bordered input-info w-full max-w-xs text-black" />
                  <button className='btn btn-info' type='submit'>Register</button>
        </form>
       </div>
    );
};

export default Register;