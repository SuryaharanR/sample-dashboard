// RoleForm.js
import React, { useState, useEffect } from 'react';
import '../Roles/RoleForm.css';
const RoleForm = ({ initialData = {}, onSubmit }) => {
  const [roleName, setRoleName] = useState(initialData?.name || '');
  const [roleType, setRoleType] = useState(initialData?.type || 'Single Location');
  const [status, setStatus] = useState(initialData?.status || 'Active');

  useEffect(() => {
    if (initialData) {
      setRoleName(initialData.name || '');
      setRoleType(initialData.type || 'Single Location');
      setStatus(initialData.status || 'Active');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: roleName, type: roleType, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add/Edit Role</h2>
      <label>Role Name:</label>
      <input
        type="text"
        placeholder="Role Name"
        value={roleName}
        onChange={(e) => setRoleName(e.target.value)}
        required
      />
      <label>Role Type:</label>
      <div>
        <label>
          <input
            type="radio"
            value="Single Location"
            checked={roleType === 'Single Location'}
            onChange={(e) => setRoleType(e.target.value)}
          />
          Single Location
        </label>
        <label>
          <input
            type="radio"
            value="Multiple Location"
            checked={roleType === 'Multiple Location'}
            onChange={(e) => setRoleType(e.target.value)}
          />
          Multiple Location
        </label>
      </div>
      <label>Status:</label>
      <div>
        <label>
          <input
            type="radio"
            value="Active"
            checked={status === 'Active'}
            onChange={(e) => setStatus(e.target.value)}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            value="Inactive"
            checked={status === 'Inactive'}
            onChange={(e) => setStatus(e.target.value)}
          />
          Inactive
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default RoleForm;
