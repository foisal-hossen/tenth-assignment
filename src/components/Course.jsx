import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course,handleShowDetails}) => {
    
    return (
        <div onClick={()=>{
            handleShowDetails(course.id)
          }} className="card w-96 glass cursor-pointer">
          <figure><img src={course.course_image} alt="car!"/></figure>
           <div className="card-body">
               <h2 className="card-title text-white">{course.course_name}</h2>
               <p>{course.course_description.slice(0,50)}</p>
            <div className="card-actions justify-end">
              <Link to={`/courses/${course.id}`}><button className="btn btn-primary">Show More Details</button></Link>
            </div>
           </div>
         </div>
    );
};

export default Course;