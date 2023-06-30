import { useState, useEffect, useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "./store/auth-context";
import CartContext from "./store/CartContext";

const Header = () => {
  const [timer, setTimer] = useState(null);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    clearTimeout(timer);
  };
  const ctx = useContext(CartContext);
  const orderlist = ctx.orderList;
  let cartItemCount = 0;
  orderlist.forEach((item) => {
    cartItemCount += item.quantity;
  });

  useEffect(() => {
    if (isLoggedIn) {
      setTimer(
        setTimeout(() => {
          logoutHandler();
        }, 300000) // 5 minutes in milliseconds
      );
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/store" className="nav-link">
              Store
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/login" className="nav-link">
              Login to store
            </Link>
            <Link to="/movie" className="nav-link">
              Movies
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
            {!isLoggedIn && (
              <Link to="/auth" className="nav-link">
                Login
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            )}
            {isLoggedIn && (
              <Button onClick={logoutHandler} style={{ marginLeft: "25rem" }}>
                Logout
              </Button>
            )}
          </Nav>
          <Nav>
            <Button
              variant="outline-warning"
              onClick={() => ctx.setCartVisibility(true)}
            >{`Cart ${cartItemCount}`}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
