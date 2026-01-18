import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Suites from '../components/Suites';
import Gallery from '../components/Gallery';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import Form from '../components/Form';
import Footer from '../components/Footer';
import usePageTitle from '../hooks/usePageTitle';
import BookingForm from '../components/Form';

const Home = () => {
  usePageTitle('Home');
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <div className="pt-20"> {/* Add this wrapper with padding-top */}
          <main>
            <Hero />
            <About />
            <Features />
            <Services />
            <Suites />
            <Gallery />
            <Testimonial />
            <BookingForm />
          </main>
          <Footer />
        </div>


      </div>


    </>
  );
};

export default Home;