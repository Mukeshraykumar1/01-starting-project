import React from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "../App.js";
import "./ProductDetail.css";
import { Card, Button } from "react-bootstrap";
import { MdStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";

const ProductDetail = (props) => {
  const params = useParams();
  console.log(params);
  console.log(params.productId);
  return (
    <section>
      <h1>Product Details</h1>
      <p>
        Mens Full sleeve T-shirts from Blive Clothing Store. These T-shirts can
        be worn as a Daily wear, or can be worn during your Morning walk,
        Running/Jogging and also during your Exercise and Workouts in the Gym.
        These can also be worn as a Casual Wear for all your Outings. Fill your
        wardrobe with these awesome collections and make your day to day more
        special.
      </p>
      {productsArr.map((item) => {
        if (item.id === params.productId) {
          return (
            <Card style={{ width: "15rem", margin: "5rem" }}>
              <Card.Img
                variant="top"
                src={item.imageSrc}
                style={{ height: "15rem", objectFit: "cover" }}
              />
              <Card.Body style={{ padding: "0.5rem" }}>
                <Card.Title
                  style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}
                >
                  {item.title}
                </Card.Title>
                <Card.Text style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                  Price: ₹{item.price}
                </Card.Text>
                <Button variant="primary" style={{ fontSize: "1rem" }}>
                  Add to Cart
                </Button>
              </Card.Body>

              <div className="d-flex justify-content-between">
                <p>4.5 Star</p>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdOutlineStarHalf />
              </div>
            </Card>
          );
        }
        return "";
      })}
    </section>
  );
};

export default ProductDetail;
