import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import usePageTitle from '../hooks/usePageTitle';
import BackToTop from '../components/BackToTop';
import Hero from './Services/Hero';
import ServicesContent from './Services/ServicesContent';

const Services = () => {
  usePageTitle('Services');
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
          <main>
            <Hero/>
            <ServicesContent/>
            
          </main>
          <Footer />
          <BackToTop/>


      </div>


    </>
  );
};

export default Services;