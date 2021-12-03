import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
const MyProjects = () => {
 useEffect(()=>{
  AOS.init();
 })
  

    const projects = [
        {   
            id: 1,
            name: 'Bike Market Website',
            img: 'https://i.ibb.co/CQHzGdf/short-bike.png',
            description: 'Users can login and register, log out, and not access the website without logging in, Users will be able to order or cancel, Also be able to handle all orders including ad services available, order cancellations and status updates, There are also admin site, products management and order conditions.',
            language: "React.js, node.js, React router dom, express, mongodb, Firebase Authentication, Css3, Bootstrap" ,
            live: 'https://friendly-wescoff-18e7cf.netlify.app/',
            client: 'https://github.com/minhazpro3/mordan-bike-bazar-Client-site',
            server: 'https://github.com/minhazpro3/mordan-bike-bazar-server-site'

    
    },
        {   
            id: 2,
            name: 'Amusement Park Related Website',
            img: 'https://i.ibb.co/2KzqBXL/park-short.png',
            description: 'Users can login and register, log out, and not access the website without logging in, Users will be able to order or cancel, Also be able to handle all orders including ad services available, order cancellations and status updates, There are also admin site, products management and order conditions.',
            language: "React.js, node.js, React router dom, express, mongodb, Firebase Authentication, Css3, Bootstrap" ,
            live: 'https://goofy-sammet-18b1eb.netlify.app/home',
            client: 'https://github.com/minhazpro3/bongobd-enjoy-client-site',
            server: 'https://github.com/minhazpro3/bongobd-enjoy-server-site'

    
    },
        {   
            id: 3,
            name: 'Doctors Services' ,
            img: 'https://i.ibb.co/RPpFBVY/doctor-final.png',
            description: 'Users can login and register, log out, and not access the website without logging in, Users will be able to order or cancel, Also be able to handle all orders including ad services available, order cancellations and status updates, There are also admin site, products management and order conditions.',
            language: "React.js, node.js, React router dom, express, mongodb, Firebase Authentication, Css3, Bootstrap" ,
            live: 'https://health-is-wealth-22.netlify.app/',
            client: 'https://github.com/minhazpro3/health-care-center',
            server: ''

    
    }
    ]

    return (
        <div   className="bg-blue-200 pb-8 "  id="myProjects">

        
        <div className=" container mx-auto text-white ">
            <h2 data-aos="fade-up"    className=" justify-center text-2xl bg-green-500   px-8 d-inline-block w-56 mx-auto py-3 px-5 mb-8 rounded-full rounded-br-none rounded-tl-none">My Projects</h2>
            <div className="grid md:grid-cols-3 gap-4 justify-center">

            {
              projects.map(p=>
                <div key={p.id} data-aos="fade-right"   className="max-w-sm rounded overflow-hidden shadow-lg bg-indigo-900">
                <img style={{height: '500px'}} className="w-full" src={p.img} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{p.name}</div>
                  <p className="text-white-700 text-base">
                   {p.description.slice(0,80)}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a target="_blank" rel='noreferrer' href={p.live} className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">Live demo</a>

                  <a target="_blank" rel='noreferrer' href={p.client} className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">Client site</a>

                  <a target="_blank" rel='noreferrer' href={p.server} className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">Server site</a>
                </div>
              </div>

              )
            }

</div>


        </div>
        </div>
    );
};

export default MyProjects;