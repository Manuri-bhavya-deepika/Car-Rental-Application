import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './Components/Userdashboard.js'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Usernavbar.js'
import Login from './Components/Userlogin.js'
import Signup from './Components/Usersignup.js'
import Rentcar from './Components/Rentcar.js'
import Payment from './Components/Payment.js'
import Feedback from './Components/Feedback.js'
import Modifications from './Components/Modifications.js'
import Status from './Components/Status.js'
import Bmw from './Components/Bmw.js'
import Thar from './Components/Thar.js'
import Benz from './Components/Benz.js'
import Roll from './Components/Roll.js'
import Audi from './Components/Audi.js'
import Kia from './Components/Kia.js'
import Nexon from './Components/Nexon.js'
import Hyundai from './Components/Hyundai.js'
import Brezza from './Components/Brezza.js'
import Book from './Components/Book.js'


import Adminlogin from './Components/Adminlogin.js'
import Adminsignup from './Components/Adminsignup.js'
import Adminnavbar from './Components/Adminnavbar.js'
import Admin1 from './Components/Admin1.js'
import Admin2 from './Components/Admin2.js'
import Admin3 from './Components/Admin3.js'
import Adminmanage1 from './Components/Adminmanage1.js'
import Adminmanage2 from './Components/Adminmanage2.js'
import Adminmanage3 from './Components/Adminmanage3.js'


import Ownerlogin from './Components/Ownerlogin.js'
import Ownersignup from './Components/Ownersignup.js'
import Ownerdashboard from './Components/Ownerdashboard.js'
import Ownercarlist from './Components/Ownercarlist.js'
import Ownercarstatus from './Components/Ownercarstatus.js'
import Ownercarhistory from './Components/Ownercarhistory.js'
import Ownercarpayment from './Components/Ownercarpayment.js'
import Ownerview1 from './Components/Ownerview1.js'
import Ownerview2 from './Components/Ownerview2.js'
import Ownerview3 from './Components/Ownerview3.js'
import Ownerview4 from './Components/Ownerview4.js'
import Ownerview5 from './Components/Ownerview5.js'
import Ownerview6 from './Components/Ownerview6.js'
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<Navbar/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Bmw" element={<Bmw/>}/>
      <Route path="/Benz" element={<Benz/>}/>
      <Route path="/Roll" element={<Roll/>}/>
      <Route path="/Kia" element={<Kia/>}/>
      <Route path="/Thar" element={<Thar/>}/>
      <Route path="/Audi" element={<Audi/>}/>
      <Route path="/Hyundai" element={<Hyundai/>}/>
      <Route path="/Brezza" element={<Brezza/>}/>
      <Route path="/Nexon" element={<Nexon/>}/>
      <Route path="/Book" element={<Book/>}/>
      <Route path="/Rentcar" element={<Rentcar/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/Feedback" element={<Feedback/>}/>
      <Route path="/Modifications" element={<Modifications/>}/>
      <Route path="/Status" element={<Status/>}/>

      <Route path="/Adminlogin" element={<Adminlogin/>}/>
      <Route path="/Adminsignup" element={<Adminsignup/>}/>
      <Route path="/Adminnavbar" element={<Adminnavbar/>}/>
      <Route path="/Admin1" element={<Admin1/>}/>
      <Route path="/Admin2" element={<Admin2/>}/>
      <Route path="/Admin3" element={<Admin3/>}/>
      <Route path="/Adminmanage1" element={<Adminmanage1/>}/>
      <Route path="/Adminmanage2" element={<Adminmanage2/>}/>
      <Route path="/Adminmanage3" element={<Adminmanage3/>}/>

      <Route path="/Ownerlogin" element={<Ownerlogin/>}/>
      <Route path="/Ownersignup" element={<Ownersignup/>}/>
      <Route path="/Ownerdashboard" element={<Ownerdashboard/>}/>
      <Route path="/Ownercarlist" element={<Ownercarlist/>}/>
      <Route path="/Ownercarstatus" element={<Ownercarstatus/>}/>
      <Route path="/Ownercarhistory" element={<Ownercarhistory/>}/>
      <Route path="/Ownercarpayment" element={<Ownercarpayment/>}/>
      <Route path="/Ownerview1" element={<Ownerview1/>}/>
      <Route path="/Ownerview2" element={<Ownerview2/>}/>
      <Route path="/Ownerview3" element={<Ownerview3/>}/>
      <Route path="/Ownerview4" element={<Ownerview4/>}/>
      <Route path="/Ownerview5" element={<Ownerview5/>}/>
      <Route path="/Ownerview6" element={<Ownerview6/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Dashboard/> */}
       {/* <Header/> */}
    </div>
  );
}

export default App;

