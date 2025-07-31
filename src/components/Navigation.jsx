import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
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
      title: 'Products',
      items: [
        { name: 'Spotter AI Platform', href: '/platform' },
        { name: 'Mobile App', href: '/mobile-app' },
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'API Integration', href: '/api' }
      ]
    },
    {
      title: 'Industries',
      items: [
        { name: 'Logistics', href: '/logistics' },
        { name: 'Transportation', href: '/transportation' },
        { name: 'Delivery Services', href: '/delivery' },
        { name: 'Construction', href: '/construction' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Support', href: '/support' }
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
            <span className="logo-text">Spotter</span>
            <span className="logo-accent">.ai</span>
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
