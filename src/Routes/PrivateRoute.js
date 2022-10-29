import { getAuth } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import app from '../firebase/firebase.init';


const PrivateRoutes = ({children}) => {
      const auth=getAuth(app);
      const user=auth.currentUser;
      console.log(user)
      const location =useLocation();
      const {loading}=useContext(AuthContext);

      if(loading){
        return   <progress className="progress w-56 my-24"></progress>               
      }

      if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

      

    return children;
      
};

export default PrivateRoutes;