import React, { useState } from 'react';
import './Userlogin.css'
import { Link } from 'react-router-dom';
const Login = () => {
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
        <h1>User Login</h1>
        <div>
          <label htmlFor="username" id='lab'>Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password" id='lab'>Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        <a href='/' >
          <Link to='/Signup'><p>Signup</p></Link></a><br></br>
        <br></br>
        <Link to='/Dashboard'><p><button type="submit" id='but'>Log in</button></p></Link>
      </form>
    </div>
  );
}

export default Login