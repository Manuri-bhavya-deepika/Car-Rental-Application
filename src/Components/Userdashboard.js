import React from 'react'
import {Link} from 'react-router-dom'
import benz from '../Images/benz.png'
import kia from '../Images/kia.png'
import audi from '../Images/audi.png'
import roll from '../Images/roll.png'
import thar from '../Images/thar.png'
import bmw from '../Images/bmw.png'
import brezza from '../Images/brezza.png'
import hyundai from '../Images/hyundai.png'
import nexon from '../Images/nexon.png'
function Dashboard()
{
  return(
    
  <div className='container-fluid'>
     <div className="sidebar">
      <p id='active'>CAR RENTAL</p><br/>
      <h5 id='ava'>AVAILABLE CARS</h5>
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

 <div class="content">
 <div class="container-fluid">
       <div className='row'> 
              <div className='col-md-4' id='col1'>
                <center>
                <Link to='/Benz'><img src={benz} id='ex'/></Link>
                <figcaption>BENZ</figcaption>
                </center>
              </div>
              <div className='col-md-4' id='col1'>
              <center>
              <Link to='/Kia'><img src={kia} id='ex'/></Link>
                <figcaption>KIA</figcaption>
                </center>
              </div>
              <div className='col-md-4' id='col1'>
              <center>
              <Link to='/Audi'><img src={audi} id='ex'/></Link>
                <figcaption>AUDI</figcaption>
                </center>
              </div>
       </div><br/>
        <div className='row'> 
              <div className='col-md-4' id='col1'>
              <center>
              <Link to='/Roll'><img src={roll} id='ex'/></Link>
                <figcaption>ROLL-ROYACE</figcaption>
                </center>
              </div>
              <div className='col-md-4' id='col1'>
              <center>
              <Link to='/Thar'><img src={thar} id='ex'/></Link>
                <figcaption>THAR</figcaption>
                </center>
              </div>
              <div className='col-md-4' id='col1'>
              <center>
                <Link to='/Bmw'><img src={bmw} id='ex'/></Link>
                <figcaption>BMW</figcaption>
                </center>
              </div>
        </div><br/>
        <div className='row'>
              <div className='col-md-4' id='col1'>
                <center>
                <Link to='/Brezza'><img src={brezza} id='ex'/></Link>
                <figcaption>BREZZA</figcaption>
                </center>
              </div>
              <div className='col-md-4' id='col1'>
                  <center>
                  <Link to='/Hyundai'><img src={hyundai} id='ex'/></Link>
                <figcaption>HYUNDAI</figcaption>
                  </center>
              </div>
              <div className='col-md-4' id='col1'>
                <center>
                <Link to='/Nexon'><img src={nexon} id='ex'/></Link>
                <figcaption>NEXON</figcaption>
                </center>
              </div>
        </div>
       </div>
 </div> 
        
  </div>

 

  )
}
export default Dashboard