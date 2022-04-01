import styles from './AddToCart.module.css';
import {BsHeart} from 'react-icons/bs';
import {ImPriceTag} from 'react-icons/im'
import ProductImg from './ProductImg';
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {getmensProductId} from '../../Server/Apis'
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import  Productskleton from "./Productskleton"



// import img2 from '../../Images/img2.jpg';
// import snapdeal from '../../Images/snapdeal.png'

// const fetchData = (id) => {
//     return axios.get(getmensProductId(id));
//   };


export default function ProductDetails(){
    const { id } = useParams();
    const [isLoding, setIsLoading] = useState(true);
    const isMounted = useRef(null);
    const [data, setData] = useState(null);
    const [sizepick, setSizePick] = useState("");




    const getProducts = async () => {
        try {
          setIsLoading(true);
          const { data } = await getmensProductId(id);
          if (!isMounted.current) {
            return;
          }
          setData(data);
          console.log(data,"data")
          setIsLoading(false);
        } catch (error) {
            console.log(error);
          }
        };

        useEffect(() => {
            // fetchProductDetail();
            getProducts();
            if (!isMounted.current) {
              isMounted.current = true;
            }
            return () => {
              isMounted.current = false;
            };
        
            // fetchData();
          }, [id]);
          if (isLoding) return <h3>...Loading</h3>;
    return (
        <>
            <div className={styles.main}>
                <div className={styles.cont}>
                   <div>
                        <ProductImg
                        image={data.images[0]}
                        />
                   </div>
                
                    <div>
                        <div className={styles.heading}>
                            <div>
                                <p>Category: {data.category}  Name: {data.title}
                                {data.details.Fabric} {data.details.Pattern}
                                </p>
                            </div>
                            <div>
                                <div style={{paddingTop:"1.3rem"}}><BsHeart size="1.2rem" style={{cursor:"pointer"}}/></div>                     
                            </div>          
                        </div>

                        <div className={styles.info}>
                            <div className={styles.price}>
                                <div>
                                    <p>MRP <span style={{textDecoration: "line-through"}}>Rs. {data.original_price} </span>(Inclusive of all taxes)</p>
                                    <div style={{display: "flex"}}><p className={styles.rs}>Rs.{data.discounted_price}</p>
                                    <span className={styles.dis}>{Math.ceil((data.original_price-data.discounted_price)/data.original_price*100)}% OFF</span></div>
                                </div>

                                <div>
                                    <p>(2) Offers | Application on cart</p>
                                    <div className={styles.offers}>
                                        <div>
                                            <div><ImPriceTag color='white'/></div>
                                            <div style={{borderBottom: "1px solid rgb(193,193,189)"}}>
                                                <p>15% Instant Discount Using AU Small Finance Bank Debit & Credit Cards</p>
                                                <p style={{color: "rgb(37,168,237)"}}>T&C</p>
                                            </div>
                                        </div>
                                        <div style={{marginTop: "0.5rem"}}>
                                            <div><ImPriceTag color='white'/></div>
                                            <div>
                                                <p>15% Instant Discount Using AU Small Finance Bank Debit & Credit Cards</p>
                                                <p style={{color: "rgb(37,168,237)"}}>T&C</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.colorDiv}>
                                <div></div>
                                <div className={styles.imgCont}>
                                    <div> <img src={data.images[0]} /><p style={{textAlign: "center"}}></p></div>
                                    <div> <img src={data.images[0]} /><p style={{textAlign: "center"}}></p></div>
                                </div>

                            </div>

                            <div className={styles.sizeDiv}>
                                <div>Size</div>
                                <div>
                                    {/* {
                                        data.sizes?.map((e)=>(
                                            <div>{e}</div>
                                        ))
                                    } */}
                                    
                                    <Select
                  style={{ width: "250px", color: "black" }}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={sizepick}
                 
                  onChange={(e)=>setSizePick(e.target.value)}
                >
                  {data.sizes?.map((item) => (
                    <MenuItem
                      value={item}
                      style={{ textTransform: "uppercase" }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
                                </div>
                            </div>

                            <div className={styles.btnDiv}>
                                <div className={styles.btn} >ADD TO CART</div>
                                <div>
                                    <div>
                                        <div className={styles.icon}><img src="" width="25px"/></div>
                                        <p>BUY NOW</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.deliveryDiv}>
                                <div>Delivery</div>
                                <div className={styles.pincode}>
                                        <input type="number" placeholder="Enter pincode" className={styles.input}/>
                                        <div className={styles.check}>CHECK</div>
                                </div>
                                <div><p>Genrally delivered in 5 - 9 days</p></div>
                            </div>
                        </div>

                        <div style={{marginTop: "2rem"}} className={styles.last}>
                            <h4 className={styles.lasth1}>7 Days Easy Returns</h4>
                            <p>Trustpay: 100% Payment Protection. Return or Replacement is applicable for 7 days after delivery </p>
                        </div>

                    </div>
                </div>




                <div className={styles.cont} style={{marginTop: "5rem"}}>

                </div>
            </div>
        </>
    )
}