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
 <div className={`navbar ${dark?"bg-teal-900 text-white":"bg-teal-500 text-white" }`}>
 <div className="navbar-start">
            
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
              <ul tabIndex={0} className={`menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${dark?"bg-teal-900 text-white":"bg-teal-500 text-white" } `}>
                
      <li><Link to="/login" className="btn btn-ghost normal-case text-xl">LogIn</Link></li>
     <li><Link to="/courses" className="btn btn-ghost normal-case text-xl">Courses</Link></li>
     <li><Link to="/faq" className="btn btn-ghost normal-case text-xl">FAQ</Link></li>
     <li><Link to="/blog" className="btn btn-ghost normal-case text-xl">BLOG</Link></li>
     <li><Link to="/register" className="border bg-indigo-500 border-indigo-500 hover:bg-indigo-700 text-xl ml-3">Register</Link></li>
    <li><button onClick={handleSignOut} className="border bg-violet-600 border-transparant hover:bg-violet-800 text-xl ml-3">Sign Out</button></li>
                
     <label className="swap swap-rotate ml-12 ">
  
  <input  type="checkbox" onClick={handleDark} />
  
  <svg className="swap-on  w-10 h-10 fill-yellow-400 stroke-yellow-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  <svg className="swap-off fill-gray-900 stroke-cyan-400 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
     </label>
      </ul>
</div>
            {/* start minimize */}
<label className=" btn btn-circle swap swap-rotate lg:hidden">
  
  {/* <!-- this hidden checkbox controls the state --> */}
  <input type="checkbox" />
  
  {/* <!-- hamburger icon --> */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* <!-- close icon --> */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>

    <Link to="/" className="btn btn-ghost normal-case text-xl "><p className='mr-2'>MASTER PROGRAMMING</p><FaCode className='text-3xl'/></Link>
  </div>
  <div className="navbar-center hidden lg:flex ml-72">
    <ul className='menu menu-horizontal p-0 '>
     <li><Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link></li>
     <li><Link to="/courses" className="btn btn-ghost normal-case text-xl">Courses</Link></li>
     <li><Link to="/faq" className="btn btn-ghost normal-case text-xl">FAQ</Link></li>
     <li><Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link></li>
     <li><Link to="/register" className="border bg-indigo-500 border-indigo-600 hover:bg-indigo-700 text-xl ml-3">Register</Link></li>
     <li><button onClick={handleSignOut} className="border bg-violet-600 border-none hover:bg-violet-800 text-xl ml-3">Sign Out</button></li>
     
<label className="swap swap-rotate ml-12 ">
  
  <input  type="checkbox" onClick={handleDark} />
  
  <svg className="swap-on  w-10 h-10 fill-yellow-400 stroke-yellow-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  <svg className="swap-off fill-indigo-900 stroke-violet-900 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
     
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