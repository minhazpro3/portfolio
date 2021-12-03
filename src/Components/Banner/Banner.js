import { Link } from 'react-router-dom';
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';


const Banner = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 2000,
      easing: "ease"
    });
   })
    return (
        <div className="bg-blue-200 ">
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="py-32 mx-auto">
              <h5 data-aos="fade-down"   className=" text-2xl text-white bg-green-500 rounded-full rounded-bl-none px-3 d-inline-block w-32 pe-0">Hello I'm</h5>
                <h1 data-aos="fade-right"   className="text-5xl my-2">Minhaz_</h1>
                <h3 data-aos="fade-right"   className="text-2xl my-2 mb-8">Web Developer</h3>
                
              <div data-aos="fade-up"  >
              <Link  className="rounded-full bg-green-400  py-3 px-8 " to="/Minhaz_Resume.pdf" target="_blank" download >Resume <i className="fas fa-download text-white " ></i></Link>
              </div>
              </div>
              <div data-aos="fade-right"  >     
              <img style={{width: '100%'}} src="https://i.ibb.co/6tYqSjQ/image-removebg-preview-1.png" alt="" />
              </div>
            </div>

           
           
        </div>
    );
};

export default Banner;