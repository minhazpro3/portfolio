import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

const Blogs = () => {
    useEffect(()=>{
        AOS.init();
       })
    return (
        <div className="bg-gray-800 pb-8 "  id="blogs">
          
            <h2 data-aos="fade-up"    className=" text-white mt-5 justify-center text-2xl bg-green-500   px-8 d-inline-block w-32 mx-auto py-3 px-5 mb-8 rounded-full rounded-br-none rounded-tl-none">Blogs</h2>
            <h2 className="text-3xl  text-center py-32">Blogs is not yet</h2>
        </div>
    );
};

export default Blogs;