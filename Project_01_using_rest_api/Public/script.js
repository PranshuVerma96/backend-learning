const API_URL = '/api/users';

// Load users when page opens
window.onload = getUsers;

// ✅ Get Users
function getUsers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(users => {
      const list = document.getElementById('userList');
      list.innerHTML = "";

      users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${user.first_name}
          <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        list.appendChild(li);
      });
    });
}

// ✅ Add User
function addUser() {
  const input = document.getElementById('firstName');
  const name = input.value;

  if (!name) {
    alert("Enter name");
    return;
  }

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      first_name: name
    })
  })
  .then(res => res.json())
  .then(() => {
    input.value = "";
    getUsers();
  });
}

// ✅ Delete User
function deleteUser(id) {
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(() => {
    getUsers();
  });
}