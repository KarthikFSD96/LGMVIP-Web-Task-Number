const getUsersButton = document.getElementById('get-users-btn');
const userGrid = document.getElementById('user-grid');
let isUserGridVisible = false;
let usersData = [];

getUsersButton.addEventListener('click', toggleUserGrid);

function toggleUserGrid() {
  if (isUserGridVisible) {
    userGrid.style.display = 'none';
    getUsersButton.textContent = 'Get Users';
  } else {
    if (usersData.length === 0) {
      getUsers();
    }
    userGrid.style.display = 'grid';
    getUsersButton.textContent = 'Hide Users';
  }
  isUserGridVisible = !isUserGridVisible;
}

function getUsers() {
  usersData = [
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

  usersData.forEach(user => {
    const userCard = createUserCard(user);
    userGrid.appendChild(userCard);
  });
}

function createUserCard(user) {
  const userCard = document.createElement('div');
  userCard.className = 'user-card';

  const userImage = document.createElement('img');
  userImage.src = user.picture.large;
  userImage.alt = `${user.name.first} ${user.name.last}`;

  const userName = document.createElement('h3');
  userName.textContent = `${user.name.first} ${user.name.last}`;

  const userEmail = document.createElement('p');
  userEmail.textContent = user.email;

  userCard.appendChild(userImage);
  userCard.appendChild(userName);
  userCard.appendChild(userEmail);

  return userCard;
}