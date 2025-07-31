import React from 'react';
import { Puzzle, Code, Zap, Settings, Link, Download } from 'lucide-react';

const Extension = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <Puzzle size={48} />
            </div>
            <h1 className="page-title">Spotter Extension</h1>
            <p className="page-description">
              Powerful browser extension and API integrations that extend Spotter's capabilities 
              to your existing workflows and third-party applications.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Code size={32} />
              </div>
              <h3>API Integration</h3>
              <p>Robust REST API that allows seamless integration with your existing business systems and workflows.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Link size={32} />
              </div>
              <h3>Third-party Connectors</h3>
              <p>Pre-built connectors for popular business applications like Salesforce, SAP, and QuickBooks.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Settings size={32} />
              </div>
              <h3>Custom Workflows</h3>
              <p>Create custom automation workflows that integrate Spotter data with your business processes.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Real-time Sync</h3>
              <p>Real-time data synchronization ensures your systems always have the latest fleet information.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Download size={32} />
              </div>
              <h3>Browser Extension</h3>
              <p>Lightweight browser extension for quick access to fleet data and notifications.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Puzzle size={32} />
              </div>
              <h3>Plugin Ecosystem</h3>
              <p>Extensive plugin ecosystem with community-developed extensions and integrations.</p>
            </div>
          </div>
          
          <div className="platform-features">
            <div className="feature-section">
              <div className="feature-icon">
                <Code size={48} />
              </div>
              <div className="feature-content">
                <h2>Developer-Friendly Integration</h2>
                <p>
                  Our extension platform is built for developers with comprehensive documentation, 
                  SDKs, and tools to integrate Spotter into any application or workflow.
                </p>
                <ul>
                  <li>RESTful API with full documentation</li>
                  <li>SDKs for popular programming languages</li>
                  <li>Webhook support for real-time events</li>
                  <li>Sandbox environment for testing</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="download-section">
            <div className="download-content">
              <h2>Download Browser Extension</h2>
              <p>Get instant access to your fleet data with our browser extension.</p>
              <div className="download-buttons">
                <button className="download-btn chrome">
                  <img src="/chrome-icon.svg" alt="Chrome" />
                  Chrome Web Store
                </button>
                <button className="download-btn firefox">
                  <img src="/firefox-icon.svg" alt="Firefox" />
                  Firefox Add-ons
                </button>
                <button className="download-btn edge">
                  <img src="/edge-icon.svg" alt="Edge" />
                  Microsoft Edge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extension;
