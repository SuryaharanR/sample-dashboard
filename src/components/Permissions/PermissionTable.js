import React from 'react';

const PermissionTable = ({ permissions, onEdit, onDelete, onView }) => (
  <table>
    <thead>
      <tr>
        <th>Permission</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {permissions.map((permission) => (
        <tr key={permission.id}>
          <td>{permission.name}</td>
          <td>
            <button onClick={() => onView(permission)}>View</button>
            <button onClick={() => onEdit(permission)}>Edit</button>
            <button onClick={() => onDelete(permission.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PermissionTable;
