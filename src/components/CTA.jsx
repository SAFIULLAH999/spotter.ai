import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to revolutionize your
            <br />
            <span className="gradient-text">Freight Operations?</span>
          </h2>
          <p className="cta-description">
            From dispatch to safety and hiring. Join 10,000+ logistics pros
            already optimizing with Spotter.AI.
          </p>
          <div className="cta-actions">
            <button className="cta-button primary">
              <span>Request a quote</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="trusted-by">
            <p className="trusted-text">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="company-logos">
              <div className="company-logo">WERNER</div>
              <div className="company-logo">SCHNEIDER</div>
              <div className="company-logo pepsi">PEPSI</div>
              <div className="company-logo">FedEx</div>
              <div className="company-logo">C.H. ROBINSON</div>
              <div className="company-logo">PENSKE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
