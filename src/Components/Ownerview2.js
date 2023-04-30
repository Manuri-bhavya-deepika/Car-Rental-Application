import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import './Ownerdashboard.css';
import {Link} from 'react-router-dom'
import audi from '../Images/audi.png'

const Ownerview2 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    console.log("Selected option:", event.target.value);
  }

  return (
    <div className="container-fluid">

      {/* Top */}
      <div className="row mb-3">

        <div className="col-md-12 mb-3">
          <div className="bg-light"><h3>Car Rentals</h3><i class="fa-solid fa-user"></i></div>
          
        </div>

        {/* <div className="col-md-2 mb-3">
          <div className="bg-light"><i class="fa-solid fa-user"></i></div>
          <i class="fa-solid fa-user"></i>
        </div> */}
      </div>

      
      <div class="row">
         <div className="sidedashboard">
             <div className="ListMenu">
                
             <div className="list">
                    <Link to="/Ownercarlist" className="owner"><h4>Car List</h4></Link>
                </div>
                <div className="list">
                    <Link to="/Ownercarstatus" className="owner"><h4>Status</h4></Link>
                </div>
                <div className="list">
                    <Link to="/Ownercarhistory" className="owner"><h4>History</h4></Link>
                </div>
                <div className="list">
                    <Link to="/Ownercarpayment" className="owner"><h4>Payment</h4></Link>
                </div>
             </div>
         </div>

       
        <div class="col-md-9">
            {/* <div class="col-md-3">
                <div class="col-md-12">
              </div>

            </div> */}
            <div className="card-list">
                <div></div>
                <div className="shadowdiv">
            <div class="col-md-3">
            <Card image={audi}/>
      <Link to="/Book"><button className="viewbutton">Book</button></Link>
      </div>
      </div> 
      <div></div>
      
      
      
    </div>
    <br></br>

    <div className="card-list">
        
       <div></div>
      
      <div className="shadowdivcarlist">
           <h4>Name:AUDI</h4><br></br>
           <h4>Number:1223</h4><br></br>
           <h4>Miles driven:104</h4><br></br>
      </div>
      <div></div>
      
    </div>
    

            
        </div>

      </div>

     <footer>
         <div className="footerdiv">
           <h3>CopyRight @Thriving Five</h3>
         </div>
     </footer>

    </div>
    
    
  )
}

export default Ownerview2;