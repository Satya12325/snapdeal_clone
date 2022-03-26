
import { useState } from "react";
import RollerShadesClosedOutlinedIcon from '@mui/icons-material/RollerShadesClosedOutlined';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function TopNav(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
         style={{
            
                      display: "flex",
                      justifyContent: "space-between",
                      background:"#C6003D",
                      padding:"5px 50px"
                    }}
        >
           <div
          style={{
            
            display: "flex",
            justifyContent: "space-between",
            background:"#C6003D",
            fontSize: "12px"
          }}
          >
          <div>Brand Waali Quality, Bazaar Waali Deal!</div>
        <div style={{display: "flex",width: "45%", justifyContent: "space-between"}}>
          <div>Impact@Snapdeal</div>
          <div>Gift Cards</div>
          <div>Help Center</div>
          <div>Sell On Snapdeal</div>
          <div style={{display: "flex"}}>
            <RollerShadesClosedOutlinedIcon
            style={{fontSize:"16px"}}
          /> Download App</div>
        </div>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />      
    </React.Fragment>
  );
}

// export default function () {
//   const [display, setDisplay] = useState("block");

//   window.addEventListener("scroll", () => {
//     var scrollTop = document.documentElement.scrollTop;
//     if (scrollTop >= 10) {
//       setDisplay("none");
//     } else if (scrollTop < 100) {
//       setDisplay("block");
//     }
//   });

//   return (
//     <>
//       <div
//         style={{
//           display: display,   
//         }}
//       >
//           <div
//           style={{
            
//             display: "flex",
//             justifyContent: "space-between",
//             background:"#C6003D",
            
//           }}
//           >
//           <div>Brand Waali Quality, Bazaar Waali Deal!</div>
//         <div style={{display: "flex",width: "45%", justifyContent: "space-between"}}>
//           <div>Impact@Snapdeal</div>
//           <div>Gift Cards</div>
//           <div>Help Center</div>
//           <div>Sell On Snapdeal</div>
//           <div><RollerShadesClosedOutlinedIcon/> Download App</div>
//         </div>
//           </div>
        
//       </div>
//     </>
//   );
// }
