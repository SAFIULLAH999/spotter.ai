import React from 'react';
import { Clipboard, Truck, Route, Users, Package, Calendar } from 'lucide-react';

const TMS = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <Clipboard size={48} />
            </div>
            <h1 className="page-title">Transportation Management System</h1>
            <p className="page-description">
              Comprehensive TMS solution that streamlines your transportation operations, 
              optimizes routes, and manages your entire logistics workflow efficiently.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Route size={32} />
              </div>
              <h3>Route Optimization</h3>
              <p>AI-powered route planning that considers traffic, weather, and delivery windows to optimize efficiency.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Package size={32} />
              </div>
              <h3>Load Management</h3>
              <p>Efficiently manage loads, cargo capacity, and delivery schedules with intelligent load planning.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Driver Management</h3>
              <p>Comprehensive driver scheduling, performance tracking, and communication tools.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Calendar size={32} />
              </div>
              <h3>Dispatch Management</h3>
              <p>Streamlined dispatch operations with real-time communication and automated scheduling.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={32} />
              </div>
              <h3>Fleet Tracking</h3>
              <p>Real-time vehicle tracking with detailed reporting and analytics for complete fleet visibility.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Clipboard size={32} />
              </div>
              <h3>Documentation</h3>
              <p>Digital documentation management for compliance, invoicing, and record keeping.</p>
            </div>
          </div>
          
          <div className="platform-features">
            <div className="feature-section">
              <div className="feature-icon">
                <Route size={48} />
              </div>
              <div className="feature-content">
                <h2>Intelligent Route Planning</h2>
                <p>
                  Our advanced TMS uses machine learning algorithms to create optimal routes 
                  that reduce fuel costs, improve delivery times, and increase customer satisfaction.
                </p>
                <ul>
                  <li>Real-time traffic integration</li>
                  <li>Weather-aware routing</li>
                  <li>Multi-stop optimization</li>
                  <li>Delivery window compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TMS;
