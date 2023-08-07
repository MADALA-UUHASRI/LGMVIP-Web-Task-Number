const userCardGrid = document.getElementById('userCardGrid');
const getUsersButton = document.getElementById('getUsersButton');
const loader = document.getElementById('loader');

const simulateAPICall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'user1', email: 'user1@gmail.com' },
        { id: 2, name: 'user2', email: 'user2@gmail.com' },
        { id: 3, name: 'user3', email: 'user3@gmail.com' },
        
      ]);
    }, 1500); 
  });
};

const displayUsers = (users) => {
  userCardGrid.innerHTML = '';
  users.forEach((user) => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
    `;
    userCardGrid.appendChild(userCard);
  });
};

getUsersButton.addEventListener('click', async () => {
  loader.style.display = 'block';
  const users = await simulateAPICall();
  loader.style.display = 'none';
  displayUsers(users);
});
