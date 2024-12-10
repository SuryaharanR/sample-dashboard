// src/OtherPage.js
import React from 'react';
import { useUsers } from './UsersContext'; // Import context hook to get user data

const OtherPage = () => {
  const { users } = useUsers(); // Use context hook to get users data

  return (
    <div>
      <h2>Users List</h2>
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
};

export default OtherPage;
