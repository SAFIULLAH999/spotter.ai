import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Building } from 'lucide-react';

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
    alert('Thank you for your interest! We will contact you soon to schedule your demo.');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <h1 className="page-title">Schedule Your Demo</h1>
            <p className="page-description">
              See Spotter.ai in action. Schedule a personalized demo to discover how our 
              AI-powered platform can transform your fleet operations.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="demo-content">
            <div className="demo-info">
              <h2>What you'll see in the demo:</h2>
              <div className="demo-features">
                <div className="demo-feature">
                  <div className="demo-icon">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3>Live Dashboard</h3>
                    <p>Real-time fleet monitoring and analytics</p>
                  </div>
                </div>
                
                <div className="demo-feature">
                  <div className="demo-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3>Route Optimization</h3>
                    <p>AI-powered route planning and optimization</p>
                  </div>
                </div>
                
                <div className="demo-feature">
                  <div className="demo-icon">
                    <User size={24} />
                  </div>
                  <div>
                    <h3>Driver Management</h3>
                    <p>Performance tracking and safety monitoring</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="demo-form">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="fleetSize">Fleet Size</label>
                  <select
                    id="fleetSize"
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleInputChange}
                  >
                    <option value="">Select fleet size</option>
                    <option value="1-10">1-10 vehicles</option>
                    <option value="11-50">11-50 vehicles</option>
                    <option value="51-100">51-100 vehicles</option>
                    <option value="100+">100+ vehicles</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your specific needs or questions..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Schedule Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
