import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './Gallery/Hero';
import GalleryItems from './Gallery/Gallery';
import Video from './Gallery/Video';
import BookingForm from '../components/Form';


const Gallery = () => {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Hero/>
        <GalleryItems/>
        <Video/>
        <BookingForm/>
       
        
        <Footer/>
        
        
        
      </div>


    </>
  );
};

export default Gallery;