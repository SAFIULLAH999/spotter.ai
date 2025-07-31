import React, { useState, useEffect } from 'react';
import { Search, Eye, BarChart3, MapPin, Clock, Shield, ArrowRight, TrendingUp, DollarSign, Users, Target } from 'lucide-react';

const Lens = () => {
  const [marketData, setMarketData] = useState({
    avgRate: 2.85,
    totalLoads: 15420,
    marketTrend: 8.5,
    capacityRatio: 0.85,
    loadToTruck: 3.2
  });

  const [topLanes] = useState([
    { from: 'Chicago, IL', to: 'Dallas, TX', rate: '$2,450', trend: '+5%', volume: 1250 },
    { from: 'Atlanta, GA', to: 'Miami, FL', rate: '$1,850', trend: '+12%', volume: 980 },
    { from: 'Los Angeles, CA', to: 'Phoenix, AZ', rate: '$1,650', trend: '-3%', volume: 1100 },
    { from: 'Denver, CO', to: 'Salt Lake City, UT', rate: '$1,950', trend: '+7%', volume: 750 }
  ]);

  useEffect(() => {
    // Simulate real-time market data updates
    const interval = setInterval(() => {
      setMarketData(prev => ({
        ...prev,
        avgRate: Math.max(2.0, Math.min(4.0, prev.avgRate + (Math.random() - 0.5) * 0.05)),
        totalLoads: prev.totalLoads + Math.floor(Math.random() * 50 - 25),
        marketTrend: Math.max(-10, Math.min(20, prev.marketTrend + (Math.random() - 0.5) * 0.5))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container lens-page">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <BarChart3 size={48} />
            </div>
            <h1 className="page-title">Spotter Lens</h1>
            <p className="page-subtitle">Market Intelligence at your fingertips</p>
            <p className="page-description">
              Get real-time freight market insights, rate analytics, and comprehensive reporting
              to make data-driven decisions for your logistics business. Access the most comprehensive
              freight market intelligence platform in the industry.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">${marketData.avgRate.toFixed(2)}</div>
                <div className="stat-label">Avg Rate/Mile</div>
              </div>
              <div className="stat">
                <div className="stat-number">{marketData.totalLoads.toLocaleString()}</div>
                <div className="stat-label">Daily Loads</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Active Lanes</div>
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

      {/* Market Intelligence Dashboard */}
      <section className="dashboard-section">
        <div className="container">
          <div className="dashboard-content">
            <div className="dashboard-info">
              <h2>Live Market Intelligence Dashboard</h2>
              <p>Real-time freight market data with comprehensive analytics and insights</p>
            </div>

            <div className="lens-dashboard">
              <div className="dashboard-header">
                <h3>Market Overview</h3>
                <div className="live-indicator">
                  <div className="live-dot"></div>
                  <span>Live Data</span>
                </div>
              </div>

              <div className="market-metrics">
                <div className="market-metric">
                  <div className="metric-label">Market Trend</div>
                  <div className={`metric-value ${marketData.marketTrend > 0 ? 'positive' : 'negative'}`}>
                    {marketData.marketTrend > 0 ? '+' : ''}{marketData.marketTrend.toFixed(1)}%
                  </div>
                </div>
                <div className="market-metric">
                  <div className="metric-label">Capacity Ratio</div>
                  <div className="metric-value">{marketData.capacityRatio.toFixed(2)}</div>
                </div>
                <div className="market-metric">
                  <div className="metric-label">Load-to-Truck</div>
                  <div className="metric-value">{marketData.loadToTruck.toFixed(1)}:1</div>
                </div>
              </div>

              <div className="top-lanes">
                <h4>Top Performing Lanes</h4>
                <div className="lanes-list">
                  {topLanes.map((lane, index) => (
                    <div key={index} className="lane-item">
                      <div className="lane-route">
                        <span className="from">{lane.from}</span>
                        <ArrowRight size={16} className="arrow" />
                        <span className="to">{lane.to}</span>
                      </div>
                      <div className="lane-details">
                        <div className="lane-rate">{lane.rate}</div>
                        <div className={`lane-trend ${lane.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                          {lane.trend}
                        </div>
                        <div className="lane-volume">{lane.volume} loads</div>
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
                <BarChart3 size={32} />
              </div>
              <h3>Real-Time Market Rates</h3>
              <p>Access live freight rates across all major lanes with historical trend analysis and predictive insights.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Lane Analytics</h3>
              <p>Deep dive into specific shipping lanes with comprehensive performance metrics and optimization recommendations.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={32} />
              </div>
              <h3>Geographic Intelligence</h3>
              <p>Visualize market conditions across different regions with interactive maps and location-based insights.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <DollarSign size={32} />
              </div>
              <h3>Pricing Intelligence</h3>
              <p>Smart pricing recommendations based on market conditions, capacity, and historical performance data.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3>Predictive Analytics</h3>
              <p>Forecast market trends and rate changes with AI-powered predictive models and seasonal analysis.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Competitive Analysis</h3>
              <p>Benchmark your performance against industry standards and identify competitive advantages.</p>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to gain market intelligence advantage?</h2>
              <p>Join 500+ carriers already using Spotter Lens to make data-driven decisions and maximize profitability.</p>
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

export default Lens;
