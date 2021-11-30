import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyProjects from '../Contact/MyProjects/MyProjects';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Banner></Banner>
     <About></About>
     <MyProjects></MyProjects>
     <Contact></Contact>
        </div>
    );
};

export default Home;