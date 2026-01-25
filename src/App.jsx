import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Eager load simple/light pages
import Home from './pages/Home';
import About from './pages/About';
import Cafe from './pages/Cafe';
import Contact from './pages/Contact';

// Lazy load ONLY heavy components
const Rooms = lazy(() => import('./pages/Rooms'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const RoomDetail = lazy(() => import('./pages/Rooms/RoomDetail'));
const ServiceDetail = lazy(() => import('./pages/Services/ServiceDetail'));

// Simple loading component for heavy pages
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ab8c55]"></div>
  </div>
);

function App() {
  return (
    <Routes>
      {/* Light pages - load instantly */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cafe" element={<Cafe />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Heavy pages - lazy load with suspense */}
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