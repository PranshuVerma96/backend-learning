function userForm(req, res){
res.write(`
  

  <form action = "/submit" method = "post">
  <label >Name </label>
   <input type="text" placeholder = "enter name " name = "name" />

   <label>Email</label>
   <input type="text" placeholder = "enter email " name = "email" />

   <button>Submit</button>
   </form>
  
  `)
}
module.exports = userForm;