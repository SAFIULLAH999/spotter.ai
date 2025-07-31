import React from 'react';
import { ArrowRight, Play, Zap, Shield, BarChart3 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Zap size={16} />
              <span>AI-Powered Fleet Intelligence</span>
            </div>
            
            <h1 className="hero-title">
              Transform Your Fleet with
              <span className="gradient-text"> AI-Driven Insights</span>
            </h1>
            
            <p className="hero-description">
              Spotter.ai revolutionizes fleet management with cutting-edge artificial intelligence, 
              providing real-time analytics, predictive maintenance, and optimized routing to 
              maximize efficiency and reduce costs.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Fleet Managers</div>
              </div>
              <div className="stat">
                <div className="stat-number">25%</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="cta-button primary">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="cta-button secondary">
                <Play size={18} />
                Watch Demo
              </button>
            </div>
            
            <div className="hero-trust">
              <p className="trust-text">Trusted by industry leaders</p>
              <div className="trust-logos">
                <div className="trust-logo">Company A</div>
                <div className="trust-logo">Company B</div>
                <div className="trust-logo">Company C</div>
                <div className="trust-logo">Company D</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-controls">
                  <div className="control red"></div>
                  <div className="control yellow"></div>
                  <div className="control green"></div>
                </div>
                <div className="mockup-title">Spotter.ai Dashboard</div>
              </div>
              
              <div className="mockup-content">
                <div className="metric-card">
                  <div className="metric-icon">
                    <BarChart3 size={24} />
                  </div>
                  <div className="metric-info">
                    <div className="metric-value">2,847</div>
                    <div className="metric-label">Active Vehicles</div>
                  </div>
                  <div className="metric-trend positive">+12%</div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-icon">
                    <Shield size={24} />
                  </div>
                  <div className="metric-info">
                    <div className="metric-value">98.7%</div>
                    <div className="metric-label">Safety Score</div>
                  </div>
                  <div className="metric-trend positive">+5%</div>
                </div>
                
                <div className="chart-area">
                  <div className="chart-header">
                    <h4>Fleet Performance</h4>
                    <div className="chart-legend">
                      <div className="legend-item">
                        <div className="legend-color primary"></div>
                        <span>Efficiency</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color secondary"></div>
                        <span>Costs</span>
                      </div>
                    </div>
                  </div>
                  <div className="chart-placeholder">
                    <div className="chart-bars">
                      <div className="bar" style={{height: '60%'}}></div>
                      <div className="bar" style={{height: '80%'}}></div>
                      <div className="bar" style={{height: '45%'}}></div>
                      <div className="bar" style={{height: '90%'}}></div>
                      <div className="bar" style={{height: '70%'}}></div>
                      <div className="bar" style={{height: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-card card-1">
                <div className="card-icon">🚛</div>
                <div className="card-text">Real-time Tracking</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">⚡</div>
                <div className="card-text">AI Optimization</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">📊</div>
                <div className="card-text">Smart Analytics</div>
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
