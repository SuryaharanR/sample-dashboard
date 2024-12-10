import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faUserTag, faKey, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ data = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Convert to lowercase for case-insensitive search
  };

  // Filter data based on the search query
  const filteredResults = data.filter(item => {
    return Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchQuery)
    );
  });

  // Function to highlight the keyword in a given text
  const highlightText = (text, keyword) => {
    if (!keyword) return text;
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword ? (
        <span key={index} style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>VRV Security Admin Panel</h2>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faChartBar} /> Dashboard
        </Link>
        <Link to="/users">
          <FontAwesomeIcon icon={faUsers} /> Users
        </Link>
        <Link to="/roles">
          <FontAwesomeIcon icon={faUserTag} /> Roles
        </Link>
        <Link to="/permissions">
          <FontAwesomeIcon icon={faKey} /> Permissions
        </Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery && (
          <div className="search-results">
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <div key={index} className="search-item">
                  <Link to={`/${item.page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {Object.values(item).map((value, i) => (
                      <div key={i}>{highlightText(value, searchQuery)}</div>
                    ))}
                  </Link>
                </div>
              ))
            ) : (
              <div className="no-results">No results found</div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
