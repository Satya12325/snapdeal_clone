import './App.css';
import TopNav from "./Components/Nevbar/TopNav"
import Navbar from "./Components/Nevbar/Nevbar"
import SignUpBtn from "./Components/Nevbar/SignUpBtn";
import AllpageRout from "./Router/AllpageRout"
import AddToCart from './Components/Checkout/AddToCart';
import Payment from './Components/Checkout/Payment';

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
     {/* <div style={{height:"150vh"}}></div>
     {/* <AddToCart/> */}
     {/* <Payment/> */}
    </div>
  );
}

export default App;
