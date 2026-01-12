import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './Contact/Hero';
import ContactForm from './Contact/ContactForm';
import usePageTitle from '../hooks/usePageTitle';

const Contact = () => {
  usePageTitle('Contact');
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Hero/>
        <ContactForm/>
       
        
        <Footer/>
        
        
        
      </div>


    </>
  );
};

export default Contact;