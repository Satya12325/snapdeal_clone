import {TiTick} from 'react-icons/ti';
import {RiCloseFill} from 'react-icons/ri';
import styles from './Payment.module.css';
import img2 from '../../Images/img2.jpg';
import styled from 'styled-components';
import { useState } from 'react';

const Notification = styled.div`
    background-color: rgb(25,188,156);
    padding: 1rem;
    display: ${(prop) => prop.show ? "flex" : "none"} ;
    height: 50px;
    width: 100%;
`
export default function Payment(){
    const [popup, setPopup] = useState(true);
    console.log(popup)
    return(
        <>
            <div className={styles.main}>
                <div className={styles.cont}>
                    <Notification show={popup} className={styles.notif}>
                        <div><TiTick/></div>
                        <div>
                            <h1> Pelvic Red Loafers is already present in your cart. Please make use of the quantity field to increase quantity.</h1>
                        </div>
                        <div onClick={() => setPopup(false)}><RiCloseFill/></div>
                    </Notification>

                    <div className={styles.cart}>
                        <div >
                            <img src={img2} alt="cart" width="70%"/>
                        </div>
                        <div>
                            <p className={styles.heading}>Pelvic Red Loafers</p>
                            <p>Rs. 319</p>
                        </div>
                        <div>
                            <p className={styles.heading}>Your Order <span className={styles.items}>2 Items</span></p>
                            <h2 className={styles.value}>You Pay : <span style={{color:"black"}}>Rs. 608</span></h2>
                            <p className={styles.view}>(Including delivery and other charges. View Cart for details)</p>
                        </div>

                        <div>
                            <div>PROCEED TO CHECKOUT</div>
                            <div>VIEW CART</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}