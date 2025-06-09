import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Doctors from './pages/Doctors/Doctors';
import Appointment from './pages/Appointment/Appointment';
// import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';
import EmergencyPopup from './components/EmergencyPopup/EmergencyPopup';
import ChatBot from './components/ChatBot/ChatBot';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            {/* <Route path="/testimonials" element={<Testimonials />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <EmergencyPopup />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
