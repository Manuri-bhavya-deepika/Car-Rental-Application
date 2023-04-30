import React from 'react'
import audi from '../Images/audi.png'
import {Link} from 'react-router-dom'
function Audi() {
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
             <img src={audi} id='example'/>
             </center>
           </div>
           <div className='col-md-5' id='sem3'>
            <center>
              <h5 id='alexa'>CAR NAME:AUDI</h5><br/>
              <h5 id='alexa'>CAR MODEL:2023</h5><br/>
              <h5 id='alexa'>CAR PRICE:40 Lakhs</h5><br/>
              <h5 id='alexa'>CAR COLOUR:RED</h5>
                 {/* <table>
                    <tr>
                        <td>CAR NAME :</td>
                        <td>AUDI</td>
                    </tr>
                    <tr>
                        <td>CAR MODEL :</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>CAR PRICE :</td>
                        <td>40 Lakhs</td>
                    </tr>
                    <tr>
                        <td>CAR COLOUR :</td>
                        <td>Red</td>
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

export default Audi