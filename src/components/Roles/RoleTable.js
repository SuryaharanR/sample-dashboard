// RoleTable.js
import React from 'react';
import './RoleTable.css'; // Include styling if necessary

const RoleTable = ({ roles, onEdit, onDelete, onView }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {roles.map((role) => (
        <tr key={role.id}>
          <td>{role.name}</td>
          <td>{role.type}</td>
          <td>{role.status}</td>
          <td>
            <button onClick={() => onView(role)}>View</button>
            <button onClick={() => onEdit(role)}>Edit</button>
            <button onClick={() => onDelete(role.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default RoleTable;