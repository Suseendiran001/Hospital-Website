import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);  const services = [
    {
      icon: (
        <div style={{ fontSize: '48px', textAlign: 'center' }}>❤️</div>
      ),
      title: 'Cardiology',
      description: 'Comprehensive heart care with state-of-the-art technology and experienced specialists.'
    },
    {
      icon: (
        <div style={{ fontSize: '48px', textAlign: 'center' }}>🧠</div>
      ),
      title: 'Neurology',
      description: 'Advanced neurological treatments for brain and nervous system disorders.'
    },
    {
      icon: (
        <div style={{ fontSize: '48px', textAlign: 'center' }}>👶</div>
      ),
      title: 'Pediatrics',
      description: 'Specialized care for children from infancy through adolescence.'
    },
    {
      icon: (
        <div style={{ fontSize: '48px', textAlign: 'center' }}>🦴</div>
      ),
      title: 'Orthopedics',
      description: 'Expert treatment for bone, joint, and muscle conditions.'
    },
    {
      icon: (
        <div style={{ fontSize: '48px', textAlign: 'center' }}>📸</div>
      ),
      title: 'Radiology',
      description: 'Advanced medical imaging and diagnostic services with cutting-edge technology.'
    },
    {
      icon: (
        <div style={{ fontSize: '48px', textAlign: 'center' }}>🚨</div>
      ),
      title: 'Emergency Medicine',
      description: '24/7 emergency and trauma care with rapid response medical teams.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Expert Doctors' },
    { number: '10K+', label: 'Happy Patients' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Care' }
  ];
  const whyChooseUs = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Excellence in Care',
      description: 'Award-winning medical professionals committed to providing the highest quality healthcare.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Advanced Technology',
      description: 'State-of-the-art medical equipment and cutting-edge treatment methods.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V18h2v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V18h2V9c0-1.1-.9-2-2-2h-3c-.55 0-1 .45-1 1v1H8V8c0-.55-.45-1-1-1H4c-1.1 0-2 .9-2 2v9h2z"/>
        </svg>
      ),
      title: 'Personalized Treatment',
      description: 'Tailored care plans designed specifically for each patient\'s unique needs.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className={`hero-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
                Your Health, <br/> Our <span className="text-gradient">Priority</span>
              </h1>
              <p className={`hero-subtitle ${isVisible ? 'animate-fadeInUp' : ''}`}>
                Experience world-class healthcare with compassionate care, 
                advanced technology, and expert medical professionals dedicated 
                to your wellbeing.
              </p>
              <div className={`hero-buttons ${isVisible ? 'animate-fadeInUp' : ''}`}>
                <Link to="/appointment" className="btn btn-primary">
                  Book Appointment
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card">
                <div className="hero-card-content">
                  <div className="hero-card-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3>Expert Medical Care</h3>
                  <p>24/7 professional healthcare services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item animate-fadeInUp">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Medical Services</h2>
            <p>Comprehensive healthcare solutions designed to meet all your medical needs with excellence and compassion.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card card animate-fadeInUp">
                <div className="service-icon">{service.icon}</div>
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                  <Link to="/services" className="service-link">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose HealthCare?</h2>
            <p>We are committed to providing exceptional healthcare services that exceed your expectations.</p>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-item animate-fadeInUp">
                <div className="why-choose-icon">{item.icon}</div>
                <div className="why-choose-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Book your appointment today and experience the difference of quality healthcare.</p>
            <div className="cta-buttons">
              <Link to="/appointment" className="btn btn-primary">
                Book Appointment Now
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
