import ProductCard from "../components/Layout/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import CartContext from "../components/store/CartContext";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../components/store/auth-context";

function StorePage() {
  const ctx = useContext(CartContext);
  const productsArr = ctx.productsList;
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
  if (authCtx.isLoggedIn) {
    navigate('/store');
  }
}, [authCtx.isLoggedIn]);

  if (!authCtx.isLoggedIn) {
    alert("Please login to continue your shopping!!");
    return ( <Navigate to="/login" /> )
  }

  const productsList = productsArr.map((product) => {
    return (
      <Col key={product.url}>
        {" "}
        <ProductCard item={product}></ProductCard>
      </Col>
    );
  });

  return (
    <>
      <Container>
        <Row>{productsList}</Row>
      </Container>
    </>
  );
}

export default StorePage;
