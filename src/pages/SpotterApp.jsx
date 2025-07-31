import React from 'react';
import { Smartphone, MapPin, Bell, Camera, MessageSquare, Download } from 'lucide-react';

const SpotterApp = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <Smartphone size={48} />
            </div>
            <h1 className="page-title">Spotter Mobile App</h1>
            <p className="page-description">
              Powerful mobile application for drivers and fleet managers to stay connected, 
              track performance, and manage operations on the go.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="app-showcase">
            <div className="app-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <MapPin size={32} />
                </div>
                <h3>GPS Tracking</h3>
                <p>Real-time location tracking with route optimization and navigation assistance.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Bell size={32} />
                </div>
                <h3>Push Notifications</h3>
                <p>Instant alerts for dispatch updates, route changes, and important fleet notifications.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Camera size={32} />
                </div>
                <h3>Photo Documentation</h3>
                <p>Capture and upload photos for delivery confirmation, damage reports, and compliance.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <MessageSquare size={32} />
                </div>
                <h3>Driver Communication</h3>
                <p>Secure messaging system for communication between drivers and dispatch teams.</p>
              </div>
            </div>
            
            <div className="app-mockup">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-header">
                    <div className="status-bar">
                      <span>9:41</span>
                      <div className="signal-icons">
                        <span>📶</span>
                        <span>🔋</span>
                      </div>
                    </div>
                    <div className="app-nav">
                      <h2>Spotter</h2>
                      <div className="nav-icons">
                        <Bell size={20} />
                        <MessageSquare size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="app-content">
                    <div className="quick-stats">
                      <div className="stat-item">
                        <div className="stat-value">127</div>
                        <div className="stat-label">Miles Today</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">8.5</div>
                        <div className="stat-label">Hours Driven</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">12</div>
                        <div className="stat-label">Deliveries</div>
                      </div>
                    </div>
                    
                    <div className="current-route">
                      <h3>Current Route</h3>
                      <div className="route-info">
                        <MapPin size={16} />
                        <span>Downtown Warehouse → Customer Location</span>
                      </div>
                      <div className="eta">ETA: 2:30 PM</div>
                    </div>
                    
                    <div className="quick-actions">
                      <button className="action-btn">Start Break</button>
                      <button className="action-btn">Report Issue</button>
                      <button className="action-btn">Take Photo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="download-section">
            <div className="download-content">
              <h2>Download the Spotter App</h2>
              <p>Available for iOS and Android devices. Get started today!</p>
              <div className="download-buttons">
                <button className="download-btn ios">
                  <div className="btn-content">
                    <span className="store-icon">📱</span>
                    <div className="btn-text">
                      <div className="btn-subtitle">Download on the</div>
                      <div className="btn-title">App Store</div>
                    </div>
                  </div>
                </button>
                <button className="download-btn android">
                  <div className="btn-content">
                    <span className="store-icon">🤖</span>
                    <div className="btn-text">
                      <div className="btn-subtitle">Get it on</div>
                      <div className="btn-title">Google Play</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotterApp;
