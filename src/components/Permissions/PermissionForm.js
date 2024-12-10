import React, { useState, useEffect } from "react";
import "../Styles/PermissionForm.css"; // Updated CSS file name

const UpdatedPermissionForm = ({ role, permissions, onSubmit, roles }) => {
  // Default roles with permissions for Read, Write, Update, Delete
  const predefinedRoles = [
    { id: 1, role: "Viewer", permissions: ["Read"] },
    { id: 2, role: "Editor", permissions: ["Read", "Write"] },
    { id: 3, role: "Admin", permissions: ["Read", "Write", "Update", "Delete"] },
  ];

  // Permissions as actions: Read, Write, Update, Delete
  const predefinedPermissions = [
    { id: "Read", name: "Read" },
    { id: "Write", name: "Write" },
    { id: "Update", name: "Update" },
    { id: "Delete", name: "Delete" },
  ];

  // Use passed roles or fallback to predefined roles
  const [availableRoles, setAvailableRoles] = useState(roles || predefinedRoles);
  const [selectedRole, setSelectedRole] = useState(role?.role || "");
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  // Effect to set initial selected permissions based on role
  useEffect(() => {
    if (role) {
      setSelectedRole(role.role || "");
      setSelectedPermissions(role.permissions || []);
    }
  }, [role]);

  // Handle role change
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    // Reset selected permissions when a new role is selected
    setSelectedPermissions([]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRole) {
      onSubmit(selectedRole, selectedPermissions);
    } else {
      console.error("Role is not selected");
    }
  };

  return (
    <div className="permission-form-container">
      <h2>Invite Team Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter team member's name" required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" required />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select value={selectedRole} onChange={handleRoleChange} required>
            <option value="" disabled>
              Select a Role
            </option>
            {availableRoles.map((roleOption) => (
              <option key={roleOption.id} value={roleOption.role}>
                {roleOption.role}
              </option>
            ))}
          </select>
        </div>

        <div className="permissions-table">
          <table>
            <thead>
              <tr>
                <th>Permission</th>
                {availableRoles.map((roleOption) => (
                  <th key={roleOption.id}>{roleOption.role}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {predefinedPermissions.map((permission) => (
                <tr key={permission.id}>
                  <td>{permission.name}</td>
                  {availableRoles.map((roleOption) => (
                    <td key={roleOption.id}>
                      {roleOption.permissions.includes(permission.id) ? (
                        <span className="tick">✔</span>
                      ) : (
                        <span className="cross">❌</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button type="submit" className="invite-button">
          Send Invite
        </button>
      </form>
    </div>
  );
};

export default UpdatedPermissionForm;
