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
import {getmensProduct} from '../../Server/Apis';


export default function ResponsiveProducts(){
    const dispatch = useDispatch();
    const [data,setData] = useState([]);
    const [men,setMen] = useState([]);
    let {setCartProduct} = useContext(CartProvider);
    let navigate = useNavigate();


    const getProducts = async ()=>{
        const requestAction = getProductRequest();
        dispatch(requestAction);
       
        
       
        try {
            const data = await getbeautyProduct();
            const mendata = await getmensProduct();
            console.log(data.data)
            setData(data.data)
            setMen(mendata.data)
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

    const handleProduct = (product) => {
        setCartProduct(product);
        navigate('/product_details');

      }

      return(
          <div>
               <div style={{ width: "96%",margin: "auto",display: "flex", flexWrap: "wrap",marginTop: "35%"}}>
                   
                   {
            data?.map((item)=>(
                
                <div style={{width:"150px"}}>
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
                </div>
            ))
            
        }
        {
            men?.map((item)=>(
                
                <div style={{width:"150px"}}>
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
                </div>
            ))
        }
                  
               </div> 
          </div>
      )
}
