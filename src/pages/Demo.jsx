import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Building, Play, ArrowRight, CheckCircle, Truck } from 'lucide-react';

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '',
    interests: [],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const demoFeatures = [
    {
      title: 'Live Market Intelligence',
      description: 'See real-time freight rates and market trends with Spotter Lens',
      duration: '5 min',
      icon: <Calendar size={24} />
    },
    {
      title: 'Autonomous Dispatcher',
      description: 'Watch AI find and negotiate loads automatically',
      duration: '10 min',
      icon: <Clock size={24} />
    },
    {
      title: 'TMS Operations Center',
      description: 'Explore comprehensive fleet management and visibility tools',
      duration: '8 min',
      icon: <Truck size={24} />
    },
    {
      title: 'Safety & Compliance',
      description: 'Review driver scoring and automated safety monitoring',
      duration: '7 min',
      icon: <CheckCircle size={24} />
    }
  ];

  const interests = [
    'Spotter Lens - Market Intelligence',
    'Spotter TMS - Transportation Management',
    'Spotter Sentinel - Safety & Compliance',
    'Spotter CRM - Driver Recruitment',
    'Load Board Extension',
    'Driver Mobile App'
  ];

  if (isSubmitted) {
    return (
      <div className="page-container demo-page">
        <div className="demo-success">
          <div className="container">
            <div className="success-content">
              <div className="success-icon">
                <CheckCircle size={64} />
              </div>
              <h1>Demo Request Submitted!</h1>
              <p>
                Thank you for your interest in Spotter.ai. Our team will contact you within 24 hours
                to schedule your personalized demo.
              </p>
              <div className="next-steps">
                <h3>What happens next?</h3>
                <ul>
                  <li>Our logistics expert will call you to understand your specific needs</li>
                  <li>We'll schedule a 30-minute personalized demo at your convenience</li>
                  <li>You'll see how Spotter.ai can transform your operations</li>
                  <li>Get answers to all your questions from our product specialists</li>
                </ul>
              </div>
              <div className="success-actions">
                <button className="cta-button primary" onClick={() => window.location.href = '/'}>
                  Return to Home
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container demo-page">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <Play size={48} />
            </div>
            <h1 className="page-title">Request a Demo</h1>
            <p className="page-subtitle">See Spotter.ai in action</p>
            <p className="page-description">
              Get a personalized demo of our AI-powered logistics platform and discover how
              we can help you automate your freight operations and increase profitability.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="demo-content">
            <div className="demo-info">
              <h2>What you'll see in the demo</h2>
              <div className="demo-features">
                {demoFeatures.map((feature, index) => (
                  <div key={index} className="demo-feature">
                    <div className="feature-number">{index + 1}</div>
                    <div className="demo-icon">
                      {feature.icon}
                    </div>
                    <div className="feature-details">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <span className="feature-duration">{feature.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="demo-benefits">
                <h3>Why request a demo?</h3>
                <ul>
                  <li>See real ROI calculations based on your fleet size</li>
                  <li>Get personalized recommendations for your operation</li>
                  <li>Ask questions directly to our product experts</li>
                  <li>Learn about implementation and onboarding process</li>
                  <li>Discover integration options with your current systems</li>
                </ul>
              </div>
            </div>
            
            <div className="demo-form-container">
              <form onSubmit={handleSubmit} className="demo-form">
                <h2>Schedule Your Demo</h2>
                <p>Fill out the form below and we'll contact you within 24 hours</p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <div className="input-wrapper">
                      <User size={20} />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <div className="input-wrapper">
                      <User size={20} />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Smith"
                      />
                    </div>
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
                  <label>What interests you most? (Select all that apply)</label>
                  <div className="checkbox-group">
                    {interests.map((interest, index) => (
                      <label key={index} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                        />
                        <span className="checkmark"></span>
                        {interest}
                      </label>
                    ))}
                  </div>
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

                <button type="submit" className="cta-button primary full-width" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                  {!isSubmitting && <ArrowRight size={20} />}
                </button>

                <p className="form-disclaimer">
                  By submitting this form, you agree to receive communications from Spotter.ai.
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
