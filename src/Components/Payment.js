
import React from 'react'
import './Usernavbar.css'
import './Car.css'
import benz from '../Images/benz.png'
import {Link} from 'react-router-dom'
function Payment() {
  return (
    <div>
    <div className="nav" >
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      <h1>CAR RENTAL APPLICATION</h1>
    </div>
  </div>  
</div>
<div>
<div className="sidebar">
      <p id='active'>AVAILABLE CARS</p><br/>
      <a href="/">
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
                  PAYMENT
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
                  <h3 id='man1'>Payments: </h3><br/>
                  {/* <table>
                    <tr>
                      <td>Per Day : </td>
                      <td>15000/-</td>
                    </tr>
                    <tr>
                      <td>Per Month : </td>
                      <td>3000000/-</td>
                    </tr>
                    <tr>
                        <td>Extra Time : </td>
                        <td>4000/-</td>
                    </tr>
                  </table><br/> */}
                  <form>
                    <label>Perday:1500/-</label>
                    <label>Per MOnth:30000/-</label>
                    <label>Extra Time:4000/-</label>
                  </form><br/>
                  <button type="submit" id='but1'>Pay Now</button>
                </center>
              </div>
              
        </div>
        </div>
        </div>
</div>


  );
}

export default Payment;
