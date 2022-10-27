import React  from 'react';
import jsPDF from 'jspdf';

import { Link, useLoaderData } from 'react-router-dom';

const FullCourseDetails = () => {

    const generatePdf=()=>{
        let y_index=105;
        let doc=new jsPDF("p","pt")

        doc.text(20,25,`Course Name:${course.course_name}`);
        doc.text(20,45,`Instructor:${course.instructor_name}`);
        doc.text(20,65,`Rating:${course.course_rating}`);
        doc.text(20,85,"Topics That will cover")
        

        course.course_topics.map(topic=>{
             y_index+=20
            return doc.text(20,y_index,`${topic}`)
        })

        doc.save("module.pdf")
    }
    
    const course=useLoaderData();
    return (
        <div className='w-3/4 mx-auto'>
             <img src={course.course_image} alt="" className='w-full rounded-md'/>
             <p className='text-slate-900 font-bold text-3xl my-2'>Name:{course.course_name}</p>
              <Link to={`/checkout/${course.id}`}><button className="btn btn-success normal-case text-xl">Get Premium Access</button></Link>
              <button onClick={generatePdf} className="btn mx-3 btn-success normal-case text-xl">Download Course Module</button>
           
              <ul className=''>
                 <h1 className='text-slate-900  font-bold text-3xl text-center mt-5'>Topics That Will Be Covered</h1>
                  {
                  course.course_topics.map(topic=>{
                    return <li>{topic}</li>
                  })
                  }
              </ul>
               <p className='font-bold text-3xl text-center'>Course Description:</p>
               <p className='text-slate-900 font-bold '>{course.course_description}</p>
               <p className='text-slate-900 text-2xl'>Instructor:{course.instructor_name}</p>
               <img src={course.instructor_image} className="rounded-2xl" alt=""/>


        </div>
    );
};

export default FullCourseDetails;