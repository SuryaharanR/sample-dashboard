import React, { useState } from 'react';
import PermissionTable from '../Permissions/PermissionTable';
import PermissionForm from '../Permissions/PermissionForm';
import PermissionDetails from '../Permissions/PermissionDetails';

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([]);
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list', 'form', 'details'

  const handleAddPermission = () => {
    setSelectedPermission(null);
    setViewMode('form');
  };

  const handleEditPermission = (permission) => {
    setSelectedPermission(permission);
    setViewMode('form');
  };

  const handleViewPermission = (permission) => {
    setSelectedPermission(permission);
    setViewMode('details');
  };

  const handleDeletePermission = (id) => {
    setPermissions(permissions.filter((permission) => permission.id !== id));
  };

  const handleSubmitPermission = (permission) => {
    if (selectedPermission) {
      setPermissions(
        permissions.map((p) =>
          p.id === selectedPermission.id ? permission : p
        )
      );
    } else {
      setPermissions([
        ...permissions,
        { id: Date.now(), ...permission },
      ]);
    }
    setViewMode('list');
  };

  return (
    <div>
      <h1>Permission Management</h1>
      {viewMode === 'list' && (
        <>
          <button onClick={handleAddPermission}>Add Permission</button>
          <PermissionTable
            permissions={permissions}
            onEdit={handleEditPermission}
            onDelete={handleDeletePermission}
            onView={handleViewPermission}
          />
        </>
      )}
      {viewMode === 'form' && (
        <PermissionForm
          initialData={selectedPermission}
          onSubmit={handleSubmitPermission}
        />
      )}
      {viewMode === 'details' && selectedPermission && (
        <PermissionDetails permission={selectedPermission} />
      )}
    </div>
  );
};

export default PermissionManagement;
