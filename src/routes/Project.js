import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Work from '../components/Work';

const Project = () => {

  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROJECTS" value="My works, have a Look" />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project