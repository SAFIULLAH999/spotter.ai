import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);
  const [stats, setStats] = useState({
    totalLoads: 47000,
    availableLoads: 43500,
    safetyScore: 64,
    gradeLevel: 'D'
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalLoads: prev.totalLoads + Math.floor(Math.random() * 10),
        availableLoads: prev.availableLoads + Math.floor(Math.random() * 8),
        safetyScore: Math.max(60, Math.min(100, prev.safetyScore + (Math.random() - 0.5) * 2))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = () => {
    navigate('/demo');
  };

  const handleCardClick = (cardType) => {
    switch(cardType) {
      case 'crm':
        navigate('/lens');
        break;
      case 'tms':
        navigate('/tms');
        break;
      case 'safety':
        navigate('/sentinel');
        break;
      case 'app':
        navigate('/spotter-app');
        break;
      case 'extension':
        navigate('/extension');
        break;
      default:
        break;
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Trucking <span className="gradient-text">Automation</span>
              <br />
              that works for you.
            </h1>

            <div className="hero-actions">
              <button className="cta-button primary" onClick={handleCTAClick}>
                Unlock the Future of Freight
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="dashboard-grid">
              <div className="dashboard-card map-card">
                <div className="card-content">
                  <div className="usa-map">
                    <div className="map-gradient"></div>
                    <div className="map-stats">
                      <div className="stat-item">
                        <span className="stat-label">Total: {(stats.totalLoads / 1000).toFixed(0)}k</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Available: {(stats.availableLoads / 1000).toFixed(0)}k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="dashboard-card crm-card"
                onClick={() => handleCardClick('crm')}
                onMouseEnter={() => setActiveCard('crm')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-header">
                  <div className="spotter-logo">
                    <div className="logo-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="logo-text">Spotter CRM</span>
                  </div>
                  <div className="card-subtitle">RECRUITING ENGINE</div>
                </div>
                <div className="card-content">
                  <div className="engagement-text">engagement visibility</div>
                  {activeCard === 'crm' && (
                    <div className="card-overlay">
                      <span>Click to explore</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="dashboard-card driver-app-card">
                <div className="card-content">
                  <div className="app-preview">
                    <div className="app-header">VISIT DRIVER APP</div>
                    <div className="app-mockup"></div>
                  </div>
                </div>
              </div>

              <div className="dashboard-card tms-card">
                <div className="card-header">
                  <div className="spotter-logo">
                    <div className="logo-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="logo-text">Spotter TMS</span>
                  </div>
                  <div className="card-subtitle">VISIBILITY ENGINE</div>
                </div>
                <div className="card-content">
                  <div className="tms-text">data automation</div>
                </div>
              </div>

              <div
                className="dashboard-card safety-card"
                onClick={() => handleCardClick('safety')}
                onMouseEnter={() => setActiveCard('safety')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-header">
                  <div className="card-subtitle">SAFETY AUTOMATION</div>
                </div>
                <div className="card-content">
                  <div className="safety-score">
                    <div className="score-number">{Math.round(stats.safetyScore)}</div>
                    <div className="score-label">Grade {stats.safetyScore >= 90 ? 'A' : stats.safetyScore >= 80 ? 'B' : stats.safetyScore >= 70 ? 'C' : 'D'}</div>
                  </div>
                  {activeCard === 'safety' && (
                    <div className="card-overlay">
                      <span>Click to explore</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="dashboard-card loadboard-card">
                <div className="card-header">
                  <div className="card-subtitle">LOAD BOARD AUTOMATION</div>
                </div>
                <div className="card-content">
                  <div className="loadboard-charts">
                    <div className="chart-circle blue"></div>
                    <div className="chart-circle purple"></div>
                  </div>
                  <div className="loadboard-text">browser automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
      </div>
    </section>
  );
};

export default Hero;
