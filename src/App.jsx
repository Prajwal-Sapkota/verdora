import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Eager load Home only (smallest page)
import Home from './pages/Home';

// Lazy load everything else
const About = lazy(() => import('./pages/About'));
const Rooms = lazy(() => import('./pages/Rooms'));
const Cafe = lazy(() => import('./pages/Cafe'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const RoomDetail = lazy(() => import('./pages/Rooms/RoomDetail'));
const ServiceDetail = lazy(() => import('./pages/Services/ServiceDetail'));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ab8c55]"></div></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </Suspense>
  );
}

export default App;