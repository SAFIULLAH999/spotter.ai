import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      title: 'Products',
      items: [
        { name: 'Lens', href: '/lens', icon: '🔍' },
        { name: 'TMS', href: '/tms', icon: '📋' },
        { name: 'Sentinel', href: '/sentinel', icon: '🛡️' },
        { name: 'Extension', href: '/extension', icon: '🔧' },
        { name: 'Spotter App', href: '/spotter-app', icon: '📱' }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'Fleet Management', href: '/fleet-management' },
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'Route Optimization', href: '/route-optimization' },
        { name: 'Driver Safety', href: '/driver-safety' }
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'Loan Calculators', href: '/loan-calculators', icon: '🧮' },
        { name: 'Insights', href: '/insights', icon: '📊' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' }
      ]
    }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <div className="logo-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="logo-text">spotter</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu desktop-menu">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="nav-link"
                onClick={() => handleDropdownToggle(index)}
              >
                {item.title}
                <ChevronDown 
                  className={`chevron ${activeDropdown === index ? 'rotated' : ''}`}
                  size={16}
                />
              </button>
              
              {activeDropdown === index && (
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className="dropdown-item"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="nav-actions">
          <Link to="/login" className="nav-button secondary">
            Login
          </Link>
          <Link to="/demo" className="nav-button primary">
            Get Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navigationItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              <button
                className="mobile-nav-link"
                onClick={() => handleDropdownToggle(index)}
              >
                {item.title}
                <ChevronDown 
                  className={`chevron ${activeDropdown === index ? 'rotated' : ''}`}
                  size={16}
                />
              </button>
              
              {activeDropdown === index && (
                <div className="mobile-dropdown">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.href}
                      className="mobile-dropdown-item"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="mobile-actions">
            <Link to="/login" className="mobile-button secondary">
              Login
            </Link>
            <Link to="/demo" className="mobile-button primary">
              Get Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
