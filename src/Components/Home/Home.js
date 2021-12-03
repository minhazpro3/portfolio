import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import MyProjects from '../Contact/MyProjects/MyProjects';
import Navbar from '../Navbar/Navbar';
import AOS from 'aos';
import  { useEffect } from 'react';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';


const Home = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 2000,
      easing: "ease"
    });
   })
    return (
        <div id="home">
            <Navbar></Navbar>
              <div  >
                <a data-aos="fade-down" target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/minhaz-55a163227/" className=" mt-32 m-1 fixed   "  ><i  style={{color: "#2867B2"}} className="fab fa-linkedin text-3xl "></i></a>

                <a data-aos="fade-down" target="_blank" rel='noreferrer' href="https://github.com/minhazpro3" className=" mt-40 m-1 fixed   " style={{color: "#171515"}} ><i className="fab fa-github-square text-3xl " ></i></a>

                <a data-aos="fade-down" target="_blank" rel='noreferrer' href="https://www.facebook.com/minhaz.moyna/" className=" mt-48 m-1 fixed   " ><i className="fab fa-facebook-square text-3xl " style={{color: "#4267B2"}}></i></a>
              <Banner></Banner>
              </div>
              <About></About>
              <MyProjects></MyProjects>
              <Blogs/>
              <Contact></Contact>
              <Footer></Footer>
        </div>
    );
};

export default Home;