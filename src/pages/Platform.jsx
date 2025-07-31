import React from 'react';
import { Brain, Zap, Settings, BarChart3 } from 'lucide-react';

const Platform = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <h1 className="page-title">Spotter AI Platform</h1>
            <p className="page-description">
              Our comprehensive AI platform provides intelligent insights, predictive analytics, 
              and automated optimization for your entire fleet operation.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="platform-features">
            <div className="feature-section">
              <div className="feature-icon">
                <Brain size={48} />
              </div>
              <div className="feature-content">
                <h2>AI-Powered Intelligence</h2>
                <p>
                  Advanced machine learning algorithms analyze your fleet data in real-time, 
                  providing actionable insights and predictive recommendations to optimize 
                  your operations.
                </p>
                <ul>
                  <li>Predictive maintenance scheduling</li>
                  <li>Route optimization algorithms</li>
                  <li>Driver performance analysis</li>
                  <li>Fuel consumption optimization</li>
                </ul>
              </div>
            </div>
            
            <div className="feature-section">
              <div className="feature-icon">
                <BarChart3 size={48} />
              </div>
              <div className="feature-content">
                <h2>Real-time Analytics</h2>
                <p>
                  Comprehensive dashboard with real-time metrics, customizable reports, 
                  and interactive visualizations to help you make data-driven decisions.
                </p>
                <ul>
                  <li>Live fleet monitoring</li>
                  <li>Performance dashboards</li>
                  <li>Custom reporting tools</li>
                  <li>Historical data analysis</li>
                </ul>
              </div>
            </div>
            
            <div className="feature-section">
              <div className="feature-icon">
                <Settings size={48} />
              </div>
              <div className="feature-content">
                <h2>Seamless Integration</h2>
                <p>
                  Easy integration with your existing systems and workflows. Our platform 
                  works with popular fleet management tools and enterprise software.
                </p>
                <ul>
                  <li>API-first architecture</li>
                  <li>Third-party integrations</li>
                  <li>Custom workflows</li>
                  <li>Enterprise-grade security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
