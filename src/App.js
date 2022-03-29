import './App.css';
import TopNav from "./Components/Nevbar/TopNav"
import Navbar from "./Components/Nevbar/Nevbar"
import SignUpBtn from "./Components/Nevbar/SignUpBtn";
import AllpageRout from "./Router/AllpageRout";
import {Footer} from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
     <TopNav/>
     <Navbar/>
     <div style={{marginTop:"38px"}}></div>
     <AllpageRout/>
     {/* <div style={{marginTop:"50px",backgroundColor:"red"}}>
     <SignUpBtn/>
     </div> */}
     {/* <div style={{height:"150vh"}}></div> */}
     <Footer/>
    </div>
  );
}

export default App;
