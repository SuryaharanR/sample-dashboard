import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';


const Sidebar = () => (
  <nav className="sidebar">
    <NavLink to="/users">User Management</NavLink>
    <NavLink to="/roles">Role Management</NavLink>
    <NavLink to="/permissions">Permission Management</NavLink>
  </nav>
);

export default Sidebar;
