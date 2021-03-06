import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className=" " id="about">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className=" mt-5 justify-center text-2xl bg-green-500   px-8 d-inline-block w-44 text-white mx-auto py-3 px-5 mb-8 rounded-md ">About me</h2>

        <div className="grid my-8 sm:grid-cols-1 md:grid-cols-2 gap-4 flex  items-center">
          <div data-aos="fade-right" className="px-5">
            <img className="w-full" src="https://i.ibb.co/wWWn3DP/minhazpic-removebg-preview-removebg-preview.png" alt="" />
          </div>
          <div data-aos="fade-right" className=" text-white align-center px-5">
            <h3 className="">Hello, I’m  Minhaz, web-developer based on Paris. I have rich experience in web site design & building and customization. Also I am good at</h3>
            <div className="flex flex-wrap gap-3 mt-5 ">
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block  pe-0 border-4 border-blue-500 border-opacity-75">React.js</h5>
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block  pe-0 border-4 border-blue-500 border-opacity-75">JavaScript</h5>
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Bootstrap</h5>
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">TailwindCss</h5>
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Meterial-UI</h5>
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Css3</h5>
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Node.js</h5>
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Mongodb</h5>
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Express.js</h5>
              <h5 className=" text- 1xl   rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Firebase Authentication</h5>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default About;