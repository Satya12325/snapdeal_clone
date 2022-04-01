import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards'
import {useSelector,useDispatch,shallowEqual} from "react-redux";
import {useNavigate} from "react-router-dom"
import {useEffect,useState,useContext} from "react";
import {getProductRequest,getProduct} from "../../Redux/Allproduct/action";
import { CartProvider } from '../../Context/CartContextProvider';
import {getbeautyProduct} from '../../Server/Apis'


export const BestsellerScorlling = () => {
    const dispatch = useDispatch();
    const [data,setData] = useState([]);
    let {setCartProduct} = useContext(CartProvider);
    let navigate = useNavigate();

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
        },[data.length]);

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

      const handleProduct = (product) => {
        setCartProduct(product);
        navigate('/product_details');

      }

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