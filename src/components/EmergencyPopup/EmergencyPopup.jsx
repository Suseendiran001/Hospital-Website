import { useState, useEffect } from 'react';
import './EmergencyPopup.css';

const EmergencyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className={`emergency-popup ${isMinimized ? 'minimized' : ''}`}>
      <div className="emergency-header">
        <div className="emergency-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="emergency-title">
          <h4>Emergency Helpline</h4>
          <span>24/7 Available</span>
        </div>
        <div className="emergency-controls">
          <button 
            className="minimize-btn"
            onClick={handleMinimize}
            aria-label={isMinimized ? "Expand" : "Minimize"}
          >
            {isMinimized ? '+' : '−'}
          </button>
          <button 
            className="close-btn"
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
        {!isMinimized && (
        <div className="emergency-content">
          <div className="emergency-main">
            <a href="tel:+15559110000" className="emergency-call">
              <div className="call-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="call-details">
                <span className="call-number">111</span>
                <span className="call-text">Emergency</span>
              </div>
            </a>
            
            <div className="emergency-services">
              <div className="service-item">
                <span className="service-icon">🚑</span>
                <span className="service-text">Ambulance</span>
              </div>
              <div className="service-item">
                <span className="service-icon">🏥</span>
                <span className="service-text">ER</span>
              </div>
              <div className="service-item">
                <span className="service-icon">⚕️</span>
                <span className="service-text">Critical</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyPopup;
