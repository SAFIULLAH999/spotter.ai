import React, { useState } from 'react';
import { ArrowRight, BarChart3, Users, Shield, Smartphone, Activity, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: 'lens',
      icon: <BarChart3 size={32} />,
      name: 'Spotter Lens',
      tagline: 'Market Intelligence at your fingertips',
      description: 'Get real-time freight market insights, rate analytics, and comprehensive reporting to make data-driven decisions for your logistics business.',
      features: [
        'Real-time market rates',
        'Lane analytics',
        'Competitive intelligence',
        'Custom reporting'
      ],
      color: 'teal'
    },
    {
      id: 'crm',
      icon: <Users size={32} />,
      name: 'Spotter CRM',
      tagline: 'Recruiting engine with visibility',
      description: 'Streamline your driver recruitment process with advanced tracking, engagement analytics, and automated workflows.',
      features: [
        'Driver recruitment tracking',
        'Engagement analytics',
        'Automated follow-ups',
        'Performance metrics'
      ],
      color: 'blue'
    },
    {
      id: 'sentinel',
      icon: <Shield size={32} />,
      name: 'Spotter Sentinel',
      tagline: 'Safety automation and scoring',
      description: 'Advanced driver scoring system with comprehensive background checks, MVR reports, and safety automation.',
      features: [
        'Instant background checks',
        'MVR report generation',
        'Safety score calculation',
        'Compliance monitoring'
      ],
      color: 'orange'
    },
    {
      id: 'app',
      icon: <Smartphone size={32} />,
      name: 'Driver App',
      tagline: 'Load optimization made simple',
      description: 'Mobile app for drivers with load booking, route optimization, and real-time communication with dispatch.',
      features: [
        'Load booking',
        'Route optimization',
        'Real-time tracking',
        'Driver communication'
      ],
      color: 'cyan'
    },
    {
      id: 'tms',
      icon: <Activity size={32} />,
      name: 'Spotter TMS',
      tagline: 'Visibility engine for operations',
      description: 'Complete transportation management system with data automation, operational visibility, and workflow optimization.',
      features: [
        'Load management',
        'Data automation',
        'Operational visibility',
        'Workflow optimization'
      ],
      color: 'green'
    },
    {
      id: 'extension',
      icon: <Layers size={32} />,
      name: 'Load Board Extension',
      tagline: 'Browser automation for efficiency',
      description: 'Chrome and Firefox extension that automates load board workflows with advanced filtering and booking capabilities.',
      features: [
        'Automated load searching',
        'Advanced filtering',
        'One-click booking',
        'Multi-board support'
      ],
      color: 'purple'
    }
  ];

  const handleLearnMore = () => {
    const product = products[activeProduct];
    switch(product.id) {
      case 'lens':
        navigate('/lens');
        break;
      case 'crm':
        navigate('/lens'); // CRM functionality is part of Lens
        break;
      case 'sentinel':
        navigate('/sentinel');
        break;
      case 'app':
        navigate('/spotter-app');
        break;
      case 'tms':
        navigate('/tms');
        break;
      case 'extension':
        navigate('/extension');
        break;
      default:
        navigate('/demo');
    }
  };

  const handleTryDemo = () => {
    navigate('/demo');
  };

  return (
    <section className="product-showcase">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">
            Complete <span className="gradient-text">Logistics Platform</span>
          </h2>
          <p className="showcase-description">
            Everything you need to run a modern logistics operation, powered by AI and designed for scale.
          </p>
        </div>

        <div className="showcase-content">
          <div className="product-tabs">
            {products.map((product, index) => (
              <button
                key={product.id}
                className={`product-tab ${activeProduct === index ? 'active' : ''} ${product.color}`}
                onClick={() => setActiveProduct(index)}
              >
                <div className="tab-icon">
                  {product.icon}
                </div>
                <div className="tab-content">
                  <div className="tab-name">{product.name}</div>
                  <div className="tab-tagline">{product.tagline}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="product-details">
            <div className="product-info">
              <div className="product-header">
                <div className={`product-icon ${products[activeProduct].color}`}>
                  {products[activeProduct].icon}
                </div>
                <div>
                  <h3 className="product-name">{products[activeProduct].name}</h3>
                  <p className="product-tagline">{products[activeProduct].tagline}</p>
                </div>
              </div>
              
              <p className="product-description">
                {products[activeProduct].description}
              </p>
              
              <div className="product-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {products[activeProduct].features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <div className="feature-check">✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="product-actions">
                <button className="cta-button primary" onClick={handleLearnMore}>
                  Learn More
                  <ArrowRight size={20} />
                </button>
                <button className="cta-button secondary" onClick={handleTryDemo}>
                  Try Demo
                </button>
              </div>
            </div>
            
            <div className="product-visual">
              <div className={`product-mockup ${products[activeProduct].color}`}>
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <div className="control red"></div>
                    <div className="control yellow"></div>
                    <div className="control green"></div>
                  </div>
                  <div className="mockup-title">{products[activeProduct].name}</div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-placeholder">
                    <div className={`placeholder-icon ${products[activeProduct].color}`}>
                      {products[activeProduct].icon}
                    </div>
                    <div className="placeholder-text">
                      {products[activeProduct].name} Interface
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
