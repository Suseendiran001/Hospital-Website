import { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: '❤️',
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and understanding, ensuring they feel heard and cared for throughout their healthcare journey.'
    },
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'We strive for the highest standards in medical care, continuously improving our services and adopting best practices in healthcare.'
    },
    // {
    //   icon: '🤝',
    //   title: 'Integrity',
    //   description: 'We maintain the highest ethical standards, ensuring transparency, honesty, and trustworthiness in all our interactions.'
    // },
    {
      icon: '🔬',
      title: 'Innovation',
      description: 'We embrace cutting-edge medical technology and innovative treatment methods to provide the most advanced care possible.'
    }
  ];

  const features = [
    {
      icon: '🏥',
      title: 'State-of-the-Art Facility',
      description: 'Modern medical equipment and comfortable patient environments designed for optimal care and recovery.'
    },
    {
      icon: '👨‍⚕️',
      title: 'Expert Medical Team',
      description: 'Board-certified physicians and healthcare professionals with years of experience and specialized training.'
    },
    {
      icon: '🚑',
      title: '24/7 Emergency Services',
      description: 'Round-the-clock emergency care with rapid response times and advanced life support capabilities.'
    },
    {
      icon: '🔬',
      title: 'Advanced Diagnostics',
      description: 'Latest diagnostic imaging and laboratory services for accurate and timely medical assessments.'
    },
    {
      icon: '💊',
      title: 'Comprehensive Pharmacy',
      description: 'Full-service pharmacy with medication management and consultation services for all your prescription needs.'
    },
    {
      icon: '🏃‍♀️',
      title: 'Rehabilitation Services',
      description: 'Complete rehabilitation programs including physical therapy, occupational therapy, and wellness programs.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-text">
              <h1 className={`page-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
                About <span className="text-gradient">HealthCare</span>
              </h1>
              <p className={`hero-description ${isVisible ? 'animate-fadeInUp' : ''}`}>
                Since 2008, we have been committed to providing exceptional healthcare 
                services with compassion, excellence, and cutting-edge medical technology. 
                Our mission is to improve the health and wellbeing of our community.
              </p>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Medical Specialists</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Patients Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="card-body">
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                  To provide comprehensive, compassionate, and accessible healthcare 
                  services that improve the quality of life for individuals and families 
                  in our community. We are committed to excellence in patient care, 
                  medical education, and healthcare innovation.
                </p>
              </div>
            </div>

            <div className="vision-card card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <div className="card-body">
                <h3 className="card-title">Our Vision</h3>
                <p className="card-text">
                  To be the leading healthcare provider in our region, recognized for 
                  clinical excellence, patient satisfaction, and community impact. We 
                  envision a healthier future where every individual has access to 
                  world-class medical care close to home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do and shape our commitment to excellence in healthcare.</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item animate-fadeInUp">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="section-title">
            <h2>What Makes Us Different</h2>
            <p>Discover the key features and services that set HealthCare apart as your trusted healthcare partner.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card animate-fadeInUp">
                <div className="feature-icon">{feature.icon}</div>
                <div className="card-body">
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="awards-section section">
        <div className="container">
          <div className="section-title">
            <h2>Awards & Recognition</h2>
            <p>Our commitment to excellence has been recognized by leading healthcare organizations.</p>
          </div>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h4>Excellence in Care</h4>
              <p>Healthcare Quality Association - 2024</p>
            </div>
            <div className="award-item">
              <div className="award-icon">⭐</div>
              <h4>5-Star Rating</h4>
              <p>Centers for Medicare & Medicaid Services - 2024</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🎖️</div>
              <h4>Top Hospital Award</h4>
              <p>National Healthcare Excellence Program - 2023</p>
            </div>
            <div className="award-item">
              <div className="award-icon">💎</div>
              <h4>Outstanding Community Service</h4>
              <p>Community Health Foundation - 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Leadership Team</h2>
            <p>Meet the experienced professionals who guide our organization and ensure the highest standards of care.</p>
          </div>
          <div className="leadership-grid">
            <div className="leader-card card">
              <div className="leader-image">
                <div className="placeholder-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="card-body">
                <h3 className="leader-name">Dr. Sarah Johnson</h3>
                <p className="leader-title">Chief Medical Officer</p>
                <p className="leader-bio">
                  Board-certified physician with over 20 years of experience in hospital administration and patient care.
                </p>
              </div>
            </div>

            <div className="leader-card card">
              <div className="leader-image">
                <div className="placeholder-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="card-body">
                <h3 className="leader-name">Michael Chen</h3>
                <p className="leader-title">Chief Executive Officer</p>
                <p className="leader-bio">
                  Healthcare executive with extensive experience in strategic planning and operational excellence.
                </p>
              </div>
            </div>

            <div className="leader-card card">
              <div className="leader-image">
                <div className="placeholder-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="card-body">
                <h3 className="leader-name">Dr. Emily Rodriguez</h3>
                <p className="leader-title">Chief of Nursing</p>
                <p className="leader-bio">
                  Registered nurse with advanced degrees in healthcare administration and quality improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
