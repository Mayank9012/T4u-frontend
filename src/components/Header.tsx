import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../styles/colors';
import logo from '../assets/Logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'community', 'ongoing-projects', 'incentives-&-rewards', 'join-us'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMenuItemId = (item: string) => {
    return item.toLowerCase().replace(/\s+/g, '-');
  };

  const isActive = (item: string) => {
    // Check if we're on a specific route
    if (item === 'About Us' && location.pathname === '/aboutus') return true;
    if (item === 'Join Us' && location.pathname === '/joinus') return true;
    if (item === 'Home' && location.pathname === '/') return true;
    
    // For hash-based sections on homepage
    if (location.pathname === '/') {
      const itemId = getMenuItemId(item);
      return activeSection === itemId;
    }
    
    return false;
  };

  const handleNavClick = (item: string) => {
    setIsMenuOpen(false);
    // If navigating to a hash link and not on homepage, we need to go to homepage first
    if (item !== 'About Us' && item !== 'Join Us' && location.pathname !== '/') {
      window.location.href = '/#' + getMenuItemId(item);
    }
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .header {
              padding: 1rem 1rem !important;
            }
            .nav-menu {
              display: ${isMenuOpen ? 'flex' : 'none'} !important;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background-color: rgba(255, 255, 255, 0.98);
              flex-direction: column;
              padding: 1rem 1rem;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .nav-menu li {
              margin-bottom: 1rem;
            }
            .hamburger {
              display: block !important;
            }
          }
          @media (min-width: 769px) {
            .hamburger {
              display: none !important;
            }
          }
        `}
      </style>
      <header className="header" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        zIndex: 1000,
        padding: '0.2rem 1rem', 
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          padding: '0.25rem 0', 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Teams4U Logo" style={{ height: '32px', borderRadius: '8px', cursor: 'pointer' }} />
            </Link>
          </div>
          <button 
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: colors.textDark,
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <ul className="nav-menu" style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 25,
          }}>
            {['Home', 'Community', 'Ongoing Projects', 'Incentives & Rewards', 'About Us', 'Join Us'].map((item) => {
              const isRoute = item === 'About Us' || item === 'Join Us';
              const href = item === 'About Us' ? '/aboutus' : item === 'Join Us' ? '/joinus' : item === 'Home' ? '/' : `#${getMenuItemId(item)}`;
              
              return (
                <li key={item}>
                  {isRoute || item === 'Home' ? (
                    <Link
                      to={href}
                      style={{
                        textDecoration: 'none',
                        color: isActive(item) ? colors.primary : colors.textDark,
                        fontWeight: isActive(item) ? 600 : 400,
                        fontSize: '0.85rem',
                        transition: 'color 0.3s ease',
                      }}
                      onClick={() => handleNavClick(item)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      style={{
                        textDecoration: 'none',
                        color: isActive(item) ? colors.primary : colors.textDark,
                        fontWeight: isActive(item) ? 600 : 400,
                        fontSize: '0.85rem',
                        transition: 'color 0.3s ease',
                      }}
                      onClick={() => handleNavClick(item)}
                    >
                      {item}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;