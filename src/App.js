
import { RouterProvider } from 'react-router-dom';
import './App.css';
import {router} from "./Routes/route";

import { useContext } from 'react';
import { DarkModeContext } from './Context/DarkContext';
import { Toaster } from 'react-hot-toast';


function App() {
  const [dark]=useContext(DarkModeContext);
  return (
    <div className={`App ${dark ? "bg-white text-black" :"bg-base-100"}      `}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
        
    </div>
  );
}

export default App;

 