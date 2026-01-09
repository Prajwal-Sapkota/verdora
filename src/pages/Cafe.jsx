import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './Cafe/Hero';
import CafeCarousel from './Cafe/CafeCarousel';
import Menus from './Cafe/Menus';
import Experiences from './Cafe/Experiences';
import BookingForm from '../components/Form';


const Cafe = () => {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Hero/>
        <CafeCarousel/>
        <Menus/>
        <Experiences/>
        <BookingForm/>
        
        <Footer/>
        
        
        
      </div>


    </>
  );
};

export default Cafe;