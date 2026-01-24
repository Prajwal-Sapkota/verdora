// App.jsx
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Cafe from './pages/Cafe';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import { Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import RoomDetail from './pages/Rooms/RoomDetail';
import ServiceDetail from './pages/Services/ServiceDetail';

function App() {
  return (
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
  );
}

export default App;
