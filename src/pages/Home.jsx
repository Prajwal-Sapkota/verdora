import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import usePageTitle from '../hooks/usePageTitle';
import BackToTop from '../components/BackToTop';

// Lazy load all heavy components
const Stats = lazy(() => import('../components/Stats'));
const About = lazy(() => import('../components/About'));
const Features = lazy(() => import('../components/Features'));
const Services = lazy(() => import('../components/Services'));
const Suites = lazy(() => import('../components/Suites'));
const Gallery = lazy(() => import('../components/Gallery'));
const Testimonial = lazy(() => import('../components/Testimonial'));
const BookingForm = lazy(() => import('../components/Form'));

// Loading spinner component
const SectionLoader = () => (
  <div className="min-h-[300px] flex items-center justify-center bg-gray-50/50">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ab8c55]"></div>
  </div>
);

const Home = () => {
  usePageTitle('Home');
  
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <main>
          <Hero />
          
          {/* About Section */}
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          
          {/* Features Section */}
          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>
          
          {/* Services Section */}
          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>
          
          {/* Suites Section (Likely the HEAVIEST with icons) */}
          <Suspense fallback={<SectionLoader />}>
            <Suites />
          </Suspense>
          
          {/* Gallery Section (Could be heavy with images) */}
          <Suspense fallback={<SectionLoader />}>
            <Gallery />
          </Suspense>
          
          {/* Testimonial Section */}
          <Suspense fallback={<SectionLoader />}>
            <Testimonial />
          </Suspense>
          
          {/* Booking Form */}
          <Suspense fallback={<SectionLoader />}>
            <BookingForm />
          </Suspense>
          
          {/* Stats Section - If you're using it */}
          <Suspense fallback={<SectionLoader />}>
            <Stats />
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Home;