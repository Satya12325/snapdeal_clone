import './App.css';
import TopNav from "./Components/Nevbar/TopNav"
import Navbar from "./Components/Nevbar/Nevbar"
import {Footer} from './Components/Footer/Footer';
import { HomeSidebar } from './Components/HomeSidebar/HomeSidebar';



function App() {
  return (
    <div className="App">
     <TopNav/>
     <Navbar/>
     <HomeSidebar />
     <Footer />
     <div style={{height:"150vh"}}></div>
    </div>
  );
}

export default App;
