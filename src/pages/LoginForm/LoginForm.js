import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './LoginForm.css';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // Get the navigate function
  // Sample email and password for testing
  const [email, setEmail] = useState('testuser@example.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'testuser@example.com' && password === 'password123') {
      login(); // Call login logic if credentials match
      console.log('Login successful');
      navigate('/dashboard'); // Redirect to the dashboard page
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
