import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards'
import {useSelector,useDispatch,shallowEqual} from "react-redux";
import {Link} from "react-router-dom"
import {useEffect,useState} from "react";
import {getProductRequest,getProduct} from "../../Redux/Allproduct/action";

import {getbeautyProduct} from '../../Server/Apis'


export const BestsellerScorlling = () => {
    const dispatch = useDispatch();
    const [data,setData] = useState([]);
    const {product,isLooding} = useSelector(
        (state) => state.app,
        shallowEqual
        );

       
        const getProducts = async ()=>{
            const requestAction = getProductRequest();
            dispatch(requestAction);
           
            
           
            try {
                const data = await getbeautyProduct();
                console.log(data.data)
                setData(data.data)
                // const successAction = getProduct(data.data)
                // dispatch(successAction);
            }
            catch (e) {
                console.log(e)
            }
        };


        useEffect(() => {
            getProducts();
        },[]);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <div>
        <div style={{ width: "90%",margin: "auto"}}>       
        <Carousel responsive={responsive} 
        infinite={true}  
        containerClass="carousel-container"
         itemClass="carousel-item-padding-40-px"
         focusOnSelect={true}
         autoPlay={false}
         autoPlaySpeed={10000}
         >
        {
            data?.map((item)=>(
                <Cards
                    key={item._id}
                    image={item.images[0]}
                    title={item.title}
                    price={item.original_price}
                    d_price={item.discounted_price}
                    discount={Math.floor(item.discounted_price/item.original_price*100)}
                    value={item.rating}
                />
            ))
        }
        {/* <Cards
                   
                /> */}
        </Carousel>
        </div>    
    </div>
  )
}