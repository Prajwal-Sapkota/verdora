import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './Cafe/Hero';
import CafeCarousel from './Cafe/CafeCarousel';
import Menus from './Cafe/Menus';
import Experiences from './Cafe/Experiences';
import BookingForm from '../components/Form';
import usePageTitle from '../hooks/usePageTitle';
import BackToTop from '../components/BackToTop';


const Cafe = () => {
  usePageTitle('Cafe');
  return (

    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <main>
          <Hero />
          <CafeCarousel />
          <Menus />
          <Experiences />
          <BookingForm />
        </main>

        <Footer />
        <BackToTop/>



      </div >


    </>
  );
};

export default Cafe;