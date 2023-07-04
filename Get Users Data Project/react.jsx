import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isUserGridVisible, setIsUserGridVisible] = useState(false);

  const toggleUserGrid = () => {
    setIsUserGridVisible(!isUserGridVisible);
    setUsers([]);
  };

  const getUsers = () => {
    const staticUsers = [
      {
        name: {
          first: 'Emily',
          last: 'Smith',
        },
        email: 'emily.smith@atlassian.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
      },
      {
        name: {
          first: 'Sophia',
          last: 'Johnson',
        },
        email: 'sophia.johnson@atlassian.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
      },
      {
        name: {
          first: 'Olivia',
          last: 'Brown',
        },
        email: 'olivia.brown@atlassian.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
      },
      {
        name: {
          first: 'Ava',
          last: 'Taylor',
        },
        email: 'ava.taylor@atlassian.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/4.jpg',
        },
      },
      {
        name: {
          first: 'Isabella',
          last: 'Anderson',
        },
        email: 'isabella.anderson@atlassian.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/5.jpg',
        },
      },
      {
        name: {
          first: 'Mia',
          last: 'Thomas',
        },
        email: 'mia.thomas@atlassian.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/6.jpg',
        },
      },
      {
        name: {
          first: 'Charlotte',
          last: 'Roberts',
        },
        email: 'charlotte.roberts@atlassian.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/7.jpg',
        },
      },
      {
        name: {
          first: 'Amelia',
          last: 'Walker',
        },
        email: 'amelia.walker@atlassian.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/8.jpg',
        },
      },
    ];

    setUsers(staticUsers);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <img src="https://cdn.icon-icons.com/icons2/2407/PNG/512/atlassian_icon_146225.png" alt="Atlassian Logo" className="logo" />
          <h1 className="brand">Brand Name</h1>
        </div>
        <button className="get-users-btn" onClick={toggleUserGrid}>
          {isUserGridVisible ? 'Hide Users' : 'Get Users'}
        </button>
      </nav>
      <div className={`user-grid ${isUserGridVisible ? 'visible' : ''}`}>
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
