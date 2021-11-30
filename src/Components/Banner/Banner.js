import React from 'react';
import { Link } from 'react-router-dom';
// import resume from '../../../public/Minhaz_Resume.pdf'


const Banner = () => {
    return (
        <div className="bg-blue-200 ">
          {/* <div className="container mx-auto">
            
        <h5 className="flex justify-end ">   <Link className="rounded-full bg-green-400 px-3 py-1 my-2" to="/Minhaz_Resume.pdf" target="_blank" download >Resume <i className="fas fa-download text-white " ></i></Link></h5>

              </div> */}
         
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="py-32 mx-auto">
              <h5 className=" text-2xl text-white bg-green-500 rounded-full rounded-bl-none px-3 d-inline-block w-32 pe-0">Hello I'm</h5>
                <h1 className="text-5xl my-2">Minhaz_</h1>
                <h3 className="text-2xl my-2 mb-8">Web Developer</h3>
                
                <Link className="rounded-full bg-green-400  py-3 px-8 " to="/Minhaz_Resume.pdf" target="_blank" download >Resume <i className="fas fa-download text-white " ></i></Link>
              </div>
              <div>     
              <img src="https://i.ibb.co/6tYqSjQ/image-removebg-preview-1.png" alt="" />
              </div>
            </div>

           
           
        </div>
    );
};

export default Banner;