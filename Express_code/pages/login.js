export default function login(){
  return `
  <form action="/submit" method = "post">
    <lable>Name </lable>
    <input type="text" placeholder = "Enter name" />
    <br><br>

     <lable>Email </lable>
    <input type="text" placeholder = "Enter Email" />
 <br><br>
    <button>Login</button>
    </form>
    
     <a href="/">Go to home</a>
  `
}