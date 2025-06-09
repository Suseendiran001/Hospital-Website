import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Appointment.css';

const Appointment = () => {
  const [searchParams] = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    emergencyContact: '',
    
    // Appointment Information
    department: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: 'consultation',
    reason: '',
    symptoms: '',
    priority: 'normal',
    
    // Insurance Information
    hasInsurance: 'no',
    insuranceProvider: '',
    policyNumber: '',
    
    // Additional Information
    previousVisit: 'no',
    medications: '',
    allergies: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Pre-select doctor if coming from doctors page
    const doctorId = searchParams.get('doctor');
    if (doctorId) {
      setFormData(prev => ({ ...prev, doctor: doctorId }));
    }
  }, [searchParams]);

  const departments = [
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'radiology', name: 'Radiology' },
    { id: 'emergency', name: 'Emergency Medicine' },
    { id: 'general', name: 'General Medicine' }
  ];

  const doctors = [
    { id: '1', name: 'Dr. Michael Thompson', department: 'cardiology' },
    { id: '2', name: 'Dr. Sarah Davis', department: 'cardiology' },
    { id: '3', name: 'Dr. Lisa Chen', department: 'neurology' },
    { id: '4', name: 'Dr. Robert Martinez', department: 'neurology' },
    { id: '5', name: 'Dr. Emily Rodriguez', department: 'pediatrics' },
    { id: '6', name: 'Dr. Mark Anderson', department: 'orthopedics' },
    { id: '7', name: 'Dr. Susan Taylor', department: 'radiology' },
    { id: '8', name: 'Dr. John Mitchell', department: 'emergency' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
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
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
    }

    if (step === 2) {
      if (!formData.department) newErrors.department = 'Department is required';
      if (!formData.doctor) newErrors.doctor = 'Doctor selection is required';
      if (!formData.appointmentDate) newErrors.appointmentDate = 'Appointment date is required';
      if (!formData.appointmentTime) newErrors.appointmentTime = 'Appointment time is required';
      if (!formData.reason.trim()) newErrors.reason = 'Reason for visit is required';
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

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Appointment booked successfully! We will contact you soon.');
      // Reset form
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', gender: '',
        address: '', emergencyContact: '', department: '', doctor: '', appointmentDate: '',
        appointmentTime: '', appointmentType: 'consultation', reason: '', symptoms: '',
        priority: 'normal', hasInsurance: 'no', insuranceProvider: '', policyNumber: '',
        previousVisit: 'no', medications: '', allergies: '', notes: ''
      });
      setCurrentStep(1);
    } catch (error) {
      alert('Error booking appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const filteredDoctors = doctors.filter(doctor => 
    !formData.department || doctor.department === formData.department
  );

  return (
    <div className="appointment-page">      {/* Hero Section */}
      <section className="appointment-hero">
        <div className="appointment-hero-background">
          <div className="appointment-hero-overlay"></div>
          <div className="appointment-hero-pattern"></div>
        </div>
        <div className="container">
          <div className="appointment-hero-content">
            <h1 className={`page-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Book Your <span className="text-gradient">Appointment</span>
            </h1>
            <p className={`hero-description ${isVisible ? 'animate-fadeInUp' : ''}`}>
              Schedule your visit with our expert medical professionals. We're here to provide 
              you with the best healthcare experience tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="appointment-form-section section">
        <div className="container">
          <div className="appointment-wrapper">
            {/* Progress Indicator */}
            <div className="progress-indicator">
              <div className={`progress-step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                <div className="step-number">1</div>
                <div className="step-label">Personal Info</div>
              </div>
              <div className="progress-line"></div>
              <div className={`progress-step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                <div className="step-number">2</div>
                <div className="step-label">Appointment</div>
              </div>
              <div className="progress-line"></div>
              <div className={`progress-step ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
                <div className="step-number">3</div>
                <div className="step-label">Additional Info</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="appointment-form">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="form-step animate-fadeInUp">
                  <h2 className="step-title">Personal Information</h2>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={errors.firstName ? 'error' : ''}
                      />
                      {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={errors.lastName ? 'error' : ''}
                      />
                      {errors.lastName && <span className="error-message">{errors.lastName}</span>}
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
                      <label htmlFor="dateOfBirth">Date of Birth *</label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className={errors.dateOfBirth ? 'error' : ''}
                      />
                      {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender">Gender *</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className={errors.gender ? 'error' : ''}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                      {errors.gender && <span className="error-message">{errors.gender}</span>}
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="address">Address</label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Enter your complete address"
                      ></textarea>
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="emergencyContact">Emergency Contact</label>
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        placeholder="Emergency contact name and phone number"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Appointment Information */}
              {currentStep === 2 && (
                <div className="form-step animate-fadeInUp">
                  <h2 className="step-title">Appointment Details</h2>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="department">Department *</label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className={errors.department ? 'error' : ''}
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                          <option key={dept.id} value={dept.id}>{dept.name}</option>
                        ))}
                      </select>
                      {errors.department && <span className="error-message">{errors.department}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="doctor">Preferred Doctor *</label>
                      <select
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                        className={errors.doctor ? 'error' : ''}
                        disabled={!formData.department}
                      >
                        <option value="">Select Doctor</option>
                        {filteredDoctors.map(doctor => (
                          <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                        ))}
                      </select>
                      {errors.doctor && <span className="error-message">{errors.doctor}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="appointmentDate">Preferred Date *</label>
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        className={errors.appointmentDate ? 'error' : ''}
                        min={getMinDate()}
                      />
                      {errors.appointmentDate && <span className="error-message">{errors.appointmentDate}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="appointmentTime">Preferred Time *</label>
                      <select
                        id="appointmentTime"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleInputChange}
                        className={errors.appointmentTime ? 'error' : ''}
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.appointmentTime && <span className="error-message">{errors.appointmentTime}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="appointmentType">Appointment Type</label>
                      <select
                        id="appointmentType"
                        name="appointmentType"
                        value={formData.appointmentType}
                        onChange={handleInputChange}
                      >
                        <option value="consultation">Consultation</option>
                        <option value="follow-up">Follow-up</option>
                        <option value="routine-checkup">Routine Checkup</option>
                        <option value="urgent">Urgent Care</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="priority">Priority Level</label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="reason">Reason for Visit *</label>
                      <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        className={errors.reason ? 'error' : ''}
                        rows="3"
                        placeholder="Please describe the reason for your visit"
                      ></textarea>
                      {errors.reason && <span className="error-message">{errors.reason}</span>}
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="symptoms">Current Symptoms</label>
                      <textarea
                        id="symptoms"
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Please describe any symptoms you're experiencing"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Information */}
              {currentStep === 3 && (
                <div className="form-step animate-fadeInUp">
                  <h2 className="step-title">Additional Information</h2>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="hasInsurance">Do you have insurance?</label>
                      <select
                        id="hasInsurance"
                        name="hasInsurance"
                        value={formData.hasInsurance}
                        onChange={handleInputChange}
                      >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>

                    {formData.hasInsurance === 'yes' && (
                      <>
                        <div className="form-group">
                          <label htmlFor="insuranceProvider">Insurance Provider</label>
                          <input
                            type="text"
                            id="insuranceProvider"
                            name="insuranceProvider"
                            value={formData.insuranceProvider}
                            onChange={handleInputChange}
                            placeholder="Insurance company name"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="policyNumber">Policy Number</label>
                          <input
                            type="text"
                            id="policyNumber"
                            name="policyNumber"
                            value={formData.policyNumber}
                            onChange={handleInputChange}
                            placeholder="Insurance policy number"
                          />
                        </div>
                      </>
                    )}

                    <div className="form-group">
                      <label htmlFor="previousVisit">Have you visited us before?</label>
                      <select
                        id="previousVisit"
                        name="previousVisit"
                        value={formData.previousVisit}
                        onChange={handleInputChange}
                      >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="medications">Current Medications</label>
                      <textarea
                        id="medications"
                        name="medications"
                        value={formData.medications}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Please list any medications you're currently taking"
                      ></textarea>
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="allergies">Known Allergies</label>
                      <textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Please list any known allergies"
                      ></textarea>
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="notes">Additional Notes</label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Any additional information you'd like to share"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              <div className="form-navigation">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="btn btn-secondary"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn btn-primary"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="appointment-info section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📅</div>
              <h3>Easy Scheduling</h3>
              <p>Book your appointment online 24/7 with our user-friendly booking system.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Flexible Timing</h3>
              <p>Choose from multiple time slots that fit your busy schedule.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🔔</div>
              <h3>Appointment Reminders</h3>
              <p>Receive SMS and email reminders before your appointment.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">💳</div>
              <h3>Insurance Accepted</h3>
              <p>We accept most major insurance plans and offer flexible payment options.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
