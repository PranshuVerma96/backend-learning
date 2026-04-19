// const express = require('express')
// const users = require('./MOCK_DATA.json')

// const app = express();
// const PORT = 3000;


// // Routes 
// app.get('/api/users',(req,res) =>{ 
  
//   return  res.json(users);
// })
// app.get('/users',(req ,res) =>{
//  const html = `
//  <ul>
//  ${users.map(user => `<li>${user.first_name}</li>`).join(" ")}</ul>`
//  res.send(html);
// });

// app.get("/api/users/:id", (req , res) =>{
//   const id = req.params.id;
//   const user = users.find((user) => String(user.id) ===id)
//   return res.json(user);
// })

// app.post('/api/users', (req, res ) =>{
//   //to do create a user 
//    return res.json({status : "pending"});
// })


// app.patch('/api/users/:id', (req, res ) =>{
//   // to do Edit the user with id 
//    return res.json({status : "pending"});
// })

// app.delete('/api/users/:id', (req, res ) =>{
//   // to do Edit the user with id 
//    return res.json({status : "pending"});
// })

// app.listen(PORT,()=>console.log(`Server stared on port ${PORT} `)
// ) 





// // 
const express = require('express');
const cors = require('cors');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ✅ Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// ✅ Get user by ID
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;

  const user = users.find(u => String(u.id) === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// ✅ Create user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    first_name: req.body.first_name
  };

  users.push(newUser);

  res.json(newUser);
});

// ✅ Delete user
app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.json({ message: "User deleted" });
});

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));