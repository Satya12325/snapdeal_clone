import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from '../Home/Cards';
import {useSelector,useDispatch,shallowEqual} from "react-redux";
import {useNavigate} from "react-router-dom"
import {useEffect,useState,useContext} from "react";
import {getProductRequest,getProduct} from "../../Redux/Allproduct/action";
import { CartProvider } from '../../Context/CartContextProvider';

import {getElectronicsProduct} from '../../Server/Apis';
import "./Product.css";
import {ProductSidebar} from "./ProductSidebar"
import { Box, Slider } from '@mui/material';




function valuetext(value) {
  return `${value}%`;
}

export default function ElectrinicProduct(){
    const dispatch = useDispatch();
    const [data,setData] = useState([]);
    const [state, setState] = useState([])
    const [isLoding, setIsLoading] =useState(true)
    let {setCartProduct} = useContext(CartProvider);
    let navigate = useNavigate();


    const getProducts = async ()=>{
        const requestAction = getProductRequest();
        dispatch(requestAction);
       
        
       
        try {
           
            const data = await getElectronicsProduct();
            setIsLoading(true)
            console.log(data.data)
            setData(data.data)
           setIsLoading(false)
            // const successAction = getProduct(data.data)
            // dispatch(successAction);
        }
        catch (e) {
            console.log(e)
        }
    };


    useEffect(() => {
        getProducts();
    },[data.length]);

    const handleProduct = (product) => {
        setCartProduct(product);
        navigate('/product_details');

      }


      const handleHightoLow = (e) => {
        const option=e.target.value;
        if(option==="hightolow"){
         const updatelist =    [...data].sort((a,b)=>  (b.discounted_price) - (a.discounted_price))
         setData(updatelist)
        }
       
        if(option==="lowtohigh"){
         const updatelist =    [...data].sort((a,b)=>  (a.discounted_price) - (b.discounted_price))
         setData(updatelist)
        }
        if(option === "discount"){
            const updatelist =    [...data].sort((a,b)=> Math.floor( (b.original_price-b.discounted_price)/b.original_price * 100) -Math.floor( (a.original_price-a.discounted_price)/a.original_price * 100))
         setData(updatelist)
        }
        if( option === "newandpopular"){
            setData(state)
        } 
      };


      
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue);
  };
console.log(value);

    
      if (isLoding) return <h1 style={{ textAlign: "center" }}>...Loading</h1>;
      return (
        <div>
          <div className="product">
            <div className="SideBar">
            <ProductSidebar
          catagory="All type of Electrinic Products"
          product="All type"
          diff1="Mobile"
          diff2="Iron"
          diff3="Watch"
          />
           <Box sx={{ maxWidth: 200 }}>
             Filter By Discount
    <Slider
      // getAriaLabel={() => 'Temperature range'}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
    />
  </Box>
            </div>
            <div className="ProductDiv">
                <div style={{display: "flex", flexDirection: "row-reverse"}}>
              <div className="ProductH_l">
                <span className="rightsortby">
                  SORTBY :
                  <select onChange={handleHightoLow}>
                    <option value="newandpopular">New and Popular</option>
                    <option value="lowtohigh">Low To High</option>
                    <option value="hightolow">High To Low</option>
                    <option value="discount">Discount</option>
                  </select>
                </span>
              </div>
              </div>
              <div className="CardsDiv">
              {data?.map((item) => {
              if(Math.floor(
                ((item.original_price - item.discounted_price) /
                  item.original_price) *
                  100
              ) >= value[0] && Math.floor(
                ((item.original_price - item.discounted_price) /
                  item.original_price) *
                  100
              ) <=value[1]){
                return(

                <div className="Cards">
                <Cards
                  meta={item}
                  key={item._id}
                  image={item.images[0]}
                  title={item.title}
                  price={item.original_price}
                  d_price={item.discounted_price}
                  discount={Math.floor(
                    ((item.original_price - item.discounted_price) /
                      item.original_price) *
                      100
                  )}
                  value={item.rating}
                  handleProduct={handleProduct}
                />
              </div>
                )
              }
              
})}
              </div>
            </div>
          </div>
        </div>
      );
    }
    