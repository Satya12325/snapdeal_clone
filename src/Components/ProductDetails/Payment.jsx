import * as React from "react";
import { TiTick } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";
import styles from "./Payment.module.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState,useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CartView from "./CartView";
import { CartProvider } from "../../Context/CartContextProvider";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { removeDetails } from "../../Redux/Allproduct/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { deleteCartProduct } from "../../Server/Apis";
import { delete_api } from "../../Redux/Cacrt/cart.api";
import { UserProvider } from "../../Context/UserContextProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
};

const Notification = styled.div`
  background-color: rgb(25, 188, 156);
  padding: 1rem;
  display: ${(prop) => (prop.show ? "flex" : "none")};
  height: 80px;
  width: 100%;
`;
export default function Payment() {
  let { cartProduct } = React.useContext(CartProvider);
  const [popup, setPopup] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [totalRs, setTotalRs] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const neviget = useNavigate();
  let { user, setUser } = useContext(UserProvider);
  const [opensnackbar, setOpensnackbar] = React.useState(false);
  const { product, isLooding } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  const dispatch = useDispatch();

  //     const handleRemove = async(_id)=>{
  //         // deleteCartProduct(id)
  //     // .then((response) => {
  //     //     const sucessDelet=removeDetails(response)
  //     //     dispatch(sucessDelet)

  //     // }).catch((error) => {
  //     //     console.log(error)
  //     // })
  //         try{
  //         const data=   await deleteCartProduct(_id)
  //         console.log("delet DAta",data )

  //         }
  //        catch(err) {
  //            console.log(err)
  //        }

  // }

  React.useEffect(() => {
    axios
      .get("https://snapdeal-backend.herokuapp.com/cart")
      .then((res) => cartHandler(res.data))
      .catch((err) => console.log(err));
  });

  const cartHandler = (data) => {
    let totalPrice = 0;
    for (let item of data) {
      totalPrice += item.discounted_price;
    }
    setTotalRs(totalPrice);
    setCart(data);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
    
      <div className={styles.main}>
      <Snackbar
        anchorOrigin={{ vertical:"top", horizontal:"center" }}
        open={opensnackbar}
        autoHideDuration={4000}
        onClose={() => setOpensnackbar(false)}
        message="Please Sign in!"
        action={action}
      />
        <div className={styles.cont}>
          <Notification show={popup} className={styles.notif}>
            <div>
              <TiTick />
            </div>
            <div>
              <h4 className={styles.h4}>
                {" "}
                {cartProduct.title} added to your cart.
              </h4>
            </div>
            <div onClick={() => setPopup(false)}>
              <RiCloseFill />
            </div>
          </Notification>

          <div className={styles.cart}>
            <div>
              <img src={cartProduct.images[0]} alt="cart" width="70%" />
            </div>
            <div>
              <p className={styles.heading}>{cartProduct.title}</p>
              <p>Rs. {cartProduct.discounted_price}</p>
            </div>
            <div>
              <p className={styles.heading}>
                Your Order{" "}
                <span className={styles.items}>{cart.length} Items</span>
              </p>
              <h2 className={styles.value}>
                You Pay : <span style={{ color: "black" }}>Rs. {totalRs}</span>
              </h2>
              <p className={styles.view}>
                (Including delivery and other charges. View Cart for details)
              </p>
            </div>

            <div>
              <div
                onClick={() => {
                  if (user.isLoggedIn) {
                    if (totalRs !== 0) {
                      neviget("/address");
                    }
                  } else {
                    setOpensnackbar(true);
                  }
                }}
              >
                PROCEED TO CHECKOUT
              </div>
              <div onClick={handleOpen}>VIEW CART</div>
            </div>
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.cartTitle}>
              <div>
                <h4>
                  Shooping Cart{" "}
                  <span style={{ fontSize: "1rem", color: "rgb(132,132,132)" }}>
                    (1Item)
                  </span>
                </h4>
              </div>
              <div>
                <RiCloseFill onClick={handleClose} />
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.th}>
                <div>Item Details</div>
                <div>Price</div>
                <div>Quantity</div>
                <div style={{ display: "flex" }}>
                  <div>Delivery with Charges</div>
                  <input
                    placeholder="Pincode"
                    style={{
                      width: "70px",
                      margin: "0 2px",
                      border: "1px solid rgb(132,132,132)",
                    }}
                  />
                  <button
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "0.6rem",
                    }}
                  >
                    CHECK
                  </button>
                </div>
                <div>Subtotal</div>
              </div>

              {cart.map((item, ind) => (
                <CartView
                  product={item}
                  key={ind}
                  handelRemove={() => dispatch(delete_api(item._id))}
                />
              ))}
            </div>

            <div className={styles.footer}>
              <div>
                <p>Delivery and payment options can be selected later</p>
                <p> Safe and Secure Payments</p>
                <p>100% Payment Protection, Easy Returns Policy</p>
              </div>
              <div>
                <div style={{ display: "flex" }}>
                  <div>Sub Total: </div>
                  <div style={{ marginLeft: "auto" }}>Rs. {totalRs}</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>Delivery Charges: </div>
                  <div
                    style={{ marginLeft: "auto", color: "rgb(21, 228, 107)" }}
                  >
                    FREE
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  if (user.isLoggedIn) {
                    if (totalRs !== 0) {
                      neviget("/address");
                    }
                  } else {
                    setOpensnackbar(true);
                  }
                }}
              >
                PROCEED TO PAY Rs. {totalRs}
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
