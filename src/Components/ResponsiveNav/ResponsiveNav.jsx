import styles from './Responsive.module.css'
import RollerShadesClosedOutlinedIcon from '@mui/icons-material/RollerShadesClosedOutlined';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';
import Cards from "./CardForNav"




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



const data = [
    {
        id:1,
        name:"Popular",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Popular_L0_Navigation_Tile_new22.webp"
    },
    {
        id:2,
        name:"Men",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Men_L0_Navigation_Tile_new22.webp"
    },
    {
        id:3,
        name:"Women",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Women_L0_Navigation_Tile_new22.webp"
    },
    {
        id:4,
        name:"Kids",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Kids_L0_Navigation_Tile_new22.webp"
    },
    {
        id:5,
        name:"Beauty & Personal Care",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Beauty_L0_Navigation_Tile_new22.webp"
    },
    {
        id:6,
        name:"Home & Living",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Home_L0_Navigation_Tile_new22.webp"
    },
    {
        id:7,
        name:"Sports & Fitness",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Sports_L0_Navigation_Tile_new22.webp"
    },
    {
        id:8,
        name:"Health & Wellness",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Health_L0_Navigation_Tile_new22.webp"
    },
    {
        id:9,
        name:"Electronics & Assosiries",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Electronics_L0_Navigation_Tile_new22.webp"
    },
    {
        id:10,
        name:"Automotive",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Automobiles_L0_Navigation_Tile_new22.webp"
    },
    {
        id:11,
        name:"Othercategory",
        image:"https://n1.sdlcdn.com/imgs/a/b/c/sdtv/Others_L0_Navigation_Tile_new22.webp"
    }


    
]









export default function ResposiveNav(props){
    



    return(
        <div style={{background:"#fff"}}>
            <div className={styles.Topnav}>
                <img style={{ height: "100%"}} src="https://logos-download.com/wp-content/uploads/2016/10/SnapDeal_logo_Snap_Deal.png" alt="" />
            </div>
            <div>

            <React.Fragment >
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
         style={{                
                      background:"#fff",
                      padding:"5px 10px",
                      height:"",
                      marginTop: "70px",
                      color:"black",
                      boxShadow: "none"
                    }}
        >
            <div className={styles.Scrollbar}>
                    {
                        data.map((item)=>(
                            <Cards
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            />
                        ))
                    }
                
            </div>
          
        </AppBar>
      </HideOnScroll>
      <Toolbar />      
    </React.Fragment>
            </div>

        </div>
    )
}