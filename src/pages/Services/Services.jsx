import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: '❤️',
      description: 'Comprehensive heart and cardiovascular care',
      fullDescription: 'Our Cardiology department provides comprehensive diagnostic, therapeutic, and preventive heart care services. We specialize in treating conditions such as coronary artery disease, heart failure, arrhythmias, and hypertension.',
      services: [
        'Cardiac Catheterization',
        'Echocardiography',
        'Stress Testing',
        'Electrocardiography (ECG)',
        'Holter Monitoring',
        'Heart Surgery',
        'Pacemaker Implantation',
        'Cardiac Rehabilitation'
      ],
      specialists: [
        'Dr. Michael Thompson - Interventional Cardiologist',
        'Dr. Sarah Davis - Cardiac Surgeon',
        'Dr. James Wilson - Electrophysiologist'
      ]
    },
    {
      id: 'neurology',
      name: 'Neurology',
      icon: '🧠',
      description: 'Advanced neurological care and treatment',
      fullDescription: 'Our Neurology department offers cutting-edge treatment for disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. We provide comprehensive care for both acute and chronic neurological conditions.',
      services: [
        'EEG and EMG Testing',
        'MRI and CT Brain Scans',
        'Stroke Treatment',
        'Epilepsy Management',
        'Multiple Sclerosis Care',
        'Parkinsons Disease Treatment',
        'Migraine Treatment',
        'Neurosurgery'
      ],
      specialists: [
        'Dr. Lisa Chen - Neurologist',
        'Dr. Robert Martinez - Neurosurgeon',
        'Dr. Amanda Johnson - Stroke Specialist'
      ]
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      icon: '👶',
      description: 'Specialized care for children and adolescents',
      fullDescription: 'Our Pediatrics department provides comprehensive healthcare for infants, children, and adolescents. We focus on preventive care, early detection, and treatment of childhood diseases and developmental issues.',
      services: [
        'Well-Child Checkups',
        'Immunizations',
        'Growth and Development Monitoring',
        'Adolescent Medicine',
        'Pediatric Emergency Care',
        'Neonatal Care',
        'Pediatric Surgery',
        'Child Psychology Services'
      ],
      specialists: [
        'Dr. Emily Rodriguez - Pediatrician',
        'Dr. David Kim - Pediatric Surgeon',
        'Dr. Jennifer Brown - Neonatologist'
      ]
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      icon: '🦴',
      description: 'Bone, joint, and muscle treatment',
      fullDescription: 'Our Orthopedics department specializes in the diagnosis, treatment, and prevention of disorders of the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.',
      services: [
        'Joint Replacement Surgery',
        'Sports Medicine',
        'Fracture Treatment',
        'Arthroscopy',
        'Spine Surgery',
        'Physical Therapy',
        'Orthopedic Trauma Care',
        'Rehabilitation Services'
      ],
      specialists: [
        'Dr. Mark Anderson - Orthopedic Surgeon',
        'Dr. Rachel White - Sports Medicine Specialist',
        'Dr. Kevin Lee - Spine Surgeon'
      ]
    },
    {
      id: 'radiology',
      name: 'Radiology',
      icon: '📡',
      description: 'Advanced medical imaging services',
      fullDescription: 'Our Radiology department provides comprehensive diagnostic imaging services using the latest technology to help diagnose and monitor various medical conditions with precision and accuracy.',
      services: [
        'X-Ray Imaging',
        'CT Scans',
        'MRI Scans',
        'Ultrasound',
        'Mammography',
        'Nuclear Medicine',
        'Interventional Radiology',
        'PET Scans'
      ],
      specialists: [
        'Dr. Susan Taylor - Radiologist',
        'Dr. Thomas Garcia - Interventional Radiologist',
        'Dr. Maria Lopez - Nuclear Medicine Specialist'
      ]
    },
    {
      id: 'emergency',
      name: 'Emergency Medicine',
      icon: '🚑',
      description: '24/7 emergency and trauma care',
      fullDescription: 'Our Emergency Medicine department provides immediate medical care for acute illnesses and injuries. We are equipped to handle all types of medical emergencies with rapid response and advanced life support.',
      services: [
        '24/7 Emergency Room',
        'Trauma Care',
        'Critical Care',
        'Emergency Surgery',
        'Cardiac Emergency Care',
        'Stroke Response Team',
        'Poison Control',
        'Ambulance Services'
      ],
      specialists: [
        'Dr. John Mitchell - Emergency Medicine Physician',
        'Dr. Laura Davis - Trauma Surgeon',
        'Dr. Peter Johnson - Critical Care Specialist'
      ]
    }
  ];

  return (
    <div className="services-page">      
    {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-background">
          <div className="services-hero-overlay"></div>
          <div className="services-hero-pattern"></div>
        </div>
        <div className="container">
          <div className="services-hero-content">
            <h1 className={`page-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Our Medical <span className="text-gradient">Services</span>
            </h1>
            <p className={`hero-description ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Comprehensive healthcare services delivered by expert medical professionals 
              using state-of-the-art technology and evidence-based treatment approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview section">
        <div className="container">
          <div className="services-grid">
            {departments.map((dept, index) => (
              <div key={dept.id} className="service-overview-card card animate-fadeInUp">
                <div className="service-icon">{dept.icon}</div>
                <div className="card-body">
                  <h3 className="card-title">{dept.name}</h3>
                  <p className="card-text">{dept.description}</p>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setActiveTab(index)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="services-detailed section">
        <div className="container">
          <div className="section-title">
            <h2>Detailed Department Information</h2>
            <p>Explore our comprehensive medical departments and the specialized services they offer.</p>
          </div>
          
          <div className="services-tabs">
            <div className="tabs-navigation">
              {departments.map((dept, index) => (
                <button
                  key={dept.id}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="tab-icon">{dept.icon}</span>
                  <span className="tab-name">{dept.name}</span>
                </button>
              ))}
            </div>

            <div className="tab-content">
              <div className="tab-panel">
                <div className="department-header">
                  <div className="department-icon">
                    {departments[activeTab].icon}
                  </div>
                  <div className="department-info">
                    <h3>{departments[activeTab].name}</h3>
                    <p>{departments[activeTab].fullDescription}</p>
                  </div>
                </div>

                <div className="department-details">
                  <div className="services-list">
                    <h4>Services Offered</h4>
                    <ul>
                      {departments[activeTab].services.map((service, index) => (
                        <li key={index}>
                          <span className="service-check">✓</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="specialists-list">
                    <h4>Our Specialists</h4>
                    <ul>
                      {departments[activeTab].specialists.map((specialist, index) => (
                        <li key={index}>
                          <span className="specialist-icon">👨‍⚕️</span>
                          {specialist}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="department-actions">
                  <Link to="/appointment" className="btn btn-primary">
                    Book Appointment
                  </Link>
                  <Link to="/doctors" className="btn btn-secondary">
                    View Doctors
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
