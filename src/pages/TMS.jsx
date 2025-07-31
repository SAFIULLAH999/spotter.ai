import React, { useState, useEffect } from 'react';
import { Activity, Truck, Route, Users, Package, Calendar, ArrowRight, BarChart3, Clock, MapPin, Shield } from 'lucide-react';

const TMS = () => {
  const [operationalData, setOperationalData] = useState({
    activeLoads: 1247,
    onTimeDelivery: 98.5,
    fuelEfficiency: 7.2,
    driverUtilization: 94.3
  });

  const [recentActivities] = useState([
    { id: 1, type: 'load_assigned', driver: 'John Smith', route: 'Chicago → Dallas', time: '2 min ago' },
    { id: 2, type: 'delivery_completed', driver: 'Sarah Johnson', route: 'Atlanta → Miami', time: '5 min ago' },
    { id: 3, type: 'route_optimized', route: 'Denver → Phoenix', savings: '$150', time: '8 min ago' },
    { id: 4, type: 'maintenance_scheduled', vehicle: 'Truck #247', date: 'Tomorrow', time: '12 min ago' }
  ]);

  useEffect(() => {
    // Simulate real-time operational data updates
    const interval = setInterval(() => {
      setOperationalData(prev => ({
        ...prev,
        activeLoads: prev.activeLoads + Math.floor(Math.random() * 10 - 5),
        onTimeDelivery: Math.max(95, Math.min(100, prev.onTimeDelivery + (Math.random() - 0.5) * 0.5)),
        fuelEfficiency: Math.max(6, Math.min(8, prev.fuelEfficiency + (Math.random() - 0.5) * 0.1)),
        driverUtilization: Math.max(85, Math.min(100, prev.driverUtilization + (Math.random() - 0.5) * 1))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container tms-page">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <Activity size={48} />
            </div>
            <h1 className="page-title">Spotter TMS</h1>
            <p className="page-subtitle">Visibility engine for operations</p>
            <p className="page-description">
              Complete transportation management system with data automation, operational visibility,
              and workflow optimization. Streamline your entire logistics operation with AI-powered insights.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">{operationalData.activeLoads.toLocaleString()}</div>
                <div className="stat-label">Active Loads</div>
              </div>
              <div className="stat">
                <div className="stat-number">{operationalData.onTimeDelivery.toFixed(1)}%</div>
                <div className="stat-label">On-Time Delivery</div>
              </div>
              <div className="stat">
                <div className="stat-number">{operationalData.fuelEfficiency.toFixed(1)} MPG</div>
                <div className="stat-label">Fuel Efficiency</div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="cta-button primary">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="cta-button secondary">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TMS Dashboard Section */}
      <section className="dashboard-section">
        <div className="container">
          <div className="dashboard-content">
            <div className="dashboard-info">
              <h2>Real-Time Operations Dashboard</h2>
              <p>Complete visibility into your transportation operations with live data and automated workflows</p>
            </div>

            <div className="tms-dashboard">
              <div className="dashboard-header">
                <h3>Operations Center</h3>
                <div className="live-indicator">
                  <div className="live-dot"></div>
                  <span>Live Data</span>
                </div>
              </div>

              <div className="operational-metrics">
                <div className="metric-card">
                  <div className="metric-icon">
                    <Truck size={24} />
                  </div>
                  <div className="metric-info">
                    <div className="metric-value">{operationalData.activeLoads}</div>
                    <div className="metric-label">Active Loads</div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon">
                    <Clock size={24} />
                  </div>
                  <div className="metric-info">
                    <div className="metric-value">{operationalData.onTimeDelivery.toFixed(1)}%</div>
                    <div className="metric-label">On-Time Delivery</div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon">
                    <Users size={24} />
                  </div>
                  <div className="metric-info">
                    <div className="metric-value">{operationalData.driverUtilization.toFixed(1)}%</div>
                    <div className="metric-label">Driver Utilization</div>
                  </div>
                </div>
              </div>

              <div className="recent-activities">
                <h4>Recent Activities</h4>
                <div className="activities-list">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="activity-item">
                      <div className="activity-content">
                        <div className="activity-text">
                          {activity.type === 'load_assigned' && `Load assigned to ${activity.driver} - ${activity.route}`}
                          {activity.type === 'delivery_completed' && `Delivery completed by ${activity.driver} - ${activity.route}`}
                          {activity.type === 'route_optimized' && `Route optimized: ${activity.route} - Saved ${activity.savings}`}
                          {activity.type === 'maintenance_scheduled' && `Maintenance scheduled for ${activity.vehicle} - ${activity.date}`}
                        </div>
                        <div className="activity-time">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Route size={32} />
              </div>
              <h3>Route Optimization</h3>
              <p>AI-powered route planning that considers traffic, weather, and delivery windows to maximize efficiency and reduce costs.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Package size={32} />
              </div>
              <h3>Load Management</h3>
              <p>Intelligent load planning and cargo optimization with real-time tracking and automated dispatch workflows.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Data Automation</h3>
              <p>Automated data collection and processing with comprehensive reporting and business intelligence dashboards.</p>
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

          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to transform your transportation operations?</h2>
              <p>Join 500+ carriers already using Spotter TMS to streamline operations, reduce costs, and improve efficiency.</p>
              <div className="cta-actions">
                <button className="cta-button primary">
                  Start Free Trial
                  <ArrowRight size={20} />
                </button>
                <button className="cta-button secondary">Schedule Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TMS;
