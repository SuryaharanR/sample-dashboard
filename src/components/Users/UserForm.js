import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "../Styles/UserForm.css"; // Updated CSS file name

const UpdatedUserForm = ({ initialData = {}, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [isActive, setIsActive] = useState(initialData?.isActive || true);
  const [users, setUsers] = useState([]); // State to store the list of users

  // Load users from localStorage when the component is mounted
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, isActive };

    // Call onSubmit passed via props
    onSubmit(newUser);

    // Add the new user to the users list
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Save updated users list to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Clear form fields after submission
    setName('');
    setEmail('');
    setIsActive(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-form-container">
        <h2>User Form</h2>

        <div className="user-form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="user-form-input"
          />
        </div>

        <div className="user-form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="user-form-input"
          />
        </div>

        <div className="user-form-group">
          <label>
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
              className="user-form-checkbox"
            />
            Active
          </label>
        </div>

        <button type="submit" className="user-form-submit">
          Save
        </button>
      </form>

      {/* Display a table of users */}
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

UpdatedUserForm.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    isActive: PropTypes.bool,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default UpdatedUserForm;
