import React from 'react';

const UserDetails = ({ user }) => (
  <div>
    <h2>User Details</h2>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Role: {user.role}</p>
    <p>Status: {user.status}</p>
  </div>
);

export default UserDetails;
