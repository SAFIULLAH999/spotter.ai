import React from 'react';
import { TrendingUp, Users, Truck, DollarSign } from 'lucide-react';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      icon: <TrendingUp size={32} />,
      number: "10,000+",
      label: "Logistics Professionals",
      description: "Trust Spotter.AI for their operations"
    },
    {
      icon: <Users size={32} />,
      number: "500+",
      label: "Active Carriers",
      description: "Using our autonomous dispatcher"
    },
    {
      icon: <Truck size={32} />,
      number: "50,000+",
      label: "Loads Processed",
      description: "Monthly through our platform"
    },
    {
      icon: <DollarSign size={32} />,
      number: "$2.8M+",
      label: "Revenue Generated",
      description: "For our carrier partners monthly"
    }
  ];

  return (
    <section className="statistics">
      <div className="statistics-container">
        <div className="statistics-header">
          <h2 className="statistics-title">
            Trusted by the <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="statistics-description">
            Join thousands of logistics professionals who are already transforming 
            their operations with Spotter.AI's cutting-edge automation technology.
          </p>
        </div>
        
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="statistics-testimonial">
          <div className="testimonial-content">
            <blockquote className="testimonial-quote">
              "Spotter.AI has revolutionized our dispatch operations. We've seen a 40% 
              increase in efficiency and our drivers are happier with the consistent, 
              high-quality loads."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-info">
                <div className="author-name">Mike Johnson</div>
                <div className="author-title">Fleet Manager, TransLogistics Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
