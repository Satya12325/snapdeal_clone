import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards'
import {useSelector,useDispatch,shallowEqual} from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import {useEffect} from "react";
import {getProductRequest,getProduct} from "../../Redux/Allproduct/action";
import axios from 'axios';
import {getmensProduct} from '../../Server/Apis';
import { CartProvider } from '../../Context/CartContextProvider';


export const CardScorlling = () => {
    const dispatch = useDispatch();
    let {setCartProduct} = useContext(CartProvider);
    let navigate = useNavigate();

    const {product,isLooding} = useSelector(
        (state) => state.app,
        shallowEqual
        );

       
        const getProducts = async ()=>{
            const requestAction = getProductRequest();
            dispatch(requestAction);
           
            
            // .then((response) => {
            //     console.log(response)
            //     const successAction = getProduct(response)
            //     dispatch(successAction);
            // })
            // .catch((error) => {
            //     console.log(error);
            // })
            try {
                const data = await getmensProduct();
                console.log(data.data)
                const successAction = getProduct(data.data)
                dispatch(successAction);
            }
            catch (e) {
                console.log(e)
            }
        };


        useEffect(() => {
            getProducts();
        },[product.length]);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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

      const handleProduct = (product) => {
        setCartProduct(product);
        navigate('/product_details');

      }
  return (
    <div>
        <div>       
        <Carousel responsive={responsive} 
        infinite={true}  
        containerClass="carousel-container"
         itemClass="carousel-item-padding-40-px"
         focusOnSelect={true}
         autoPlay={false}
         autoPlaySpeed={10000}
         >
        {
            product?.map((item)=>(
                <Cards
                    meta={item}
                    key={item._id}
                    image={item.images[0]}
                    title={item.title}
                    price={item.original_price}
                    d_price={item.discounted_price}
                    discount={Math.floor((item.original_price-item.discounted_price)/item.original_price*100)}
                    value={item.rating}
                    handleProduct={handleProduct}
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