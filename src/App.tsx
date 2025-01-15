import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import ForKommuner from './pages/ForKommuner';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

// Service pages
import EQTherapy from './pages/services/EQTherapy';
import CouplesTherapy from './pages/services/CouplesTherapy';
import YouthTherapy from './pages/services/YouthTherapy';
import SpecialEducation from './pages/services/SpecialEducation';
import Counseling from './pages/services/Counseling';

// Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tjenester" element={<Services />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/for-kommuner" element={<ForKommuner />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/bestill" element={<Booking />} />
            
            {/* Service routes */}
            <Route path="/tjenester/eq-terapi" element={<EQTherapy />} />
            <Route path="/tjenester/parterapi" element={<CouplesTherapy />} />
            <Route path="/tjenester/barn-og-unge" element={<YouthTherapy />} />
            <Route path="/tjenester/spesialpedagogikk" element={<SpecialEducation />} />
            <Route path="/tjenester/radgivning" element={<Counseling />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}