import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdatedUserForm from '../../components/Users/UserForm';
import { Bar, Line } from 'react-chartjs-2';
import '../Dashboard/Dashboard.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [activeUsers, setActiveUsers] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      const userData = JSON.parse(localStorage.getItem('users')) || [];
      const roleData = JSON.parse(localStorage.getItem('roles')) || ['Admin', 'Editor', 'Viewer', 'Manager'];
      const permissionData = JSON.parse(localStorage.getItem('permissions')) || ['View Dashboard', 'Edit Content', 'Manage Users', 'Delete Content'];

      console.log('Fetched roles from localStorage:', roleData); // Debug log
      console.log('Fetched permissions from localStorage:', permissionData); // Debug log

      setUsers(userData);
      setRoles(roleData);
      setPermissions(permissionData);
      setActiveUsers(userData.filter((user) => user.isActive).length);
    };

    fetchData();
  }, []);

  const handleNewUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setActiveUsers(updatedUsers.filter((user) => user.isActive).length);
  };

  const handleNewRole = (newRole) => {
    const updatedRoles = [...roles, newRole];
    setRoles(updatedRoles);
    localStorage.setItem('roles', JSON.stringify(updatedRoles));
    console.log('Updated roles after adding a new role:', updatedRoles); // Debug output
  };

  const handleNewPermission = (newPermission) => {
    const updatedPermissions = [...permissions, newPermission];
    setPermissions(updatedPermissions);
    localStorage.setItem('permissions', JSON.stringify(updatedPermissions));
    console.log('Updated permissions after adding a new permission:', updatedPermissions); // Debug output
  };

  const chartData = {
    labels: ['Active Users', 'Total Roles', 'Total Permissions'],
    datasets: [
      {
        label: 'Dashboard Metrics',
        data: [activeUsers, roles.length, permissions.length],
        backgroundColor: ['#B0C4DE', '#4682B4', '#708090'],
      },
    ],
  };

  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'User Activity',
        data: [5, 10, 15, 20, 25, 30, 35],
        borderColor: '#4682B4',
        fill: true,
        backgroundColor: 'rgba(70, 130, 180, 0.2)',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="widgets">
        <div
          className="widget"
          style={{ backgroundColor: '#B0C4DE' }}
          onClick={() => navigate('/users')}
        >
          <h3>{users.length}</h3>
          <p>Total Users</p>
        </div>
        <div
          className="widget"
          style={{ backgroundColor: '#B0C4DE' }}
          onClick={() => navigate('/roles')}
        >
          <h3>{roles.length}</h3>
          <p>Roles</p>
        </div>
        <div
          className="widget"
          style={{ backgroundColor: '#B0C4DE' }}
          onClick={() => navigate('/permissions')}
        >
          <h3>{permissions.length}</h3>
          <p>Permissions</p>
        </div>
      </div>

      <div className="charts">
        <div className="bar-chart" style={{ height: '400px' }}>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: 'Dashboard Metrics',
                },
                legend: {
                  position: 'top',
                },
              },
            }}
          />
        </div>

        {/* Circular logo */}
        <div className="circular-logo-container">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D0BAQFRhefH-vGhSg/company-logo_200_200/company-logo_200_200/0/1733288059707/vrv_security_logo?e=2147483647&v=beta&t=5ZpYyfUsqh6JWLSuzNnD7kyGoR94iJf72WjMnNGHN3k"
            alt="Logo"
            className="circular-logo"
          />
        </div>

        <div className="line-chart" style={{ height: '400px' }}>
          <Line
            data={lineChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: 'User Activity',
                },
                legend: {
                  position: 'top',
                },
              },
            }}
          />
        </div>
      </div>

      <h2>Total Users: {users.length}</h2>
      <h2>Total Roles: {roles.length}</h2>
      <h2>Total Permissions: {permissions.length}</h2>

      <UpdatedUserForm onSubmit={handleNewUser} />
    </div>
  );
};

export default Dashboard;
