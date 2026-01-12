import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './Rooms/Hero';
import RoomTypes from './Rooms/RoomTypes';
import BookingForm from '../components/Form';
import usePageTitle from '../hooks/usePageTitle';


const Rooms = () => {
  usePageTitle('Rooms');
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Hero/>
        <RoomTypes/>
        <BookingForm/>
       
        
        <Footer/>
        
        
        
      </div>


    </>
  );
};

export default Rooms;