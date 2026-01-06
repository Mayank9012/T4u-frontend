import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import heroimage from '../assets/HeroImage.svg';

const Hero: React.FC = () => {
  return (
    <>
      <style>
        {`
          .hero-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            align-items: center;
          }
          .hero-section {
            padding: 8rem 2rem;
          }
          .hero-buttons {
            display: flex;
            gap: 1rem;
          }
          @media (max-width: 768px) {
            .hero-container {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            .hero-section {
              padding: 6rem 1rem 3rem;
            }
            .hero-buttons {
              flex-direction: column;
            }
            .hero-buttons button {
              width: 100%;
            }
          }
        `}
      </style>
      <section id="home" className="hero-section" style={{
        backgroundImage: `url(${heroimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
        }}>
          <div className="hero-container">
            <div>
              <h1 style={{
                ...typography.h1,
                color: colors.navy,
                marginBottom: '1.5rem',
              }}>
                Expand Your Brand's Reach With Team4u
              </h1>
              <p style={{
                ...typography.body,
                color: colors.textDark,
                marginBottom: '2rem',
                maxWidth: '500px',
              }}>
                A community-based approach for field and telephonic teams emphasizes local engagement and collaboration to enhance service delivery and outreach
              </p>
              <div className="hero-buttons">
                <button style={{
                  backgroundColor: colors.primary,
                  color: colors.white,
                  border: 'none',
                  padding: '0.875rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}>
                  Join Us
                </button>
                <button style={{
                  backgroundColor: 'transparent',
                  color: colors.textDark,
                  border: `2px solid ${colors.primary}`,
                  padding: '0.875rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;