import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../Context/DarkContext';

const Home = () => {

  const [setDark, dark] = useContext(DarkModeContext);
  
 
  
    return (
        <div>
     {/* <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello programmer </h1>
      <p className="mb-5">we are here to teach you Mvarious Programming language and Best Demanding technology</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
     </div> */}
        <nav className= {`  ${dark?" bg-gray-800 text-white t":"bg-gray-200 text-black" }`}>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			        <h1 className="mt-20 text-3xl lg:text-5xl font-bold leading-none sm:text-6xl">A Large Platform to get skilled
			        </h1>
                    <h3 className="text-lg font-bold mt-2 text-teal-600">Our course is rated excellent by over 5,400 people</h3>
			        <p className="mt-6 mb-8 text-lg sm:mb-12">Today, more than 10,000 people have already joined in our different courses: programming, Machine Learning and Artificial Intelligence. Explore our outstanding courses and get started to be a hero.
			        </p>
			    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <Link to="/courses" className="mb-20 px-8 py-3 text-lg font-semibold rounded bg-indigo-400 hover:bg-indigo-500 text-gray-900">Explore Courses</Link>
            </div>
            
            </div>
        </nav>

        
 </div>
    );
};

export default Home; 