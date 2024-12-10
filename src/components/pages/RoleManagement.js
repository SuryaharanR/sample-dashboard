// src/components/pages/RoleManagement.js
import React, { useState } from 'react';
import RoleTable from '../Roles/RoleTable';
import RoleForm from '../Roles/RoleForm';
import RoleDetails from '../Roles/RoleDetails';

const RoleManagement = ({ onRoleSubmit }) => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: 'Customer Support',
      type: 'Multiple Location',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Company Super User',
      type: 'Multiple Location',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Company Admin',
      type: 'Multiple Location',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Location Director',
      type: 'Single Location',
      status: 'Active',
    },
  ]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list', 'form', 'details'

  const handleAddRole = () => {
    setSelectedRole(null);
    setViewMode('form');
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setViewMode('form');
  };

  const handleViewRole = (role) => {
    setSelectedRole(role);
    setViewMode('details');
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleSubmitRole = (role) => {
    if (selectedRole) {
      setRoles(roles.map((r) => (r.id === selectedRole.id ? { ...r, ...role } : r)));
    } else {
      const newRole = { id: Date.now(), ...role };
      setRoles([...roles, newRole]);
      onRoleSubmit(newRole); // Notify parent to update dashboard
    }
    setViewMode('list');
  };

  return (
    <div>
      <h1>Role Management</h1>
      {viewMode === 'list' && (
        <>
          <button onClick={handleAddRole}>Add Role</button>
          <RoleTable
            roles={roles}
            onEdit={handleEditRole}
            onDelete={handleDeleteRole}
            onView={handleViewRole}
          />
        </>
      )}
      {viewMode === 'form' && (
        <RoleForm initialData={selectedRole} onSubmit={handleSubmitRole} />
      )}
      {viewMode === 'details' && selectedRole && (
        <RoleDetails role={selectedRole} />
      )}
    </div>
  );
};

export default RoleManagement;
