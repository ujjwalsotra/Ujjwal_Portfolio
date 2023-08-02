import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Exp from '../components/Exp';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Exp/>
        <Footer/>
    </div>
  )
}

export default Home;