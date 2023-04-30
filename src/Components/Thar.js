import React from 'react'
import thar from '../Images/thar.png'
import {Link} from 'react-router-dom'
function Thar() {
  return (
    <div className='container' id="container">
         <div className='row'>
           <div className='col-md-8' id='sem'><h2 id='rental'>CAR RENTAL APPLICATION</h2></div>
           <div className='col-md-3' id='sem1'><h3 className='cscs'>USER INFO</h3></div>
         </div><br/>
         <div className='row'>
            <center>
            <div className='col-md-6' id='sem2'><h3 id='rental1'>CAR ID</h3></div>
            </center>
         </div><br/>
         <div className='row'>
        
           <div className='col-md-5' id='sem3'>
             <center>
             <img src={thar} id='example'/>
             </center>
           </div>
           <div className='col-md-5' id='sem3'>
            <center>
            <h5 id='alexa'>CAR NAME:THAR</h5><br/>
              <h5 id='alexa'>CAR MODEL:2023</h5><br/>
              <h5 id='alexa'>CAR PRICE:50 Lakhs</h5><br/>
              <h5 id='alexa'>CAR COLOUR:Black</h5>
                 {/* <table>
                    <tr>
                        <td>CAR NAME :</td>
                        <td>THAR</td>
                    </tr>
                    <tr>
                        <td>CAR MODEL :</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>CAR PRICE :</td>
                        <td>50 Lakhs</td>
                    </tr>
                    <tr>
                        <td>CAR COLOUR :</td>
                        <td>BLACK</td>
                    </tr>
                 </table> */}
                 </center>
           </div>
         </div><br/>
         <center>
         <button className='bsbs'><Link to="/Dashboard" className='asas'><b>Back</b></Link></button>
          <button className='bsbs'><Link to="/Book" className='asas'><b>Book</b></Link></button>
         </center>
    </div>
  )
}

export default Thar