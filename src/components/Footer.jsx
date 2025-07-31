import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <div className="footer-brand">
              <div className="logo-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="brand-text">spotter</span>
            </div>
            <p className="footer-description">
              A fully autonomous truckload dispatcher helping owner operators and carriers 
              scale their logistics business with AI-powered automation.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Products</h3>
            <ul className="footer-links">
              <li><a href="/lens" className="footer-link">Spotter Lens</a></li>
              <li><a href="/tms" className="footer-link">Spotter TMS</a></li>
              <li><a href="/sentinel" className="footer-link">Spotter Sentinel</a></li>
              <li><a href="/extension" className="footer-link">Load Board Extension</a></li>
              <li><a href="/spotter-app" className="footer-link">Driver App</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Solutions</h3>
            <ul className="footer-links">
              <li><a href="/fleet-management" className="footer-link">Fleet Management</a></li>
              <li><a href="/platform" className="footer-link">AI Platform</a></li>
              <li><a href="/demo" className="footer-link">Request Demo</a></li>
              <li><a href="/loan-calculators" className="footer-link">Loan Calculators</a></li>
              <li><a href="/insights" className="footer-link">Market Insights</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
              <li><a href="/press" className="footer-link">Press</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><a href="/help" className="footer-link">Help Center</a></li>
              <li><a href="/docs" className="footer-link">Documentation</a></li>
              <li><a href="/api" className="footer-link">API Reference</a></li>
              <li><a href="/status" className="footer-link">System Status</a></li>
              <li><a href="/security" className="footer-link">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Spotter Labs, Inc. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
              <a href="/terms" className="footer-bottom-link">Terms of Service</a>
              <a href="/cookies" className="footer-bottom-link">Cookie Policy</a>
              <a href="/security" className="footer-bottom-link">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
