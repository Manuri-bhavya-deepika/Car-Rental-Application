import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card1';
import './Ownerdashboard.css';
import { Link } from 'react-router-dom'
const Ownercarhistory = () => {
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

       
       <br></br>
        
      

      
      <div class="col-md-9">
            {/* <div class="col-md-3">
                <div class="col-md-12">
              </div>
            </div> */}
            <div className="card-list">
           <center><h1>Booking Details</h1></center> 
            <div class="col-md-3">
                <div class="col-md-12">
              </div>

            </div>
            <table>
        <tr>
        <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Car Name&&Number</th>
          <th>Booked Date</th>
          <th>Return Date</th>
        </tr>
        <tr>
          <td>1</td>
          <td>asdv</td>
          <td>dkja@sjk.h</td>
          <td>dhdk & 53</td>
          <td>5-7-22</td>
          <td>3-8-22</td>
        </tr>
        <tr>
          <td>2</td>
          <td>hgag</td>
          <td>hdgaj</td>
          <td>fdy & 1</td>
          <td>3-2-23</td>
          <td>23-3-23</td>
        </tr>
        
      </table>
    <br></br>

    <div className="card-list">
    
    <h1>Feedback Report</h1>
            {/* <div class="col-md-3">
                <div class="col-md-12">
              </div>

            </div> */}
            <table>
        <tr>
          <th>S.No</th>
          <th>Report</th>
          <th>CarName & CarNumber</th>
        </tr>
        <tr>
          <td>1</td>
          <td>ghdjfasdfghjk</td>
          <td>hsagj&45</td>
        </tr>
        <tr>
          <td>2</td>
          <td>wertyui</td>
          <td>vsbn&34</td>
        </tr>
        
      </table>
                       
        </div>

      </div>
    </div>

     <footer>
         <div className="footerdiv">
           <h3>CopyRight @Thriving Five</h3>
         </div>
     </footer>

    </div>
    
    </div>
  )
}

export default Ownercarhistory;