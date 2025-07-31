import React from 'react';
import { BarChart3, Users, Smartphone, Activity, Shield, Layers } from 'lucide-react';
import './Features.css';

const Features = () => {
  const capabilities = [
    {
      icon: <BarChart3 size={48} />,
      title: "Spotter Lens",
      subtitle: "Market Intelligence at your fingertips",
      description: "Real-time freight market data analytics and comprehensive reporting with pricing insights.",
      color: "teal"
    },
    {
      icon: <Users size={48} />,
      title: "Spotter CRM",
      subtitle: "Recruiting engine with visibility",
      description: "Streamline your recruiting process with engagement tracking and performance visibility.",
      color: "blue"
    },
    {
      icon: <Smartphone size={48} />,
      title: "Driver App",
      subtitle: "Load optimization made simple",
      description: "AI-powered load booking and matching system with real-time performance metrics.",
      color: "cyan"
    },
    {
      icon: <Activity size={48} />,
      title: "Spotter TMS",
      subtitle: "Visibility engine for operations",
      description: "Complete transportation management system with data automation and operational visibility.",
      color: "teal"
    },
    {
      icon: <Shield size={48} />,
      title: "Spotter Sentinel",
      subtitle: "Safety automation and scoring",
      description: "Advanced driver scoring system with safety automation and compliance monitoring.",
      color: "orange"
    },
    {
      icon: <Layers size={48} />,
      title: "Load Board Extension",
      subtitle: "Browser automation for efficiency",
      description: "Chrome and Firefox extension that automates load board workflows with advanced filtering.",
      color: "purple"
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">
            Explore Spotter's <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="section-description">
            Everything you need to optimize your logistics operations, powered by cutting-edge AI
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <div key={index} className={`capability-card ${capability.color}`}>
              <div className="capability-icon">
                {capability.icon}
              </div>
              <div className="capability-content">
                <h3 className="capability-title">{capability.title}</h3>
                <p className="capability-subtitle">{capability.subtitle}</p>
                <p className="capability-description">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
