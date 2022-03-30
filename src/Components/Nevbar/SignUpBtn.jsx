import * as React from "react";
import GoogleLogin from "react-google-login";
import { styled } from "@mui/material/styles";
import "./SignUp.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import style from "./Navbar.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FilterFramesOutlinedIcon from "@mui/icons-material/FilterFramesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CloseIcon from "@mui/icons-material/Close";

export default function SinUpBtn() {
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "black",
      color: "white",
      width: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "0px solid #dadde9",
      position: "absolute",
      top: "-15px",
      right: "-62px",
    },
  }));

  const responseGoogle = (response) => {
    console.log(response);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    zIndex: "1",
    width: " 826px",
    height: "360px",
    p: 4,
    // boxSizing: "border-box",
    backgroundImage: "url(../../img/userAuthSpritev3.png)",
    backgroundPosition: "0 0",
    verticalAlign: "sub",
    display: "inline-block",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#edf1f4",
    position: "absolute",
    boxShadow: "0 0 12px 6px rgba(0,0,0,0.05),0 3px 6px rgba(0,0,0,0.15)",
  };

  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Box sx={{ display: "flex", zIndex: "1" }}>
              <div>
                <ul class="listAuthModal">
                  <li class="mngorder">
                    <i class="userAuthIcons"></i>
                    <h4>MANAGE YOUR ORDERS</h4>
                    <p>Track orders, manage cancellations &amp; returns.</p>
                  </li>
                  <li class="shortlistitm">
                    <i class="userAuthIcons"></i>
                    <h4>SHORTLIST ITEMS YOU LOVE</h4>
                    <p>Keep items you love on a watchlist.</p>
                  </li>
                  <li class="offrupdate">
                    <i class="userAuthIcons"></i>
                    <h4>AWESOME OFFERS UPDATES FOR YOU</h4>
                    <p>Be first to know about great offers and save.</p>
                  </li>
                </ul>
              </div>
              <div className="userAuth-card">
                <form>
                  <Typography sx={{ fontSize: "18px" }}>
                    Login/Sign Up On Snapdeal{" "}
                    <CloseIcon
                      onClick={handleClose}
                      sx={{
                        position: "absolute",
                        right: "5%",
                        color: "#cdcece",
                        cursor: "pointer",
                      }}
                    />
                  </Typography>
                  <div className="content">
                    <Typography
                      sx={{ fontSize: "12px", color: "gray", margin: "2% 0%" }}
                    >
                      Please provide your Mobile Number or Email to Login/ Sign
                      Up on Snapdeal
                    </Typography>
                    <input
                      type="text"
                      style={{
                        margin: "5% 5%",
                        padding: " 3% 5% ",
                        fontSize: "13px",
                        width: "90%",
                        outline: "1px solid gray",
                        border: "none",
                      }}
                      placeholder="Mobile Number / Email"
                    />
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        width: "90%",
                        margin: "5% 5%",
                        backgroundColor: "#e40046",
                        "&:hover": "{ backgroundColor:#e40046 }",
                      }}
                      disableElevation
                      disableFocusRipple
                      disableRipple
                    >
                      Continue
                    </Button>
                  </div>
                </form>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "gray",
                    margin: "20% 0% 0% 0%",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  or Login Using
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<FacebookIcon />}
                  sx={{
                    fontSize: "12px",
                    textTransform: "capitalize",
                    borderRadius: "1%",
                    border: "none",
                    boxShadow: "1px 1px 3px grey",
                    margin: "2%",
                    padding: "3%",
                    width: "45%",
                  }}
                >
                  Facebook
                </Button>
                <GoogleLogin
                  clientId="512803252250-beprdg6clce6ekr0lv9e044glqn2k5o2.apps.googleusercontent.com"
                  buttonText="Google"
                  render={(renderProps) => (
                    <Button
                      variant="outlined"
                      sx={{
                        fontSize: "12px",
                        textTransform: "capitalize",
                        color: "gray",
                        margin: "12px",
                        textAlign: "center",
                        borderRadius: "1%",
                        border: "none",
                        boxShadow: "1px 1px 3px grey",
                        width: "42%",
                      }}
                      disableRipple
                      disableFocusRipple
                      disableElevation
                      onClick={renderProps.onClick}
                    >
                      <p style={{ margin: "5%" }}>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          height="18px"
                          viewBox="0 0 48 48"
                          class="social-icon"
                        >
                          <g>
                            <path
                              fill="#EA4335"
                              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                            ></path>
                            <path
                              fill="#4285F4"
                              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                            ></path>
                            <path
                              fill="#FBBC05"
                              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                            ></path>
                            <path
                              fill="#34A853"
                              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            ></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                          </g>
                        </svg>
                      </p>
                      <p style={{ margin: "0% 5%" }}>Google</p>
                    </Button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </Box>
          </Box>
        </Modal>
      </div>
      <HtmlTooltip
        title={
          <React.Fragment className={style.Signup}>
            <div className={style.logIn}>
              <PermIdentityOutlinedIcon />
              Your Account
            </div>
            <div className={style.logIn}>
              <FilterFramesOutlinedIcon />
              Your Orders
            </div>
            <div className={style.logIn}>
              <FavoriteBorderOutlinedIcon />
              Shortlist
            </div>
            <div className={style.logIn} style={{ textAlign: "center" }}>
              <p style={{ lineHeight: 0, color: "gray" }}>
                If you are a new Youser
              </p>
              <div className={style.logIn}>Register</div>
              <button className={style.btn} onClick={handleOpen}>
                Login
              </button>
            </div>
          </React.Fragment>
        }
      >
        <div className={style.Signup}>
          sign In
          <Avatar className={style.Avatar} src="/broken-image.jpg" />
        </div>
      </HtmlTooltip>
    </div>
  );
}
