import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine if the current menu item is active
  const isActive = location.pathname === item.route;

  const handleNavigation = (event) => {
    if (location.pathname !== item.route) {
      navigate(item.route);
    } else {
      event.preventDefault(); // Prevents the default Link behavior if already on the route
    }
  };

  return (
    <li
      onClick={handleNavigation}
      className={`menu-item ${isActive ? 'active' : ''}`}
    >
      {item.title}
    </li>
  );
};

export default MenuItem;
