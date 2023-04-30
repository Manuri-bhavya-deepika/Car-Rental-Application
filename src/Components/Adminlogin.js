import React, { useState } from 'react';
import './Adminlogin.css';
import {Link} from 'react-router-dom'
const Adminlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add your authentication logic
    console.log('Username:', username);
    console.log('Password:', password);
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        <a href='/' ><Link to="/Adminsignup">Signup</Link></a><br></br>
        <br></br>
        <Link to='/Adminnavbar'><button type="submit">Log in</button></Link>
      </form>
    </div>
  );
}

export default Adminlogin