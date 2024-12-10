import React from 'react';

const RoleDetails = ({ role }) => (
  <div>
    <h2>Role Details</h2>
    <p><strong>Name:</strong> {role.name}</p>
    <p><strong>Type:</strong> {role.type}</p>
    <p><strong>Status:</strong> {role.status}</p>
  </div>
);

export default RoleDetails;