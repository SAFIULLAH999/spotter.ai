import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Trucking <span className="gradient-text">Automation</span>
              <br />
              that works for you.
            </h1>

            <div className="hero-actions">
              <button className="cta-button primary">
                Unlock the Future of Freight
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="dashboard-grid">
              <div className="dashboard-card map-card">
                <div className="card-content">
                  <div className="usa-map">
                    <div className="map-gradient"></div>
                    <div className="map-stats">
                      <div className="stat-item">
                        <span className="stat-label">Total: 50k</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Available: 47k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-card crm-card">
                <div className="card-header">
                  <div className="spotter-logo">
                    <div className="logo-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="logo-text">Spotter CRM</span>
                  </div>
                  <div className="card-subtitle">RECRUITING ENGINE</div>
                </div>
                <div className="card-content">
                  <div className="engagement-text">engagement visibility</div>
                </div>
              </div>

              <div className="dashboard-card driver-app-card">
                <div className="card-content">
                  <div className="app-preview">
                    <div className="app-header">VISIT DRIVER APP</div>
                    <div className="app-mockup"></div>
                  </div>
                </div>
              </div>

              <div className="dashboard-card tms-card">
                <div className="card-header">
                  <div className="spotter-logo">
                    <div className="logo-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="logo-text">Spotter TMS</span>
                  </div>
                  <div className="card-subtitle">VISIBILITY ENGINE</div>
                </div>
                <div className="card-content">
                  <div className="tms-text">data automation</div>
                </div>
              </div>

              <div className="dashboard-card safety-card">
                <div className="card-header">
                  <div className="card-subtitle">SAFETY AUTOMATION</div>
                </div>
                <div className="card-content">
                  <div className="safety-score">
                    <div className="score-number">64</div>
                    <div className="score-label">Grade D</div>
                  </div>
                </div>
              </div>

              <div className="dashboard-card loadboard-card">
                <div className="card-header">
                  <div className="card-subtitle">LOAD BOARD AUTOMATION</div>
                </div>
                <div className="card-content">
                  <div className="loadboard-charts">
                    <div className="chart-circle blue"></div>
                    <div className="chart-circle purple"></div>
                  </div>
                  <div className="loadboard-text">browser automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
      </div>
    </section>
  );
};

export default Hero;
