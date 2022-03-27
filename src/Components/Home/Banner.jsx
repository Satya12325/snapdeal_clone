import React, { Component } from "react";
import Slider from "react-slick";
import styles from "styled-components";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "react-elastic-carousel";
import style from "./Home.module.css";
import Cards from "./Cards"
import {CardScorlling} from "./CardScorlling"




function MediaControlCard({ image }) {
  return (
    <div style={{ width: "100%" }}>
      <img style={{ width: "100%" }} src={image} alt="" />
    </div>
  );
}

function SmallScroll() {}

export default function BannerSlider() {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },

  // ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      
    <div
    style={{
        width: "80%",
        
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={style.AutoImageSlide}>
          <div className={style.container}>
            <div className={style.wrapper}>
              <img
                className={style.img}
                src="https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg"
                alt=""
              />
              <img
                className={style.img}
                src="https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg"
                alt=""
              />
              <img
                className={style.img}
                src="https://n1.sdlcdn.com/imgs/k/e/d/printed_shirt_Web_22feb-39a72.jpg"
                alt=""
              />
              <img
                className={style.img}
                src="https://n1.sdlcdn.com/imgs/k/e/d/Breezy_Loungewear_Women_Web_22feb-a2c61.jpg"
                alt=""
              />
              <img
                className={style.img}
                src="https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg"
                alt=""
              />
              <img
                className={style.img}
                src="https://n2.sdlcdn.com/imgs/k/e/d/Summer_Styles_men_Web_22feb-255be.jpg"
                alt=""
              />
              <img
                className={style.img}
                src="https://n1.sdlcdn.com/imgs/k/e/d/Boys_Cotton_T_Shirts_Web_22feb-e273f.jpg"
                alt=""
              />
               <img
                className={style.img}
                src="https://n2.sdlcdn.com/imgs/k/e/d/Summer_Styles_men_Web_22feb-255be.jpg"
                alt=""
              />
               <img
                className={style.img}
                src="https://n1.sdlcdn.com/imgs/k/e/d/Indianwear_copy_Web_22feb-4eb13.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className={style.underBAnner}>
              <div>Snapdeal</div>
              <div>Health</div>
              <div>Trending</div>
              <div>Styles</div>
              <div>Breezy Loungewear</div>
              <div>Indianwear</div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "20%", height: "290px", backgroundColor: "red" }}
        ></div>
      </div>
      <div>
          <Typography
          variant="h6"
          noWrap
          component="div"
          style={{marginTop:"30px"}}
          >
          TRENDING PRODUCTS
          </Typography>
           <CardScorlling/>
      </div>
      </div>
    </>
  );
}
