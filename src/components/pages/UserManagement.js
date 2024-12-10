import React, { useState } from 'react';
import UserTable from '../Users/UserTable';
import UserForm from '../Users/UserForm';
import UserDetails from '../Users/UserDetails';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list', 'form', 'details'

  const handleAddUser = () => {
    setSelectedUser(null);
    setViewMode('form');
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setViewMode('form');
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setViewMode('details');
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSubmitUser = (user) => {
    if (selectedUser) {
      setUsers(users.map((u) => (u.id === selectedUser.id ? user : u)));
    } else {
      setUsers([...users, { id: Date.now(), ...user }]);
    }
    setViewMode('list');
  };

  return (
    <div>
      <h1>User Management</h1>
      {viewMode === 'list' && (
        <>
          <button onClick={handleAddUser}>Add User</button>
          <UserTable
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
            onView={handleViewUser}
          />
        </>
      )}
      {viewMode === 'form' && (
        <UserForm initialData={selectedUser} onSubmit={handleSubmitUser} />
      )}
      {viewMode === 'details' && selectedUser && (
        <UserDetails user={selectedUser} />
      )}
    </div>
  );
};

export default UserManagement;
