import React, { useEffect, useState, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import FacebookIcon from "@mui/icons-material/Facebook";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GoogleLogin from "react-google-login";
import "./ModalScreen.css";
import { UserProvider } from "../../Context/UserContextProvider";
import { Alert, Checkbox, IconButton, Snackbar } from "@mui/material";
export const ModalScreen = ({ open, handleOpen, handleClose }) => {
  useEffect(() => {
    handleOpen();
  }, []);

  const [inputValue, setInputValue] = React.useState("");
  let { user, setUser } = useContext(UserProvider);
  const [otp, setOtp] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messageSuccess, setMessageSuccess] = React.useState(
    "Successfully logged in!"
  );
  const [otpscreen, setOtpscreen] = React.useState(false);
  const [registered, setregistered] = React.useState(true);
  const [login, setLogin] = React.useState(true);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [errorSnackbar, setErrorSnackbar] = React.useState(false);

  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [googleId, setGoogleId] = useState("");
  const [facebookId, setFacebookId] = useState("");

  function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  const handleOpenSnackbar = () => {
    console.log("success snackbar")
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleErrorSnackbar = () => {
    setErrorSnackbar(true);
  };

  const handleErrorCloseSnackbar = () => {
    setErrorSnackbar(false);
  };

  const responseGoogleSuccess = async (response) => {
    console.log(response);
    setEmail(response.profileObj.email);
    setName(response.profileObj.name);
    setGoogleId(response.googleId);
    console.log(email, name, googleId, response.googleId);
    await fetch("https://snapdeal-backend.herokuapp.com/user", {
      method: "POST",
      body: JSON.stringify({
        googleId: response.googleId,
        otp: response.accessToken,
        displayName: name,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status == 200) {
          handleOpenSnackbar();
          await sleep(3000);
          handleClose();
        } else {
          setMessage("Google Authentication failed, Please sign up");
          handleErrorSnackbar();
          setregistered(false);
          setOtpscreen(false);
          setLogin(false);
          handleErrorSnackbar();
        }
        return res.json();
      })
      .then((data) => {
        setUser({
          ...user,
          displayName: response.profileObj.givenName,
          otp: response.googleId,
          isLoggedIn: true,
        });

        console.log(data, user);
      })
      .catch((e) => console.log(e));
  };
  const responseGoogleFailure = (err) => {
    console.log(err);
    setMessage("Google Authentication failed");
    handleErrorSnackbar();
  };

  const responseFacebook = async (response) => {
    console.log(response);
    setName(response.name);
    setFacebookId(response.id);
    await fetch("https://snapdeal-backend.herokuapp.com/user", {
      method: "POST",
      body: JSON.stringify({
        facebookId: response.userID,
        otp: response.accessToken,
        displayName: response.name,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status == 200) {
          let name = response.name.split(" ");
          setUser({
            displayName: name[0],
            otp: response.id,
            isLoggedIn: true,
          });
          handleOpenSnackbar();
          await sleep(3000);
          handleClose();
        } else {
          setMessage("Facebook Authentication failed, Please sign up");

          handleErrorSnackbar();
          setregistered(false);
          setOtpscreen(false);
          setLogin(false);
        }
        return res.json();
      })
      .then(async (data) => {
        console.log(data);
        handleOpenSnackbar();
        await sleep(3000);
        // handleClose();
      })
      .catch((e) => console.log(e));
    // handleClose();
  };

  const handleInput = async () => {
    console.log("resend");
    if (inputValue) {
      console.log("sending data to backend", inputValue);
      await fetch("https://snapdeal-backend.herokuapp.com/user", {
        method: "POST",
        body: JSON.stringify({ email: inputValue }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
          } else {
            setMessage("Please Sign up!");
            setregistered(false);
            setLogin(false);
            handleErrorSnackbar();
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setUser({
            displayName: data.data.displayName,
            other: data.data,
          });
          setOtpscreen(true);
        })
        .catch((e) => console.log(e));
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!(email && DOB && password && mobile && name)) {
      setMessage("Please fill all the details");
      handleErrorSnackbar();
    } else {
      let userObj = {
        email: email,
        DOB: DOB,
        password: password,
        mobile: mobile,
        displayName: name,
        googleId: googleId,
        facebookId: facebookId,
      };

      await fetch("https://snapdeal-backend.herokuapp.com/user/create", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userObj),
      })
        .then(async (res) => {
          if (res.status == 200) {
            console.log("user created");
            setMessageSuccess("Account Created, Please login in now!");
            handleOpenSnackbar();
            await sleep(2000);
            handleClose();
          } else {
            console.log("something went wrong");
            setMessage("something went wrong");
            handleErrorSnackbar();
          }
          return res.json();
        })
        .catch((e) => console.log(e));
    }
  };

  const checkOtp = async () => {
    if (otp) {
      console.log("sending data to backend", otp);
      await fetch("https://snapdeal-backend.herokuapp.com/user/otp", {
        method: "POST",
        body: JSON.stringify({ email: inputValue, otp: otp }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            handleOpenSnackbar();
            handleClose();
          } else {
            setMessage("OTP did not matched!");
            handleErrorSnackbar();
          }
          return res.json();
        })
        .then((data) => {
          console.log(data, "data");
          setUser({
            displayName: data.data.displayName,
            otp: data.data.otp,
            isLoggedIn: true,
          });
        })
        .catch((e) => console.log(e, "error"));
    }
  };

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
    backgroundImage: "url(../assets.images/userAuthSpritev3.png)",
    backgroundPosition: "0 0",
    verticalAlign: "sub",
    display: "inline-block",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#edf1f4",
    position: "absolute",
    boxShadow: "0 0 12px 6px rgba(0,0,0,0.05),0 3px 6px rgba(0,0,0,0.15)",
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleErrorCloseSnackbar}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleErrorCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={messageSuccess}
        action={action}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {messageSuccess}
        </Alert>
      </Snackbar>
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
                  <h4 style={{fontSize:"12px"}}>MANAGE YOUR ORDERS</h4>
                  
                  <p>Track orders, manage cancellations &amp; returns.</p>
                </li>
                <li class="shortlistitm">
                  <i class="userAuthIcons"></i>
                  <h4 style={{fontSize:"12px"}}>SHORTLIST ITEMS YOU LOVE</h4>
                  <p>Keep items you love on a watchlist.</p>
                </li>
                <li class="offrupdate">
                  <i class="userAuthIcons"></i>
                  <h4 style={{fontSize:"12px"}}>AWESOME OFFERS UPDATES FOR YOU</h4>
                  <p>Be first to know about great offers and save.</p>
                </li>
              </ul>
            </div>
            <div className="userAuth-card">
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={errorSnackbar}
                autoHideDuration={4000}
                onClose={handleErrorCloseSnackbar}
                action={action}
              >
                <Alert
                  onClose={handleErrorCloseSnackbar}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  {message}
                </Alert>
              </Snackbar>
              <Typography sx={{ fontSize: "18px" }}>
                {login ? "Login/Sign Up On Snapdeal" : "Sign Up"}
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
              {!otpscreen && login ? (
                <div>
                  <form>
                    <div className="content">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "gray",
                          margin: "2% 0%",
                        }}
                      >
                        Please provide your Mobile Number or Email to Login/
                        Sign Up on Snapdeal
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
                        value={inputValue}
                        onChange={(e) => setInputValue(e.currentTarget.value)}
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
                        onClick={handleInput}
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
                  <FacebookLogin
                    appId="5249519815087590"
                    fields="name,email,picture"
                    scope="public_profile,email"
                    callback={responseFacebook}
                    render={(renderProps) => (
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
                        onClick={renderProps.onClick}
                      >
                        Facebook
                      </Button>
                    )}
                  />
                  <GoogleLogin
                    clientId="512803252250-377j9aloa5naoi0e4690nvkm1o4e1ajv.apps.googleusercontent.com"
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
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              ) : !registered ? (
                <>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "gray",
                      margin: "2% 0%",
                    }}
                  >
                    Create an account on on Snapdeal
                  </Typography>
                  <form onSubmit={handleSignUp} className="signUp">
                    <div className="signUpInput">
                      <input
                        value={email}
                        className="formInput"
                        type="text"
                        placeholder="Email"
                        name="email"
                        autocomplete="off"
                        onChange={(e) => setEmail(e.currentTarget.value)}
                      />
                    </div>
                    <div className="signUpInput">
                      <input
                        value={mobile}
                        className="formInput"
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        autocomplete="off"
                        maxlength="10"
                        onChange={(e) => setMobile(e.currentTarget.value)}
                      />
                    </div>
                    <div className="signUpInput">
                      <input
                        value={DOB}
                        className="formInput"
                        type="date"
                        placeholder="DOB"
                        name="DOB"
                        autocomplete="off"
                        onChange={(e) => setDOB(e.currentTarget.value)}
                      />
                    </div>
                    <div className="signUpInput">
                      <input
                        value={name}
                        className="formInput"
                        type="text"
                        placeholder="Name"
                        name="name"
                        autocomplete="off"
                        onChange={(e) => setName(e.currentTarget.value)}
                      />
                    </div>
                    <div className="signUpInput">
                      <input
                        value={password}
                        className="formInput"
                        type="password"
                        placeholder="password"
                        name="Password"
                        autocomplete="off"
                        minlength="6"
                        onChange={(e) => setPassword(e.currentTarget.value)}
                      />
                    </div>
                    <p>
                      Password should have a minimum of 6 characters, at least 1
                      numeric and 1 alphabet
                    </p>
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "gray",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                    <label className="label">Keep me logged in</label>
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      sx={{
                        width: "90%",
                        margin: "5% 5%",
                        backgroundColor: "#e40046",
                        "&:hover": '{ backgroundColor : "#e40046" }',
                      }}
                      disableElevation
                      disableFocusRipple
                      disableRipple
                      onClick={checkOtp}
                    >
                      Continue
                    </Button>
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
                  <FacebookLogin
                    appId="5249519815087590"
                    fields="name,email,picture"
                    scope="public_profile,email"
                    callback={responseFacebook}
                    render={(renderProps) => (
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
                        onClick={renderProps.onClick}
                      >
                        Facebook
                      </Button>
                    )}
                  />
                  <GoogleLogin
                    clientId="512803252250-377j9aloa5naoi0e4690nvkm1o4e1ajv.apps.googleusercontent.com"
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
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </>
              ) : (
                <div className="otpDiv">
                  <i class="userAuthIcons otpIcon"></i>
                  <br />
                  <p>
                    Please enter verification code (OTP) sent to: {inputValue}
                  </p>
                  <input
                    value={otp}
                    className="otpInput"
                    type="text"
                    placeholder="Code"
                    name="otpValue"
                    autocomplete="off"
                    maxlength="4"
                    onChange={(e) => setOtp(e.currentTarget.value)}
                  ></input>
                  <button className="resendOtp" onClick={handleInput}>
                    Resend OTP
                  </button>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      width: "90%",
                      margin: "5% 5%",
                      backgroundColor: "#e40046",
                      "&:hover": '{ backgroundColor : "#e40046" }',
                    }}
                    disableElevation
                    disableFocusRipple
                    disableRipple
                    onClick={checkOtp}
                  >
                    Continue
                  </Button>
                </div>
              )}
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
