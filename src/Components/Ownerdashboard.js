import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card1';
import './Ownerdashboard.css';
import { Link } from 'react-router-dom'
import benz from '../Images/benz.png'
import audi from '../Images/audi.png'
import roll from '../Images/roll.png'
import thar from '../Images/thar.png'
import brezza from '../Images/brezza.png'
import nexon from '../Images/nexon.png'

const Ownerdashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    console.log("Selected option:", event.target.value);
  }

  return (
    <div className="container-fluid" id="admin">

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
                <div className="shadowdiv">
            <div class="col-md-3">
      <Card image={benz}/>
     <Link to="/Ownerview1"> <button className="viewbutton">View</button></Link>
      </div>
      </div> 
      <div className="shadowdiv">
      <div class="col-md-3">
      <Card image={audi}/>
      <Link to="/Ownerview2"><button className="viewbutton">View</button></Link>
      </div>
      </div>
      <div className="shadowdiv">
      <div class="col-md-3">
      <Card image={roll}/>
      <Link to="/Ownerview3"><button className="viewbutton">View</button></Link>
      </div>
      </div>
      
      
    </div>
    <br></br>

    <div className="card-list">
          <div className="shadowdiv">
            <div class="col-md-3">
            <Card image={thar}/>
      <Link to="/Ownerview4"><button className="viewbutton">View</button></Link>
      </div> 
      </div>
      <div className="shadowdiv">
      <div class="col-md-3">
      <Card image={brezza}/>
      <Link to="/Ownerview5"><button className="viewbutton">View</button></Link>
      </div>
      </div>
      <div className="shadowdiv">
      <div class="col-md-3">
      <Card image={nexon}/>
      <Link to="/Ownerview6"><button className="viewbutton">View</button></Link>
      </div>
      </div>
      
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

export default Ownerdashboard;