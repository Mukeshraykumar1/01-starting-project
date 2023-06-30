import React, { useRef, useContext, useState } from "react";
import AuthContext from "../components/store/auth-context";
import classes from "./Login.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIaSyDs6aWMCro8wkeJXvAiS5BAudp1a4rDwqQ";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage =
              "Authentication failed: Please check your Email or Password!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const token = data.idToken;
        authCtx.login(token);
        localStorage.setItem("token", token);
        alert('You have successfully logged in your account');
        navigate("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <Button type="submit">
              {isLogin ? "Login" : "Create Account"}
            </Button>
          )}
          {isLoading && <p>Sending Request...</p>}
          {/* <Button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button> */}
        </div>
      </form>
    </section>
  );
};
export default Login;
