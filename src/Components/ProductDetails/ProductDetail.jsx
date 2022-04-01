import * as React from "react";
import {useState} from "react"
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "../Home/Cards";
import styles from "./AddToCart.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ImPriceTag } from "react-icons/im";
import ProductImg from "./ProductImg";
// import snapdeal from "../../Images/snapdeal.png";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { CartProvider } from "../../Context/CartContextProvider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import  {postCartProduct} from "../../Server/Apis";
import {getCartProduct } from "../../Server/Apis";

export default function ProductDetail() {
  const [suggested, setSuggested] = React.useState([]);
  const [liked, setLiked] = React.useState(false);
  const [sizepick, setSizePick] = useState("");
  const [isLoding, setIsLoading] = useState(true)
  let { cartProduct, setCartProduct } = React.useContext(CartProvider);
  let navigate = useNavigate();

  let categoryPath = {
    Sarees: "Women_Ethnic",
    "Mens Top Were": "Men",
    "Beauty and health": "Beauty_Products",
    Dresses: "Women_Western",
    Jewellery: "Jewellery",
    "Bags and Footwear": "Bags_Footwear",
    "Home and Kitchen": "Home_Kitchen",
    "Kids ": "Kids",
    Electronics: "Electronics"
  };

  console.log("Product view = ", cartProduct);
  let path = categoryPath[cartProduct.category];
  const getCartData = async () => {
    try{
      const {data} = await getCartProduct(path);
      console.log("getCartData",data)
      setSuggested(data)

    }
    catch(err){
      console.log(err)
    }
  }

  React.useEffect(() => {
    getCartData();
  }, [cartProduct]);

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

  const addToCart = async() => {   
    
    try{
      const {data} = await postCartProduct(cartProduct);
      console.log("cart data",data);
      navigate("/cart_view")

    }
    catch(err) {
      console.log(err);
    }
  };

  const hanDlaeBuy = async() => {
    // axios
    //   .post("https://meesho-db.herokuapp.com/cart", product)
    //   .then((res) => navigate("/address"))
    //   .catch((err) => console.log(err));
    try{
      const {data} = await postCartProduct(cartProduct);
      console.log("cart data",data);
      navigate("/address")

    }
    catch(err) {
      console.log(err);
    }
  };

  const handleProduct = (product) => {
    setCartProduct(product);
    navigate("/product_details");
  };

  return (
    <>
      <div className={styles.main}>
        

        <div className={styles.cont}>
          <div>
            <ProductImg imgArr={cartProduct.images} />
          </div>

          <div>
            <div className={styles.heading}>
              <div>
                <p>{cartProduct.title}</p>
                <div style={{ display: "flex" }} className={styles.headingMeta}>
                  <Rating
                    name="read-only"
                    value={cartProduct.rating}
                    readOnly
                    sx={{ "font-size": "1rem" }}
                  />
                  <span style={{ marginLeft: "0.5rem", marginTop: "0" }}>
                    ({cartProduct.rating})
                  </span>
                  <p>5579 Rating</p> |<p>117 Reviews</p> |<p>14 Selfies</p> |
                  <p>Have a question?</p>
                </div>
              </div>
              <div>
                <div style={{ paddingTop: "1.3rem" }}>
                  {liked ? (
                    <AiFillHeart
                      size="1.5rem"
                      style={{ cursor: "pointer" }}
                      color="red"
                      onClick={() => setLiked(false)}
                    />
                  ) : (
                    <AiOutlineHeart
                      size="1.5rem"
                      style={{ cursor: "pointer" }}
                      onClick={() => setLiked(true)}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.price}>
                <div>
                  <p>
                    MRP{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs. {cartProduct.original_price}
                    </span>{" "}
                    (Inclusive of all taxes)
                  </p>
                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.6rem",
                        marginRight: "1rem"
                      }}
                    >
                      Rs. {cartProduct.discounted_price}
                    </p>
                    <span className={styles.dis}>
                        {/* {suggested.discounted_price} */}
                        {Math.floor((cartProduct.original_price-cartProduct.discounted_price)/cartProduct.original_price*100)}
                        % OFF</span>
                  </div>
                </div>

                <div>
                  <p>(2) Offers | Application on cart</p>
                  <div className={styles.offers}>
                    <div>
                      <div>
                        <ImPriceTag color="white" />
                      </div>
                      <div
                        style={{
                          borderBottom: "1px solid rgb(193,193,189)",
                          paddingBottom: "0.3rem"
                        }}
                      >
                        <p>
                          15% Instant Discount Using AU Small Finance Bank Debit
                          & Credit Cards
                        </p>
                        <p style={{ color: "rgb(37,168,237)" }}>T&C</p>
                      </div>
                    </div>
                    <div style={{ marginTop: "0.5rem" }}>
                      <div>
                        <ImPriceTag color="white" />
                      </div>
                      <div>
                        <p>
                          15% Instant Discount Using AU Small Finance Bank Debit
                          & Credit Cards
                        </p>
                        <p style={{ color: "rgb(37,168,237)" }}>T&C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.colorDiv}>
                <div>Color</div>
                <div className={styles.imgCont}>
                  <div>
                    {" "}
                    <img src={cartProduct.images[0]} />
                  </div>
                </div>
              </div>

              <div className={styles.sizeDiv}>
                <div>Size</div>
                <div>                  
                  <Select
                  style={{ width: "250px", color: "black" }}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={sizepick}
                 
                  onChange={(e)=>setSizePick(e.target.value)}
                >
                  {cartProduct.sizes?.map((item) => (
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
                <div
                  className={styles.btn}
                  onClick={ addToCart}
                >
                  ADD TO CART
                </div>
                <div>
                  <div onClick={()=>hanDlaeBuy(cartProduct)}>
                    <div  className={styles.icon}>
                      <img src="" width="15px" />
                    </div>
                    <p>BUY NOW</p>
                  </div>
                </div>
              </div>

              <div className={styles.deliveryDiv}>
                <div>Delivery</div>
                <div className={styles.pincode}>
                  <input
                    type="number"
                    placeholder="Enter pincode"
                    className={styles.input}
                  />
                  <div className={styles.check}>CHECK</div>
                </div>
                <div>
                  <p>Genrally delivered in 5 - 9 days</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h4>7 Days Easy Returns</h4>
              <p>
                Trustpay: 100% Payment Protection. Return or Replacement is
                applicable for 7 days after delivery{" "}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.suggestions}>
          <p>You May Also Like</p>
          <div style={{ width: "90%", margin: "auto" }}>
            <Carousel
              responsive={responsive}
              infinite={true}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
              focusOnSelect={true}
              autoPlay={false}
              autoPlaySpeed={10000}
            >
              {suggested?.map((item) => (
                <Cards
                  meta={item}
                  key={item._id}
                  image={item.images[0]}
                  title={item.title}
                  price={item.original_price}
                  d_price={item.discounted_price}
                  discount={Math.floor(
                    (item.discounted_price / item.original_price) * 100
                  )}
                  value={item.rating}
                  handleProduct={handleProduct}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}