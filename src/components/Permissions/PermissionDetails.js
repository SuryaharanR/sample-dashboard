import React from 'react';

const PermissionDetails = ({ permission }) => (
  <div>
    <h2>Permission Details</h2>
    <p>Permission: {permission.name}</p>
  </div>
);

export default PermissionDetails;
