// src/data.js
const data = [
   { type: 'user', name: 'Surya', status: 'active', email: 'surya@example.com' },
   { type: 'user', name: 'Pradeep', status: 'inactive', email: 'pradeep@example.com' },
   { type: 'user', name: 'Mohan', status: 'active', email: 'mohan@example.com' },
   { type: 'role', name: 'Admin', permissions: ['read', 'write'] },
   { type: 'role', name: 'User', permissions: ['read'] },
   { type: 'permission', name: 'Manage Users' },
   { type: 'permission', name: 'View Dashboard' },
   { type: 'dashboard', name: 'Main Dashboard', status: 'active' },
   { type: 'dashboard', name: 'Analytics Dashboard', status: 'inactive' },
   // Add more data as needed
 ];
 
 export default data;
 