import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import './Adminnavbar.css';
//import Manage1 from './Manage1.js';
const AdminnavBar = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log("Selected option:", selectedValue);
    window.location.href = selectedValue;
  }
  
  return (
    <div className="container-fluid">

      {/* Top */}
      <div className="row mb-3">

        <div className="col-md-10 mb-3">
          <div className="bg-warning"><h3>Car Rental</h3></div>
        </div>

        <div className="col-md-2 mb-3">
          <div className="bg-warning"><h3>Admin Info</h3></div>
        </div>
      </div>

      
      <div class="row" >

        {/* Aside */}
        <div class="col-md-2"  >
          <div class="col-md-12 mb-3" >
            <div class="bg-warning" ><h3> 
              {/* <a class="dropdown-item" href="/#">Available Cars</a> */}
              <Link to="/Navbar" activeClassName='active-link' style={{textDecoration:'none',color:'white'}}>Available cars</Link>
</h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-warning"><h3>
              {/* <a class="dropdown-item" href="/#">All Users</a> */}
              <Link to="/Admin1" style={{textDecoration:'none',color:'black',}}>All Users</Link>
              </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-warning"><h3>
              {/* <a class="dropdown-item" href="/#">All Owners</a> */}
              <Link to="/Admin2" style={{textDecoration:'none',color:'black'}}>All Owners</Link>
              </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-warning"><h3>
              {/* <a class="dropdown-item" href="/#">View Status</a> */}
              <Link to="/Admin3" style={{textDecoration:'none',color:'black'}}>View Status</Link>
              </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-warning"><h3>
              {/* <a class="dropdown-item" href="/#">View History</a> */}
              <Link to="/Adminnavbar" style={{textDecoration:'none',color:'black'}}>View History</Link>
              </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class=" "><h3>
              <select value={selectedOption} onChange={handleSelect} style={{outline: 'none',backgroundColor: '#f2c13a',padding:'20px',width:'230px'}} >
               <option value="">Manage</option>
                <option value="/Adminmanage1">Manage Users </option>
                <option value="/Adminmanage2">Manage Owners</option>
                <option value="/Adminmanage3">Car Advertisements</option>
              </select></h3>
            </div>
          </div>

        </div>


        {/* Main Content */}
        
        <div class="col-md-9">
            <div class="col-md-3">
                <div class="col-md-12">
              </div>
            </div>
            <div className="card-list">
            <div class="col-md-3">
      <Card
        title="Honda"
        description="Honda cars are known for their reliability, fuel efficiency, and  known for their quality, reliability, and innovation."
        image="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1"
      />
      </div> 
      <div class="col-md-3">
      <Card
        title="Lamborghini"
        description="Lamborghini cars are renowned for their striking design, exceptional performance, and exclusivity."
        image="https://imgd.aeplcdn.com/1200x900/n/cw/ec/14054/huracan-evo-exterior-right-front-three-quarter-2.jpeg?q=75"
      />
      </div>
      <div class="col-md-3">
      <Card
        title="Benz"
        description="Benz cars, also known as Mercedes-Benz, are synonymous with luxury, sophistication, and advanced engineering."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YECAWoK6EJFgGup_iLUseWY3du8rXfICvA&usqp=CAU"
      />
      </div>
      
      
    </div>
    <br></br>
    <br></br>
    <div className="card-list">
            <div class="col-md-3">
      <Card
        title="Toyota Innova Crysta"
        description="Toyota Innova Crysta cars are versatile, spacious, and comfortable family vehicles with a reputation for reliability."
        image="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2016/10/Innova-main.jpg"
      />
      </div> 
      <div class="col-md-3">
      <Card
        title="Rolls-Royce"
        description="Rolls-Royce cars are the ultimate in luxury and exclusivity, with unparalleled craftsmanship and attention to detail."
        image="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/1-0-home/page-properties/rrmc-homepage-ghost-share-image.jpg"
      />
      </div>
      <div class="col-md-3">
      <Card
        title="Thar"
        description="Thar is a rugged and capable off-road SUV from Mahindra, known for its iconic design and excellent off-road performance."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/800px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg"
      />
      </div>
      
    </div>
    

            
        </div>

      </div>


    </div>
    
  )
}

export default AdminnavBar;