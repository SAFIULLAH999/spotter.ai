import React from 'react';
import { BarChart3, TrendingUp, PieChart, Activity, Target, Zap } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      title: "Fleet Efficiency Trends",
      description: "Your fleet efficiency has improved by 15% over the last quarter",
      trend: "+15%",
      positive: true,
      icon: <TrendingUp size={24} />
    },
    {
      title: "Fuel Cost Optimization",
      description: "AI-optimized routes have reduced fuel costs by $2,340 this month",
      trend: "-$2,340",
      positive: true,
      icon: <Target size={24} />
    },
    {
      title: "Driver Performance",
      description: "Average driver safety score has increased to 94.2%",
      trend: "+3.2%",
      positive: true,
      icon: <Activity size={24} />
    },
    {
      title: "Maintenance Predictions",
      description: "3 vehicles require maintenance within the next 2 weeks",
      trend: "3 alerts",
      positive: false,
      icon: <Zap size={24} />
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <div className="page-hero">
            <div className="hero-icon">
              <BarChart3 size={48} />
            </div>
            <h1 className="page-title">Fleet Insights</h1>
            <p className="page-description">
              AI-powered insights and analytics that help you understand your fleet performance, 
              identify opportunities, and make data-driven decisions.
            </p>
          </div>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="insights-dashboard">
            <div className="insights-grid">
              {insights.map((insight, index) => (
                <div key={index} className="insight-card">
                  <div className="insight-header">
                    <div className="insight-icon">
                      {insight.icon}
                    </div>
                    <div className={`insight-trend ${insight.positive ? 'positive' : 'negative'}`}>
                      {insight.trend}
                    </div>
                  </div>
                  <h3 className="insight-title">{insight.title}</h3>
                  <p className="insight-description">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="analytics-features">
            <h2>Advanced Analytics Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <BarChart3 size={32} />
                </div>
                <h3>Performance Dashboards</h3>
                <p>Comprehensive dashboards with real-time metrics and KPIs for your entire fleet operation.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <PieChart size={32} />
                </div>
                <h3>Cost Analysis</h3>
                <p>Detailed cost breakdowns and analysis to identify savings opportunities and optimize spending.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <TrendingUp size={32} />
                </div>
                <h3>Predictive Analytics</h3>
                <p>AI-powered predictions for maintenance needs, route optimization, and performance trends.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Activity size={32} />
                </div>
                <h3>Driver Analytics</h3>
                <p>Comprehensive driver performance metrics including safety scores and efficiency ratings.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Target size={32} />
                </div>
                <h3>Goal Tracking</h3>
                <p>Set and track performance goals with automated progress monitoring and reporting.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Zap size={32} />
                </div>
                <h3>Real-time Alerts</h3>
                <p>Intelligent alerts and notifications for critical events and performance anomalies.</p>
              </div>
            </div>
          </div>
          
          <div className="insights-demo">
            <div className="demo-content">
              <h2>See Insights in Action</h2>
              <p>
                Experience the power of AI-driven fleet insights with our interactive demo. 
                See how Spotter's analytics can transform your fleet operations.
              </p>
              <div className="demo-actions">
                <button className="cta-button primary">View Live Demo</button>
                <button className="cta-button secondary">Schedule Consultation</button>
              </div>
            </div>
            
            <div className="demo-preview">
              <div className="chart-mockup">
                <div className="chart-header">
                  <h4>Fleet Performance Overview</h4>
                  <div className="chart-controls">
                    <button className="chart-btn active">Week</button>
                    <button className="chart-btn">Month</button>
                    <button className="chart-btn">Year</button>
                  </div>
                </div>
                <div className="chart-area">
                  <div className="chart-bars">
                    <div className="bar" style={{height: '60%'}}></div>
                    <div className="bar" style={{height: '80%'}}></div>
                    <div className="bar" style={{height: '45%'}}></div>
                    <div className="bar" style={{height: '90%'}}></div>
                    <div className="bar" style={{height: '70%'}}></div>
                    <div className="bar" style={{height: '85%'}}></div>
                    <div className="bar" style={{height: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
