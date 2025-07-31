import React from 'react';
import { 
  Brain, 
  MapPin, 
  Shield, 
  BarChart3, 
  Zap, 
  Clock, 
  Truck, 
  AlertTriangle,
  TrendingUp,
  Settings
} from 'lucide-react';
import './Features.css';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Brain size={32} />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze your fleet data to provide actionable insights and predictive maintenance recommendations.',
      benefits: ['Predictive maintenance', 'Performance optimization', 'Cost reduction']
    },
    {
      icon: <MapPin size={32} />,
      title: 'Smart Route Optimization',
      description: 'Intelligent routing system that considers traffic, weather, and vehicle capacity to optimize delivery routes in real-time.',
      benefits: ['Reduced fuel costs', 'Faster deliveries', 'Lower emissions']
    },
    {
      icon: <Shield size={32} />,
      title: 'Advanced Safety Monitoring',
      description: 'Comprehensive safety tracking with driver behavior analysis, collision detection, and real-time alerts.',
      benefits: ['Accident prevention', 'Driver coaching', 'Insurance savings']
    }
  ];

  const additionalFeatures = [
    {
      icon: <BarChart3 size={24} />,
      title: 'Real-time Dashboard',
      description: 'Comprehensive overview of your entire fleet operations'
    },
    {
      icon: <Zap size={24} />,
      title: 'Instant Alerts',
      description: 'Get notified immediately of critical events and issues'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock surveillance of your fleet activities'
    },
    {
      icon: <Truck size={24} />,
      title: 'Vehicle Tracking',
      description: 'Precise GPS tracking with detailed location history'
    },
    {
      icon: <AlertTriangle size={24} />,
      title: 'Maintenance Alerts',
      description: 'Proactive maintenance scheduling and reminders'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Performance Analytics',
      description: 'Detailed reports on efficiency and productivity metrics'
    },
    {
      icon: <Settings size={24} />,
      title: 'Custom Integration',
      description: 'Seamless integration with your existing systems'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        {/* Section Header */}
        <div className="features-header">
          <div className="section-badge">
            <Zap size={16} />
            <span>Powerful Features</span>
          </div>
          <h2 className="section-title">
            Everything you need to manage your fleet
            <span className="gradient-text"> intelligently</span>
          </h2>
          <p className="section-description">
            Our comprehensive AI platform provides all the tools and insights you need 
            to optimize your fleet operations, reduce costs, and improve safety.
          </p>
        </div>

        {/* Main Features */}
        <div className="main-features">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="feature-card main">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-benefits">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="benefit-item">
                      <div className="benefit-check">✓</div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="additional-features">
          <h3 className="grid-title">Additional Capabilities</h3>
          <div className="features-grid">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="feature-card small">
                <div className="feature-icon small">
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h4 className="feature-title small">{feature.title}</h4>
                  <p className="feature-description small">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="features-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to transform your fleet operations?</h3>
            <p className="cta-description">
              Join thousands of fleet managers who trust Spotter.ai to optimize their operations.
            </p>
            <div className="cta-actions">
              <button className="cta-button primary">
                Start Free Trial
              </button>
              <button className="cta-button secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
