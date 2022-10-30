import React from 'react';
import { useContext } from 'react';
import {FaGoogle,FaGithub} from "react-icons/fa";
import { AuthContext } from '../Context/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
   const [error,setError]=useState("")
   let location=useLocation()
   let from =location.state?.from?.pathname || "/"
    const navigate=useNavigate();
    const {signIn,handleGithubSignIn,handleGoogleSignIn,setLoading}=useContext(AuthContext);
     const handleSubmit=(e)=>{
      e.preventDefault();
      const form=e.target;
      const email=form.email.value;
      const password=form.password.value;
      signIn(email,password).then(result=>{
         console.log(result.user)
         navigate(from ,{replace:true})
         toast.success("Signed In Successfully");
         setLoading(false);
      }).catch(error=>{
            const message=error.message;
            console.log(message);
            setError(message);
            form.reset()
            toast.error(message);
            setLoading(false);
         
      })
     }
     const handleGoogle=()=>{
       handleGoogleSignIn().then(result=>{
         console.log(result.user)
       }).catch(error=>{
         console.log(error)
       })

     }
     const handleGithub=()=>{
      handleGithubSignIn().then(result=>{
         console.log(result.user)
       }).catch(error=>{
         console.log(error)
       })

     }
    return (
       <div className='bg-gray-300 pb-10'>
        <h1 className='text-3xl  text-center pt-10'>Login Here To</h1>
         <h1 className='bg-warning text-2xl w-1/2 mx-auto rounded-xl text-white '>{error}</h1>
         <form onSubmit={handleSubmit} className='flex flex-col items-center justify-between   py-10 space-y-4 bg-slate-200 text-slate-900 mx-auto rounded w-1/2 my-2'>
                 
          <span>EMAIL:</span>
          <input name='email' type="email" placeholder="Enter Email" className="bg-gray-900  input  input-bordered input-info w-full max-w-xs text-white" />
          <span>PASSWORD:</span>
          <input name='password' type="password" placeholder="Enter Password" className="input bg-gray-900 input-bordered input-info w-full max-w-xs text-white" />
                 <p>Do not Have An Account ? <Link className='text-yellow-500' to="/register">Register</Link></p>
                 <button className='btn btn-info' type='submit'>Login</button>
        </form>
          <br/>
            <h1 className='text-3xl text-center '>OR</h1>
            <h1 className='text-2xl text-slate-900 text-center'>Login With</h1>
          <div className='flex text-slate-800 text-2xl justify-between w-32  mx-auto bg-slate-200 p-5  rounded-lg'>
          <FaGoogle onClick={handleGoogle}  className='hover:bg-white cursor-pointer '></FaGoogle>
          <FaGithub onClick={handleGithub} className='hover:bg-white cursor-pointer '></FaGithub>
          </div>
       </div>
    );
};

export default Login;