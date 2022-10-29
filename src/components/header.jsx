import React from 'react';
import { Link } from 'react-router-dom';
import {FaCode} from "react-icons/fa"
import { useContext } from 'react';
import { DarkModeContext } from '../Context/DarkContext';
import { AuthContext } from '../Context/UserContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';





const Header = () => {
   const nav=useNavigate();
  const {user,logOut}=useContext(AuthContext);
   const [setDark,dark]=useContext(DarkModeContext);
   
   const handleDark=()=>{
      setDark(!dark);
   }
   
   const handleSignOut=()=>{
     logOut()
     .then(result=>{
       toast.success("User Signed Out SuccessFully")
       nav("/");
       
     })
   }







    return (
        <div>


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${dark?"bg-white text-black":"bg-base-100 text-white" } `}>
      <li><Link to="/login" className="btn btn-ghost normal-case text-xl">LogIn</Link></li>
     <li><Link to="/courses" className="btn btn-ghost normal-case text-xl">Courses</Link></li>
     <li><Link to="/faq" className="btn btn-ghost normal-case text-xl">FA</Link></li>
     <li><Link to="/blog" className="btn btn-ghost normal-case text-xl">BLOG</Link></li>
     <li><Link to="/register" className="btn btn-info normal-case text-xl ml-3">Register</Link></li>
     <li><button onClick={handleSignOut} className="btn btn-accent normal-case text-xl ml-3">Sign Out</button></li>
     <li><p className='normal-case text-xl ml-3'>LightMode:</p> <input type="checkbox" className="toggle toggle-md" onClick={handleDark} /></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl "><p className='mr-2'>MASTER PROGRAMMING</p><FaCode className='text-3xl'/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className={`menu menu-horizontal p-0 ${dark?"bg-white text-black":"bg-base-100 text-white" }`}>
     <li><Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link></li>
     <li><Link to="/courses" className="btn btn-ghost normal-case text-xl">Courses</Link></li>
     <li><Link to="/faq" className="btn btn-ghost normal-case text-xl">FAQ</Link></li>
     <li><Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link></li>
     <li><Link to="/register" className="btn btn-info normal-case text-xl ml-3">Register</Link></li>
     <li><button onClick={handleSignOut} className="btn btn-accent normal-case text-xl ml-3">Sign Out</button></li>
     <li><p className='normal-case text-xl ml-3'>LightMode:</p> <input type="checkbox" className="toggle toggle-md" onClick={handleDark} /></li>
     
    </ul>
  </div>
  <div className="navbar-end">
  <img src={user?.photoURL} className="w-10 rounded-full" alt="" title={`${user?.displayName ? user.displayName:user?.email}`} />
  </div>
</div>
     
</div>
    );
};

export default Header;