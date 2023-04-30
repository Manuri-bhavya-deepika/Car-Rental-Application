import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Adminnavbar.css'
const Admin1 = () => {
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
              <Link to="/Navbar" style={{textDecoration:'none',color:'black'}}>Available cars</Link>
</h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-warning"><h3>
              {/* <a class="dropdown-item" href="/#">All Users</a> */}
              <Link to="/Admin1" activeClassName='active-link' style={{textDecoration:'none',color:'white'}}>All Users</Link>
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
            <div class=" " ><h3>
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
          <div class="bg-warning"><h3>User Information</h3></div>
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
                            <th>Name</th>
                            <th>User ID</th>
                            <th>Password</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Santhu</td>
                            <td>Santhu1234</td>
                            <td>Santhu@1234</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Meghana</td>
                            <td>Meghana987</td>
                            <td>Meghana@1234</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>neeraja</td>
                            <td>neeraja347</td>
                            <td>neeraja@347</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>bhavya</td>
                            <td>bhavya987</td>
                            <td>bhavya@1234</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>anitha</td>
                            <td>anitha987</td>
                            <td>anitha@1234</td>
                        </tr>
                        <tr>
                            <td>6</td>
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

export default Admin1;