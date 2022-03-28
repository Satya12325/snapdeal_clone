import * as React from 'react';
import {TiTick} from 'react-icons/ti';
import {RiCloseFill} from 'react-icons/ri';
import {BsHeart} from 'react-icons/bs';
import styles from './Payment.module.css';
import img2 from '../../Images/img2.jpg';
import info from '../../Images/footer.png';
import styled from 'styled-components';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CartView from './CartView';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1400px',
  height: '700px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '5px'
};


const Notification = styled.div`
    background-color: rgb(25,188,156);
    padding: 1rem;
    display: ${(prop) => prop.show ? "flex" : "none"} ;
    height: 80px;
    width: 100%;
`
export default function Payment(){
    const [popup, setPopup] = useState(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(popup)
    return(
        <>
            <div className={styles.main}>
                <div className={styles.cont}>
                    <Notification show={popup} className={styles.notif}>
                        <div><TiTick/></div>
                        <div>
                            <h4 className={styles.h4}> Pelvic Red Loafers is already present in your cart. Please make use of the quantity field to increase quantity.</h4>
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
                            <div onClick={handleOpen}>VIEW CART</div>
                        </div>
                    </div>

                </div>
                <img src={info} alt="footer" />

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className={styles.cartTitle}>
                            <div><h4>Shooping Cart <span style={{fontSize:"1rem", color:"rgb(132,132,132)"}}>(1Item)</span></h4></div>
                            <div><RiCloseFill onClick={handleClose}/></div>
                        </div>

                        <div className={styles.table}>
                            <div className={styles.th}>
                                <div>Item Details</div>
                                <div>Price</div>
                                <div>Quantity</div>
                                <div style={{display:"flex"}}>
                                    <div>Delivery with Charges</div>
                                    <input placeholder="Pincode" style={{width:"70px", margin:"0 2px", border:"1px solid rgb(132,132,132)"}}/>
                                    <button style={{background:"black", color:"white", fontSize:"0.6rem"}}>CHECK</button>
                                </div>
                                <div>Subtotal</div>
                            </div>

                            <CartView/>
                        </div>

                        <div className={styles.footer}>
                            <div>
                                <p>Delivery and payment options can be selected later</p>
                                <p> Safe and Secure Payments</p>
                                <p>100% Payment Protection, Easy Returns Policy</p>
                            </div>
                            <div>
                                <div style={{display: "flex"}}><div>Sub Total: </div><div style={{marginLeft:"auto"}}>Rs. 319</div></div>
                                <div style={{display: "flex"}}><div>Delivery Charges: </div><div style={{marginLeft:"auto", color:"rgb(21, 228, 107)"}}>FREE</div></div>
                      
                            </div>
                            <div>PROCEED TO PAY Rs. 319</div>
                        </div>
                        
                    </Box>
                </Modal>
                
            </div>
        </>
    )
}