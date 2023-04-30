import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card1';
import './Ownerdashboard.css';
import { Link } from 'react-router-dom'

const Ownercarstatus = () => {
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
                <div className="shadowdiv">
            <div class="col-md-3">
      <Card
        
        image="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1"
      />
      <div className="carstatus">
          <b><p>Booked : <br></br> Remaining :</p></b>
          
      </div>
      </div>
      </div> 
      <div className="shadowdiv">
      <div class="col-md-3">
      <Card
        
        image="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"
      />
      <div className="carstatus">
          <b><p>Booked : <br></br> Remaining :</p></b>
          
      </div>
      </div>
      </div>
      <div className="shadowdiv">
      <div class="col-md-3">
      <Card
        
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YECAWoK6EJFgGup_iLUseWY3du8rXfICvA&usqp=CAU"
      />
      <div className="carstatus">
          <b><p>Booked : <br></br> Remaining :</p></b>
          
      </div>
      </div>
      </div>
      
      
    </div>
    <br></br>

    <div className="card-list">
          <div className="shadowdiv">
            <div class="col-md-3">
      <Card
       
        image="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2016/10/Innova-main.jpg"
      />
      <div className="carstatus">
          <b><p>Booked : <br></br> Remaining :</p></b>
          
      </div>
      </div> 
      </div>
      <div className="shadowdiv">
      <div class="col-md-3">
      <Card
       
        image="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/1-0-home/page-properties/rrmc-homepage-ghost-share-image.jpg"
      />
      <div className="carstatus">
          <b><p>Booked : <br></br> Remaining :</p></b>
          
      </div>
      </div>
      </div>
      <div className="shadowdiv">
      <div class="col-md-3">
      <Card
        
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/800px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg"
      />
      <div className="carstatus">
          <b><p>Booked : <br></br> Remaining :</p></b>
          
      </div>
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

export default Ownercarstatus;