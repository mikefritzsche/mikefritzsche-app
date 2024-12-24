import React from 'react';
import { Code2, Smartphone, Globe, Gauge } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="service-card">
    <div className="service-card__icon">
      <Icon size={32} />
    </div>
    <h3 className="service-card__title">{title}</h3>
    <p className="service-card__description">{description}</p>
    <ul className="service-card__features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: [
        "Single Page Applications (SPA)",
        "React & Vue.js Development",
        "Responsive Design",
        "Performance Optimization"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that provide native-like experience.",
      features: [
        "React Native Development",
        "Cross-platform Solutions",
        "Mobile-first Design",
        "App Performance Tuning"
      ]
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end web development services from concept to deployment.",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Security Implementation"
      ]
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Enhance your application's speed, efficiency, and user experience.",
      features: [
        "Load Time Optimization",
        "Code Optimization",
        "SEO Improvements",
        "Performance Monitoring"
      ]
    }
  ];

  return (
    <div className="services-container">
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
