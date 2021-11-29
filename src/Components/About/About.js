import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto">
                
                <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-4 flex items-center">
                <div className="px-5">
              <img className="w-full" src="https://i.ibb.co/CJHFBvy/543-378726-tech-hero.jpg" alt="" />
              </div>
              <div className="py-32  align-center px-5">
              <h2 className="text-4xl text-center">About me</h2>
              
                <h3 className="">Hello, I’m  Minhaz, web-developer based on Paris. I have rich experience in web site design & building and customization. Also I am good at</h3>
               <div className="flex flex-wrap gap-3 my-5 ">
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block  pe-0 border-4 border-blue-500 border-opacity-75">React.js</h5>
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block  pe-0 border-4 border-blue-500 border-opacity-75">JavaScript</h5>
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Bootstrap</h5>
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">TailwindCss</h5>
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Meterial-UI</h5>
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Css3</h5>
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Node.js</h5>
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Mongodb</h5>
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Express.js</h5>
               <h5 className=" text- 1xl bg-white-500 rounded-full rounded-bl-none px-3 d-inline-block   pe-0 border-4 border-blue-500 border-opacity-75">Firebase Authentication</h5>
               </div>
              </div>
              
            </div>
        </div>
    );
};

export default About;