// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Components
import Navbar from './components/Navbar/Navbar';
import Dashboard from './layouts/Dashboard/Dashboard';
import UserManagement from './components/pages/UserManagement';
import RoleManagement from './components/pages/RoleManagement';
import PermissionManagement from './components/pages/PermissionManagement';
import LoginForm from './pages/LoginForm/LoginForm';

const App = () => {
  const [roles, setRoles] = useState([]);

  const handleRoleSubmit = (newRole) => {
    setRoles((prevRoles) => [...prevRoles, newRole]);
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard roles={roles} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UserManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/roles"
            element={
              <ProtectedRoute>
                <RoleManagement onRoleSubmit={handleRoleSubmit} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/permissions"
            element={
              <ProtectedRoute>
                <PermissionManagement />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// ProtectedRoute component to handle access control
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default App;
