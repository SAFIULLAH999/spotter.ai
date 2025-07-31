import React from 'react';
import { ArrowRight, Truck, Clock, DollarSign, TrendingUp } from 'lucide-react';
import './AutonomousDispatcher.css';

const AutonomousDispatcher = () => {
  return (
    <section className="autonomous-dispatcher">
      <div className="dispatcher-container">
        <div className="dispatcher-content">
          <div className="dispatcher-text">
            <div className="section-badge">
              <Truck size={16} />
              <span>Autonomous Dispatcher</span>
            </div>
            
            <h2 className="dispatcher-title">
              A fully autonomous truckload dispatcher helping owner operators and carriers 
              <span className="gradient-text"> scale their logistics business</span>
            </h2>
            
            <p className="dispatcher-description">
              Our AI-powered dispatcher works 24/7 to find the best loads, negotiate rates, 
              and manage your fleet operations automatically. No more manual load searching 
              or rate negotiations - just profitable loads delivered to your drivers.
            </p>
            
            <div className="dispatcher-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Clock size={24} />
                </div>
                <div className="feature-content">
                  <h4>24/7 Operation</h4>
                  <p>Never miss a load opportunity with round-the-clock automation</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <DollarSign size={24} />
                </div>
                <div className="feature-content">
                  <h4>Rate Optimization</h4>
                  <p>AI negotiates the best rates based on market data and trends</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="feature-content">
                  <h4>Business Growth</h4>
                  <p>Scale your operations without increasing overhead costs</p>
                </div>
              </div>
            </div>
            
            <div className="dispatcher-actions">
              <button className="cta-button primary">
                Get Started Today
                <ArrowRight size={20} />
              </button>
              <button className="cta-button secondary">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="dispatcher-visual">
            <div className="dispatcher-dashboard">
              <div className="dashboard-header">
                <div className="header-title">Autonomous Dispatcher</div>
                <div className="status-indicator">
                  <div className="status-dot active"></div>
                  <span>Active</span>
                </div>
              </div>
              
              <div className="dashboard-stats">
                <div className="stat-card">
                  <div className="stat-number">247</div>
                  <div className="stat-label">Loads Found</div>
                  <div className="stat-change positive">+12%</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-number">$2.85</div>
                  <div className="stat-label">Avg Rate/Mile</div>
                  <div className="stat-change positive">+8%</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-number">98.5%</div>
                  <div className="stat-label">On-Time Rate</div>
                  <div className="stat-change positive">+2%</div>
                </div>
              </div>
              
              <div className="recent-loads">
                <div className="loads-header">Recent Loads</div>
                <div className="load-item">
                  <div className="load-route">Chicago, IL → Dallas, TX</div>
                  <div className="load-rate">$2,450</div>
                  <div className="load-status booked">Booked</div>
                </div>
                <div className="load-item">
                  <div className="load-route">Atlanta, GA → Miami, FL</div>
                  <div className="load-rate">$1,850</div>
                  <div className="load-status negotiating">Negotiating</div>
                </div>
                <div className="load-item">
                  <div className="load-route">Denver, CO → Phoenix, AZ</div>
                  <div className="load-rate">$1,950</div>
                  <div className="load-status pending">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousDispatcher;
