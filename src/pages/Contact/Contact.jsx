import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: '',
    preferredContact: 'email'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const departments = [
    { id: 'general', name: 'General Inquiry' },
    { id: 'appointment', name: 'Appointment Scheduling' },
    { id: 'billing', name: 'Billing & Insurance' },
    { id: 'emergency', name: 'Emergency Services' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'orthopedics', name: 'Orthopedics' }
  ];
  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Healthcare Street', 'T. Nagar, Chennai', 'Tamil Nadu, India - 600017'],
      action: 'Get Directions'
    },
    {
      icon: '📞',
      title: 'Phone Numbers',
      details: [
        'Main: +91 44 2815-4567',
        'Emergency: +91 44 911-2222',
        'Appointments: +91 44 2815-4568'
      ],
      action: 'Call Now'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: [
        'info@hospital.com',
        'appointments@hospital.com',
        'emergency@hospital.com'
      ],
      action: 'Send Email'
    },
    {
      icon: '🕒',
      title: 'Hours',
      details: [
        'Emergency: 24/7',
        'Mon-Fri: 6:00 AM - 10:00 PM',
        'Sat-Sun: 8:00 AM - 8:00 PM'
      ],
      action: 'View Schedule'
    }
  ];
  const departments_info = [
    {
      name: 'Emergency Department',
      phone: '+91 44 911-2222',
      hours: '24/7',
      location: 'Ground Floor, Main Building'
    },
    {
      name: 'Cardiology',
      phone: '+91 44 2815-4570',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      location: '3rd Floor, East Wing'
    },
    {
      name: 'Neurology',
      phone: '+91 44 2815-4571',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      location: '4th Floor, West Wing'
    },
    {
      name: 'Pediatrics',
      phone: '+91 44 2815-4572',
      hours: 'Mon-Sat: 8:00 AM - 7:00 PM',
      location: '2nd Floor, South Wing'
    },
    {
      name: 'Orthopedics',
      phone: '+91 44 2815-4573',
      hours: 'Mon-Thu: 8:00 AM - 6:00 PM',
      location: '5th Floor, North Wing'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Message sent successfully! We will get back to you soon.');
      // Reset form
      setFormData({
        name: '', email: '', phone: '', subject: '', message: '', 
        department: '', preferredContact: 'email'
      });
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className={`page-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className={`hero-description ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Get in touch with our healthcare team. We're here to answer your questions, 
              schedule appointments, and provide the information you need.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="section-title">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'error' : ''}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={errors.subject ? 'error' : ''}
                      placeholder="Brief subject of your inquiry"
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={errors.message ? 'error' : ''}
                      rows="6"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredContact">Preferred Contact Method</label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map Container */}
            <div className="map-container">
              <div className="section-title">
                <h2>Find Us</h2>
                <p>Located in the heart of the medical district for easy access.</p>
              </div>
              
              <div className="map-wrapper">
                {/* Placeholder for Google Map */}                <div className="map-placeholder">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.06145247656254!3d13.04781739814987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1672751234567!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hospital Location - Chennai"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="emergency-contact section">
        <div className="container">
          <div className="emergency-banner">
            <div className="emergency-content">
              <div className="emergency-icon">🚨</div>             
              <div className="emergency-text">
                <h2>Medical Emergency?</h2>
                <p>For life-threatening emergencies, call 111 immediately or visit our Emergency Department.</p>
              </div>
              <div className="emergency-actions">
                <a href="tel:108" className="btn btn-primary">Call 111</a>
                <a href="tel:+914491122222" className="btn btn-outline">Emergency Line</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
