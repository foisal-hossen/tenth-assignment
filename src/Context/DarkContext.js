import React, { useState } from 'react';
import { createContext } from 'react';


export const DarkModeContext=createContext();

 
     
      

const DarkContext = ({children}) => {
     
    const [dark,setDark]=useState(false);
    
    return (
        <div>
              <DarkModeContext.Provider value={[setDark,dark]}>
                {
                    children
                }
              </DarkModeContext.Provider>
        </div>
    );
};

export default DarkContext;