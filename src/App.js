import './App.css';
import TopNav from "./Components/Nevbar/TopNav"
import Navbar from "./Components/Nevbar/Nevbar"



function App() {
  return (
    <div className="App">
     <TopNav/>
     <Navbar/>
     <div style={{height:"150vh"}}></div>
    </div>
  );
}

export default App;
