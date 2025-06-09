import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css';

const Doctors = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);  const doctors = [
    {
      id: 1,
      name: 'Dr. Michael Thompson',
      specialty: 'Interventional Cardiologist',
      department: 'cardiology',
      avatar: '👨‍⚕️',
      gender: 'male',
      experience: '15+ years',
      rating: 4.9,
      reviews: 247,
      availability: 'Mon-Fri: 9:00 AM - 5:00 PM'
    },
    {
      id: 2,
      name: 'Dr. Sarah Davis',
      specialty: 'Cardiac Surgeon',
      department: 'cardiology',
      avatar: '👩‍⚕️',
      gender: 'female',
      experience: '12+ years',
      rating: 4.8,
      reviews: 189,
      availability: 'Mon-Thu: 8:00 AM - 6:00 PM'
    },
    {
      id: 3,
      name: 'Dr. Lisa Chen',
      specialty: 'Neurologist',
      department: 'neurology',
      avatar: '👩‍⚕️',
      gender: 'female',
      experience: '10+ years',
      rating: 4.9,
      reviews: 156,
      availability: 'Tue-Sat: 10:00 AM - 4:00 PM'
    },
    {
      id: 4,
      name: 'Dr. Robert Martinez',
      specialty: 'Neurosurgeon',
      department: 'neurology',
      avatar: '👨‍⚕️',
      gender: 'male',
      experience: '18+ years',
      rating: 4.9,
      reviews: 298,
      availability: 'Mon-Wed: 7:00 AM - 5:00 PM'
    },
    {
      id: 5,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      department: 'pediatrics',
      avatar: '👩‍⚕️',
      gender: 'female',
      experience: '8+ years',
      rating: 4.8,
      reviews: 134,
      availability: 'Mon-Fri: 8:00 AM - 6:00 PM'
    },
    {
      id: 6,
      name: 'Dr. Mark Anderson',
      specialty: 'Orthopedic Surgeon',
      department: 'orthopedics',
      avatar: '👨‍⚕️',
      gender: 'male',
      experience: '14+ years',
      rating: 4.7,
      reviews: 201,
      availability: 'Mon-Thu: 9:00 AM - 5:00 PM'
    }
  ];const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'orthopedics', name: 'Orthopedics' }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star">★</span>);
    }
    return stars;
  };

  return (
    <div className="doctors-page">      {/* Hero Section */}
      <section className="doctors-hero">
        <div className="doctors-hero-background">
          <div className="doctors-hero-overlay"></div>
          <div className="doctors-hero-pattern"></div>
        </div>
        <div className="container">
          <div className="doctors-hero-content">
            <h1 className={`page-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Meet Our Expert <span className="text-gradient">Doctors</span>
            </h1>
            <p className={`hero-description ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Our team of highly qualified medical professionals is dedicated to providing 
              exceptional healthcare with compassion, expertise, and personalized attention.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="doctors-filters section">
        <div className="container">
          <div className="filters-wrapper">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            
            <div className="department-filters">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  className={`filter-btn ${selectedDepartment === dept.id ? 'active' : ''}`}
                  onClick={() => setSelectedDepartment(dept.id)}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section className="doctors-grid-section section">
        <div className="container">
          <div className="doctors-grid">            {filteredDoctors.map((doctor, index) => (
              <div key={doctor.id} className="doctor-card card animate-fadeInUp">
                <div className="doctor-avatar">
                  <div className={`avatar-icon ${doctor.gender}`}>
                    <span className="avatar-emoji">{doctor.avatar}</span>
                  </div>
                  <div className="doctor-availability">
                    <span className="availability-status">Available</span>
                  </div>
                </div>
                
                <div className="doctor-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                  
                  <div className="doctor-rating">
                    <div className="stars">
                      {renderStars(doctor.rating)}
                    </div>
                    <span className="rating-text">
                      {doctor.rating} ({doctor.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="doctor-details">
                    <div className="detail-item">
                      <span className="detail-icon">⏱️</span>
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">📅</span>
                      <span>{doctor.availability}</span>
                    </div>
                  </div>
                  
                  <div className="doctor-actions">
                    <Link 
                      to={`/appointment?doctor=${doctor.id}`} 
                      className="btn btn-primary"
                    >
                      Book Appointment
                    </Link>
                    <button className="btn btn-secondary">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="no-results">
              <div className="no-results-content">
                <span className="no-results-icon">👨‍⚕️</span>
                <h3>No doctors found</h3>
                <p>Try adjusting your search criteria or department filter.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Doctors;
