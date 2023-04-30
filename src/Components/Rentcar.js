
import React from 'react'
import './Usernavbar.css'
import './Car.css'
import benz from '../Images/benz.png'
import {Link} from 'react-router-dom'
//import {Link} from 'react-router-dom'
function Rentcar() {
  return (
    <div>
    <div className="nav" >
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      <h1 id='man'>CAR RENTAL APPLICATION</h1>
    </div>
  </div>  
</div>
<div>
<div className="sidebar">
      <p id='active'>AVAILABLE CARS</p><br/>
      {/* <h5 id='ava'>AVAILABLE CARS</h5> */}
      <a href="">
        <Link to="/Rentcar"><h5>RENT CAR</h5></Link></a>

      <a href="/">
      <Link to="/Payment"><h5>PAYMENT</h5></Link></a>
      <a href="/">
      <Link to="/Feedback"><h5>FEEDBACK</h5></Link>
      </a>
      <a href="/">
      <Link to="/Modifications"><h5>MODIFICATIONS</h5></Link>
      </a>
      <a href="/">
      <Link to="/Status"><h5>STATUS</h5></Link>
      </a>
 </div>
</div>
<div class="content">
 <div class="container-fluid">
        <div className='row'>
              <center>
              <div className='col-md-6'>
                <h2 id='man2'>
                  RENT CAR
                </h2>
              </div>
              </center>
        </div>
       <div className='row'> 
              <div className='col-md-6' id='manual'>
                <center>
                <Link to='/Benz'><img src={benz} id='example'/></Link>
                <figcaption>BENZ</figcaption>
                </center>
              </div>
              <div className='col-md-6' id='manual'>
              <center>
                  <h3 id='man1'>Specific Timings</h3><br/>
                  {/* <table>
                    <tr>
                      <td>Min Time : </td>
                      <td>1 Day</td>
                    </tr>
                    <tr>
                      <td>Max Time : </td>
                      <td>1 Year</td>
                    </tr>
                  </table><br/> */}
                  <form>
                    <label>MIN TIME: </label><br/>
                    <label>MAX TIME: </label>
                  </form><br/>
                  <button type="submit" id='but1'>Book Car</button>
                </center>
              </div>
              
        </div>
        </div>
        </div>
</div>


  );
}

export default Rentcar;
