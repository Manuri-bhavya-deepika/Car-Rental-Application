import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Adminnavbar.css'
const Admin3 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [query, setQuery] = useState('');

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

      
      <div class="row">

        {/* Aside */}
        <div class="col-md-2">
          <div class="col-md-12 mb-3">
            <div class="bg-warning"><h3> 
                {/* <a class="dropdown-item" href="/#">Available Cars</a> */}
                <Link to="/Adminnavbar" style={{textDecoration:'none',color:'black'}}>Available cars</Link>
</h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-warning"><h3>
                {/* <a class="dropdown-item" href="/#">All Users</a> */}
                <Link to="/Admin1" style={{textDecoration:'none',color:'black'}}>All Users</Link>
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
                <Link to="/Admin3" activeClassName='active-link' style={{textDecoration:'none',color:'white'}}>View Status</Link>
                </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-warning"><h3>
                {/* <a class="dropdown-item" href="/#">View History</a> */}
                <Link to="/Adminnavbar"  style={{textDecoration:'none',color:'black'}}>View History</Link>
            </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class=" "><h3>
              <select value={selectedOption} onChange={handleSelect} style={{outline: 'none',backgroundColor: '#f2c13a',padding:'20px',width:'230px'}}>
                <option value="">Manage</option>
                <option value="/Manage1">Manage users</option>
                <option value="/Manage2">Manage Owners</option>
                <option value="/Manage3">Car Advertisements</option>
              </select></h3>
            </div>
          </div>

        </div>


        {/* Main Content */}
        <div class="col-md-9">
        <div class="row">
          
          <div class="col-md-9">
          <div class="bg-warning"><h3>Car Status</h3></div>
          </div>
          <div class="col-md-3" style={{marginTop:'20px'}}>
          
            <div>
          <input
           type="text"
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           placeholder="Search"
          />
         <button onClick={() => console.log(query)}>Search</button>
         </div>
          </div>
          </div>
            
          <div class="row">
            <div class="tab1">
                <Table Striped bordered hover style={{marginTop:'60px',borderColor: 'black',boxShadow:'20px 20px 20px  #5e5e5d'}}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Car Name</th>
                            <th>Fuel</th>
                            <th>Price</th>
                            <th>Working</th>
                            <th>Not Working</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Audi</td>
                            <td>Diesel</td>
                            <td>329/hr</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Benz</td>
                            <td>Diesel</td>
                            <td>627/hr</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
          </div>
       

        </div>

      </div>


    </div>
    
  )
}

export default Admin3;