import React, { createContext, useContext, useState } from 'react';

// Create the Users context
const UsersContext = createContext();

// Custom hook to access Users context
export const useUsersContext = () => useContext(UsersContext);

// Provider component to wrap the app with Users context
export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
