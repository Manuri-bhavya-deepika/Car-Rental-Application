import React from 'react'
import './Usernavbar.css'
import {Link} from 'react-router-dom'
import group from '../Images/group5.png'
//import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div  className="bg" style={{backgroundImage:`url(${group})`,height:"1000px",backgroundRepeat: "no-repeat",backgroundSize: "cover" ,backgroundPosition:"center center fixed" }} >
    <div className="nav" >
  <input type="checkbox" id="nav-check"/> 
  <div className="nav-header">
    <div className="nav-title">
      <h3>CAR RENTAL</h3>
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    {/* <a href="//github.io/jo_geek" target="_blank">Github</a> */}
    {/* <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a> */}
    {/* <a href="/" id='ref'><Link to="/Login"><h4>User Login</h4></Link></a>
    <a href="/" id='ref'><Link to="/Adminlogin"><h4>Admin Login</h4></Link></a>
    <a href="/" id='ref'><Link><h4>Owner Login</h4></Link></a> */}
    <ul>
      <li><Link to="/Login" className='ref'><b>User Login</b></Link></li>
      <li>
      <Link to="/Adminlogin" className='ref'><b>Admin Login</b></Link>
      </li>
      <li><Link to="/Ownerlogin" className='ref'><b>Owner Login</b></Link></li>
    </ul>
  </div><br/>
</div>
</div>
  )
}

export default Navbar