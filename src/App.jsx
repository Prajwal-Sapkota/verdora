import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Eager load Home only
import Home from './pages/Home';

// Lazy load heavy pages
const Rooms = lazy(() => import('./pages/Rooms'));
const Gallery = lazy(() => import('./pages/Gallery'));
const RoomDetail = lazy(() => import('./pages/Rooms/RoomDetail'));
const ServiceDetail = lazy(() => import('./pages/Services/ServiceDetail'));
const Services = lazy(() => import('./pages/Services'));

// Keep these eager if they're small
import About from './pages/About';
import Cafe from './pages/Cafe';
import Contact from './pages/Contact';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cafe" element={<Cafe />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route 
        path="/rooms" 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Rooms />
          </Suspense>
        } 
      />
      <Route 
        path="/rooms/:slug" 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <RoomDetail />
          </Suspense>
        } 
      />
      <Route 
        path="/gallery" 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Gallery />
          </Suspense>
        } 
      />
      <Route 
        path="/services" 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        } 
      />
      <Route 
        path="/services/:slug" 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ServiceDetail />
          </Suspense>
        } 
      />
    </Routes>
  );
}

export default App;