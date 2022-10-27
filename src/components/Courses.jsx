import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
     const [course,setCourse]=useState({})
    const courses=useLoaderData();
    const  handleShowDetails=(id)=>{
      const course=courses.find(cour=>id===cour.id);
      setCourse(course);
    }
    return (
        <div className='mx-5 flex justify-between '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
                {
                    courses.map(course=><Course key={course.id} handleShowDetails={handleShowDetails} course={course}></Course>)
                }  
            </div>

            <div className='my-10 bg-slate-600  rounded-md p-4 text-white hidden lg:block lg:w-80'>
                   <h1 className='text-3xl'>Summary Of The Course</h1>
                    <h1 className=' text-2xl font-bold my-2'>{course.course_name}</h1> 
                    <p className='font-bold'>Instructor:  {course.instructor_name}</p>
                    <p className='my-2'>Rating:{course.course_rating}</p>
                    <p>Enrolled:{course.enrolled}</p>
                    <img src={course.instructor_image} className="w-48 mx-auto" alt=""/> 
                    <p className='my-2 font-bold'>Description:{course.course_description}</p>
            </div>
            
        </div>
    );
};

export default Courses;