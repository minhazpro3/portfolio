import React from 'react';


const Banner = () => {
    return (
        <div >
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-2">
              <div className="py-32 mx-auto">
              <h5 className=" text-2xl bg-green-500 rounded-full rounded-bl-none px-3 d-inline-block w-32 pe-0">Hello I'm</h5>
                <h1 className="text-5xl ">Minhaz_</h1>
                <h3 className="text-2xl">Web Developer</h3>
                <button  className="rounded-full bg-green-400 px-3 py-1 my-2">Resume <i className="fas fa-download text-white "></i></button>
              </div>
              <div>
              <img src="https://i.ibb.co/GRvVzgd/6e855666-1764-4019-be9e-998505bd3fdf.webp" alt="" />
              </div>
            </div>
           
        </div>
    );
};

export default Banner;