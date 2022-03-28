import styles from './AddToCart.module.css';
import {BsHeart} from 'react-icons/bs';
import {ImPriceTag} from 'react-icons/im'
import ProductImg from './ProductImg';
import img2 from '../../Images/img2.jpg';
import snapdeal from '../../Images/snapdeal.png'
export default function AddToCart(){
    return (
        <>
            <div className={styles.main}>
                <div className={styles.cont}>
                   <div>
                        <ProductImg/>
                   </div>
                
                    <div>
                        <div className={styles.heading}>
                            <div>
                                <p>Veirdo - 100% Cotton Regular Fit Green Men's T-Shirt ( Pack of 1 )</p>
                            </div>
                            <div>
                                <div style={{paddingTop:"1.3rem"}}><BsHeart size="1.2rem" style={{cursor:"pointer"}}/></div>                     
                            </div>          
                        </div>

                        <div className={styles.info}>
                            <div className={styles.price}>
                                <div>
                                    <p>MRP <span style={{textDecoration: "line-through"}}>Rs. 1,199 </span>(Inclusive of all taxes)</p>
                                    <div style={{display: "flex"}}><p className={styles.rs}>Rs. 309</p>
                                    <span className={styles.dis}>74% OFF</span></div>
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
                                <div>Color</div>
                                <div className={styles.imgCont}>
                                    <div> <img src={img2} /><p style={{textAlign: "center"}}>Green</p></div>
                                    <div> <img src={img2} /><p style={{textAlign: "center"}}>Green</p></div>
                                </div>

                            </div>

                            <div className={styles.sizeDiv}>
                                <div>Size</div>
                                <div>
                                    <div>S</div>
                                    <div>M</div>
                                    <div>L</div>
                                </div>
                            </div>

                            <div className={styles.btnDiv}>
                                <div className={styles.btn} >ADD TO CART</div>
                                <div>
                                    <div>
                                        <div className={styles.icon}><img src={snapdeal} width="25px"/></div>
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



{/* 
                <div className={styles.cont}>
                   <div>
                        <ProductImg imgArr={product.images}/>
                   </div>
                
                    <div>
                        <div className={styles.heading}>
                            <div>
                                <p>{product.title}</p>
                            </div>
                            <div>
                                <div style={{paddingTop:"1.3rem"}}><BsHeart size="1.2rem" style={{cursor:"pointer"}}/></div>                     
                            </div>          
                        </div>

                        <div className={styles.info}>
                            <div className={styles.price}>
                                <div>
                                    <p>MRP <span style={{textDecoration: "line-through"}}>Rs. {product.original_price}</span> (Inclusive of all taxes)</p>
                                    <div style={{display: "flex"}}><p style={{color:"red", fontSize: "1.6rem", marginRight:"1rem"}}>Rs. {product.discounted_price}</p>
                                    <span className={styles.dis}>74% OFF</span></div>
                                </div>

                                <div>
                                    <p>(2) Offers | Application on cart</p>
                                    <div className={styles.offers}>
                                        <div>
                                            <div><ImPriceTag color='white'/></div>
                                            <div style={{borderBottom: "1px solid rgb(193,193,189)", paddingBottom: "0.3rem"}}>
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
                                <div>Color</div>
                                <div className={styles.imgCont}>
                                    <div> <img src={product.images[0]} /></div>
                                </div>

                            </div>

                            <div className={styles.sizeDiv}>
                                <div>Size</div>
                                <div>
                                    {
                                        product.sizes.map( (ele, ind) => (<div key={ind}>{ele}</div> ))
                                    }
        
                                </div>
                            </div>

                            <div className={styles.btnDiv}>
                                <div className={styles.btn}>ADD TO CART</div>
                                <div>
                                    <div>
                                        <div className={styles.icon}><img src={snapdeal} width="25px"/></div>
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

                        <div style={{marginTop: "2rem"}}>
                            <h4>7 Days Easy Returns</h4>
                            <p>Trustpay: 100% Payment Protection. Return or Replacement is applicable for 7 days after delivery </p>
                        </div>

                    </div>
                </div> */}













                <div className={styles.cont} style={{marginTop: "5rem"}}>

                </div>
            </div>
        </>
    )
}