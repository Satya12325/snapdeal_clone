import "./App.css";
import TopNav from "./Components/Nevbar/TopNav";
import Navbar from "./Components/Nevbar/Nevbar";
import SignUpBtn from "./Components/Nevbar/SignUpBtn";
import AllpageRout from "./Router/AllpageRout";
import { Footer } from "./Components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(244, 51, 151);",
      },
      secondary: {
        main: "#1976d2",
      },
    },
    typography: {
      fontFamily: ["regular", "sans-serif"].join(","),
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TopNav />
        <Navbar />
        <div style={{ marginTop: "38px" }}></div>
        <AllpageRout />
        {/* <div style={{marginTop:"50px",backgroundColor:"red"}}>
     <SignUpBtn/>
     </div> */}
        {/* <div style={{height:"150vh"}}></div> */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
