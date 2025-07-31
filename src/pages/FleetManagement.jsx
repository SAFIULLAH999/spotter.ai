import React from 'react';
import { Truck, MapPin, BarChart3, Shield } from 'lucide-react';

const FleetManagement = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <h1 className="page-title">Fleet Management Solutions</h1>
            <p className="page-description">
              Comprehensive fleet management tools powered by AI to optimize your operations, 
              reduce costs, and improve efficiency across your entire fleet.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={32} />
              </div>
              <h3>Vehicle Tracking</h3>
              <p>Real-time GPS tracking with detailed location history and route optimization.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={32} />
              </div>
              <h3>Route Planning</h3>
              <p>AI-powered route optimization considering traffic, weather, and delivery windows.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Performance Analytics</h3>
              <p>Comprehensive reporting and analytics to track fleet performance metrics.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Safety Monitoring</h3>
              <p>Advanced safety features including driver behavior monitoring and alerts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetManagement;
