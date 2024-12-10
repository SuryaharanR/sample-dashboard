import React from 'react';

const UserTable = ({ users, onEdit, onDelete, onView }) => (
  <div style={{ maxWidth: '800px', margin: '20px auto', overflowX: 'auto' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
      <thead style={{ backgroundColor: '#f4f4f4' }}>
        <tr>
          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Email</th>
          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Role</th>
          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
          <th style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{user.name}</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{user.email}</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{user.role}</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{user.status}</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>
              <button 
                onClick={() => onView(user)} 
                style={{ margin: '0 5px', padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                View
              </button>
              <button 
                onClick={() => onEdit(user)} 
                style={{ margin: '0 5px', padding: '8px 12px', backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                Edit
              </button>
              <button 
                onClick={() => onDelete(user.id)} 
                style={{ margin: '0 5px', padding: '8px 12px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserTable;
