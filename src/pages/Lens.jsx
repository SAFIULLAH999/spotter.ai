import React from 'react';
import { Search, Eye, BarChart3, MapPin, Clock, Shield } from 'lucide-react';

const Lens = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <Search size={48} />
            </div>
            <h1 className="page-title">Spotter Lens</h1>
            <p className="page-description">
              Advanced AI-powered analytics and insights platform that provides deep visibility 
              into your fleet operations with real-time monitoring and predictive analytics.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Eye size={32} />
              </div>
              <h3>Real-time Visibility</h3>
              <p>Get complete visibility into your fleet operations with real-time tracking and monitoring capabilities.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Advanced Analytics</h3>
              <p>Leverage AI-powered analytics to gain insights into performance, efficiency, and optimization opportunities.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={32} />
              </div>
              <h3>Location Intelligence</h3>
              <p>Track vehicle locations, routes, and geofencing with precise GPS technology and mapping.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3>Predictive Insights</h3>
              <p>Anticipate maintenance needs, route delays, and operational challenges before they occur.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Safety Monitoring</h3>
              <p>Monitor driver behavior, safety metrics, and compliance with comprehensive safety analytics.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Custom Dashboards</h3>
              <p>Create personalized dashboards with the metrics and KPIs that matter most to your business.</p>
            </div>
          </div>
          
          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to gain deeper insights into your fleet?</h2>
              <p>Start using Spotter Lens today and transform your fleet operations with AI-powered analytics.</p>
              <div className="cta-actions">
                <button className="cta-button primary">Start Free Trial</button>
                <button className="cta-button secondary">Schedule Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lens;
