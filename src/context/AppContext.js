import React, { createContext, useState, useContext } from 'react';

// Create a Context for users, roles, and permissions
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  return (
    <AppContext.Provider value={{ users, setUsers, roles, setRoles, permissions, setPermissions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
