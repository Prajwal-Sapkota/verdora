import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './About/Hero';
import Comfort from './About/Comfort';
import Advantages from './About/Advantages';
import Team from './About/Team';
import Services from './About/Services';
import News from './About/News';
import BookingForm from '../components/Form';
import usePageTitle from '../hooks/usePageTitle';

const About = () => {
  usePageTitle('About');
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Hero/>
        <Comfort/>
        <Advantages/>
        <Team/>
        <Services/>
        <News/>
        <BookingForm/>
        
        <Footer/>
        
        
        
      </div>


    </>
  );
};

export default About;