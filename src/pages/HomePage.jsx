import React from 'react';
import { Code2, Laptop, Rocket, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-line">Full Stack Developer</span>
            <span className="hero__title-line">Building Modern Web Experiences</span>
          </h1>
          <p className="hero__subtitle">
            Crafting responsive, high-performance applications with modern JavaScript frameworks
          </p>
          <div className="hero__cta">
            <a href="/services" className="hero__button">
              View Services <ArrowRight className="inline-block ml-2" size={20} />
            </a>
          </div>
        </div>

        <div className="tech-stack">
          <div className="tech-stack__item">React</div>
          <div className="tech-stack__item">React Native</div>
          <div className="tech-stack__item">Vue.js</div>
          <div className="tech-stack__item">Node.js</div>
          <div className="tech-stack__item">TypeScript</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icon">
              <Code2 size={32} />
            </div>
            <h3 className="feature-card__title">Clean Code</h3>
            <p className="feature-card__description">
              Writing maintainable, efficient code that scales with your business
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <Laptop size={32} />
            </div>
            <h3 className="feature-card__title">Responsive Design</h3>
            <p className="feature-card__description">
              Creating seamless experiences across all devices and screen sizes
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <Rocket size={32} />
            </div>
            <h3 className="feature-card__title">Performance First</h3>
            <p className="feature-card__description">
              Optimizing applications for speed and efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats Section */}
      <section className="stats">
        <div className="stats__grid">
          <div className="stats__item">
            <span className="stats__number">9+</span>
            <span className="stats__label">Years Experience</span>
          </div>
          <div className="stats__item">
            <span className="stats__number">50+</span>
            <span className="stats__label">Projects Completed</span>
          </div>
          <div className="stats__item">
            <span className="stats__number">100%</span>
            <span className="stats__label">Client Satisfaction</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
