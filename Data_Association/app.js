const express = require('express');
const userModel = require('./models/user');
const postModel = require('./models/posts');

const app = express();

app.get('/' , (req ,res) =>{
  res.send('hello');
})

app.get('/create' , async(req ,res) =>{
let user = await userModel.create({
  username : 'pranshu',
  age : 34,
  email : 'pranshu23@gmail.com'
 })
 res.send(user);
});

app.get('/post/create' , async (req, res)=>{
const post =  await postModel.create({
  postdata : 'hello how are you ',
  user : "69d9d69ea91628f9a5598595",

 });
let user = await userModel.findOne({_id : "69d9d69ea91628f9a5598595"});
user.posts.push(post._id);
await user.save();

 res.send({post , user});
});

app.listen(4500, ()=>{
  console.log('Server started');
  
})