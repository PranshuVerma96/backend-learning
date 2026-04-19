const express = require("express");
const users = require("./MOCK_DATA.json")
const fs = require('fs');
const app = express();
const PORT = 4000

// Middleware - Plugin
app.use(express.urlencoded({extended :false}))
// Routes

app.get('/users', (req,res) =>{
  const HTML = `
  <ul>
  ${users.map((user) => `<li> ${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(HTML)
})

// Rest API
app.get('/api/users',(req, res) =>{
  return res.json(users);
});

app.route('/api/users/:id').get(
  (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id)
  return res.json(user);
})
.patch((req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { ...users[index], ...body };

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    return res.json({ status: "updated successfully" });
  });
})

.delete((req, res) => {   // ✅ FIXED
  const id = Number(req.params.id);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    return res.json({
      status: "success",
      deletedUser,
    });
  });
});


app.post("/api/users" , (req ,res) =>{
   const body = req.body;
  //  console.log("Body" , body)
   users.push({...body, id :users.length + 1});
   fs.writeFile('./MOCK_DATA.json',JSON.stringify(users), (err,data) =>{

  return res.json({status : "success" , id:users.length});
   })


  // return res.json({status : "pending"});
})

// app.get('/api/users/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id)
//   return res.json(user);
// });


// app.patch("/api/users/:id" , (res, req) =>{
//   // to update the user 
//   return res.join({status : 'pending'});
// })

// app.delete("/api/users/:id" , (req, res)=>{
//   // to do delete the user
//   return res.json({status : 'pending'})
// })





app.listen(PORT ,()=> console.log(`server started in port ${PORT}`)
)