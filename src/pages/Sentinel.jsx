import React from 'react';
import { Shield, AlertTriangle, Eye, Bell, Lock, Activity } from 'lucide-react';

const Sentinel = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <Shield size={48} />
            </div>
            <h1 className="page-title">Spotter Sentinel</h1>
            <p className="page-description">
              Advanced safety and security monitoring system that protects your fleet, 
              drivers, and cargo with AI-powered threat detection and real-time alerts.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <AlertTriangle size={32} />
              </div>
              <h3>Threat Detection</h3>
              <p>AI-powered threat detection that identifies potential security risks and safety hazards in real-time.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Eye size={32} />
              </div>
              <h3>Video Monitoring</h3>
              <p>Advanced video surveillance with AI analysis for driver behavior and cargo security monitoring.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Bell size={32} />
              </div>
              <h3>Real-time Alerts</h3>
              <p>Instant notifications for safety violations, security breaches, and emergency situations.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Lock size={32} />
              </div>
              <h3>Cargo Security</h3>
              <p>Comprehensive cargo protection with tamper detection and unauthorized access alerts.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Activity size={32} />
              </div>
              <h3>Driver Monitoring</h3>
              <p>Monitor driver fatigue, distraction, and compliance with safety protocols and regulations.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Compliance Tracking</h3>
              <p>Automated compliance monitoring for safety regulations and industry standards.</p>
            </div>
          </div>
          
          <div className="platform-features">
            <div className="feature-section">
              <div className="feature-icon">
                <Shield size={48} />
              </div>
              <div className="feature-content">
                <h2>Comprehensive Safety Protection</h2>
                <p>
                  Sentinel provides 360-degree protection for your fleet operations with advanced 
                  AI monitoring, predictive safety analytics, and automated emergency response.
                </p>
                <ul>
                  <li>Driver behavior analysis</li>
                  <li>Fatigue and distraction detection</li>
                  <li>Emergency response automation</li>
                  <li>Compliance reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentinel;
