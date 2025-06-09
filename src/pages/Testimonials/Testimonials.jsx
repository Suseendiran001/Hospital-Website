import { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 34,
      location: 'New York, NY',
      treatment: 'Cardiac Surgery',
      doctor: 'Dr. Michael Thompson',
      rating: 5,
      date: '2024-01-15',
      image: '/api/placeholder/150/150',
      quote: 'The care I received during my cardiac surgery was exceptional. Dr. Thompson and his team were not only highly skilled but also incredibly compassionate. They explained every step of the process and made me feel confident and safe.',
      fullReview: 'I came to the hospital with severe chest pains and was diagnosed with a blocked artery. The entire team worked quickly and efficiently to provide the best treatment. The surgery was successful, and the recovery process was smooth thanks to the excellent nursing staff. I am forever grateful for saving my life.',
      verified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      age: 45,
      location: 'Los Angeles, CA',
      treatment: 'Neurology Consultation',
      doctor: 'Dr. Lisa Chen',
      rating: 5,
      date: '2024-02-03',
      image: '/api/placeholder/150/150',
      quote: 'Dr. Chen\'s expertise in neurology is outstanding. She took the time to listen to my concerns and provided a comprehensive treatment plan that has significantly improved my quality of life.',
      fullReview: 'I had been suffering from chronic migraines for years without finding effective treatment. Dr. Chen conducted thorough tests and identified the root cause of my condition. Her personalized treatment approach has reduced my migraine frequency by 80%. The staff was professional and the facility is top-notch.',
      verified: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      age: 28,
      location: 'Chicago, IL',
      treatment: 'Pediatric Care',
      doctor: 'Dr. Emily Rodriguez',
      rating: 5,
      date: '2024-01-28',
      image: '/api/placeholder/150/150',
      quote: 'As a new mother, I was anxious about my baby\'s health. Dr. Rodriguez and the pediatric team provided exceptional care and guidance. Their patience and expertise gave me the confidence I needed.',
      fullReview: 'The pediatric department here is amazing. From routine checkups to emergency visits, they have always been there for my family. The doctors are knowledgeable, the nurses are caring, and the facility is child-friendly. I highly recommend their services to all parents.',
      verified: true
    },
    {
      id: 4,
      name: 'Robert Martinez',
      age: 52,
      location: 'Houston, TX',
      treatment: 'Orthopedic Surgery',
      doctor: 'Dr. Mark Anderson',
      rating: 4,
      date: '2024-02-10',
      image: '/api/placeholder/150/150',
      quote: 'My knee replacement surgery was a complete success. Dr. Anderson is a skilled surgeon, and the rehabilitation team helped me get back on my feet faster than I expected.',
      fullReview: 'After months of knee pain that affected my daily activities, I decided to have knee replacement surgery. The pre-surgery consultation was thorough, and Dr. Anderson explained everything clearly. The surgery went smoothly, and the physical therapy team was excellent. I\'m now pain-free and more active than I\'ve been in years.',
      verified: true
    },
    {
      id: 5,
      name: 'Jennifer Davis',
      age: 39,
      location: 'Miami, FL',
      treatment: 'Emergency Care',
      doctor: 'Dr. John Mitchell',
      rating: 5,
      date: '2024-02-14',
      image: '/api/placeholder/150/150',
      quote: 'The emergency department team saved my life. Their quick response and professional care during a critical moment was extraordinary. I can\'t thank them enough.',
      fullReview: 'I was brought to the emergency room after a severe allergic reaction. The medical team acted immediately and provided life-saving treatment. Dr. Mitchell and the nurses were calm, professional, and kept my family informed throughout the process. The hospital\'s emergency facilities are world-class.',
      verified: true
    },
    {
      id: 6,
      name: 'David Wilson',
      age: 67,
      location: 'Phoenix, AZ',
      treatment: 'General Medicine',
      doctor: 'Dr. Susan Taylor',
      rating: 4,
      date: '2024-01-20',
      image: '/api/placeholder/150/150',
      quote: 'The comprehensive health screening I received was thorough and professional. Dr. Taylor took the time to address all my concerns and provided valuable health recommendations.',
      fullReview: 'As someone who hadn\'t had a complete physical in several years, I was impressed by the thoroughness of the examination. All the tests were completed efficiently, and the results were explained clearly. The preventive care recommendations have helped me make positive lifestyle changes.',
      verified: true
    }
  ];

  const stats = [
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '15,000+', label: 'Happy Patients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '1,200+', label: 'Reviews' }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => 
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="container">
          <div className="testimonials-hero-content">
            <h1 className={`page-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Patient <span className="text-gradient">Testimonials</span>
            </h1>
            <p className={`hero-description ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Read what our patients have to say about their healthcare experience with us. 
              Your health and satisfaction are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="testimonials-stats section">
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

      {/* Featured Testimonial Carousel */}
      <section className="featured-testimonial section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Patient Stories</h2>
            <p>Real experiences from our valued patients</p>
          </div>

          <div className="testimonial-carousel">
            <button 
              className="carousel-btn prev-btn"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ◀
            </button>

            <div className="testimonial-slide">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="patient-info">
                    <div className="patient-image">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name}
                      />
                      {testimonials[currentTestimonial].verified && (
                        <div className="verified-badge">✓</div>
                      )}
                    </div>
                    <div className="patient-details">
                      <h3 className="patient-name">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="patient-meta">
                        Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].location}
                      </p>
                      <p className="treatment-info">
                        {testimonials[currentTestimonial].treatment} with {testimonials[currentTestimonial].doctor}
                      </p>
                      <div className="rating">
                        {renderStars(testimonials[currentTestimonial].rating)}
                        <span className="rating-text">
                          {testimonials[currentTestimonial].rating}/5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-quote">
                  <span className="quote-mark">"</span>
                  <p>{testimonials[currentTestimonial].quote}</p>
                  <span className="quote-mark">"</span>
                </div>

                <div className="testimonial-date">
                  Reviewed on {new Date(testimonials[currentTestimonial].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>

            <button 
              className="carousel-btn next-btn"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              ▶
            </button>
          </div>

          <div className="carousel-controls">
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="autoplay-toggle"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
            >
              {isAutoPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="all-testimonials section">
        <div className="container">
          <div className="section-title">
            <h2>All Patient Reviews</h2>
            <p>Browse through all the feedback from our patients</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card card animate-fadeInUp">
                <div className="card-header">
                  <div className="patient-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                    {testimonial.verified && (
                      <div className="verified-badge small">✓</div>
                    )}
                  </div>
                  <div className="patient-info">
                    <h4 className="patient-name">{testimonial.name}</h4>
                    <p className="patient-location">{testimonial.location}</p>
                    <div className="rating small">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="treatment-badge">
                    {testimonial.treatment}
                  </div>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <p className="doctor-name">Treated by {testimonial.doctor}</p>
                </div>

                <div className="card-footer">
                  <span className="review-date">
                    {new Date(testimonial.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review Section */}
      <section className="leave-review section">
        <div className="container">
          <div className="review-cta">
            <div className="review-content">
              <h2>Share Your Experience</h2>
              <p>
                We value your feedback and would love to hear about your experience with our healthcare services. 
                Your review helps us improve and helps other patients make informed decisions.
              </p>
              <div className="review-buttons">
                <button className="btn btn-primary">Write a Review</button>
                <button className="btn btn-secondary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
