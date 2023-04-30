import React, { useState } from 'react';
import './Adminsignup.css';

const AdmSig = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add your sign-up logic
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  }

  return (
    <div className="signup">
      
        
        <form onSubmit={handleSubmit}>
        <h1>Admin Sign Up</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      
    </div>
  );
}

export default AdmSig;