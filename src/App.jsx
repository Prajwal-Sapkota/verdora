// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Demos from './pages/Demos';
// import About from './pages/About';
// import Rooms from './pages/Rooms';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
// import AllPages from './pages/AllPages';

function App() {
  return (
    <Router>
      
        
        
       
          <Routes>
            <Route path="/" element={<Home />} />
           
          </Routes>
      
      
    </Router>
  );
}

export default App;