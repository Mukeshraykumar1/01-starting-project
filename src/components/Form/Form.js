import React, { useState } from "react";
import Input from "./Input";
import classes from "./Form.module.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const nameInputChangeHandler = (value) => {
    setName(value);
  };

  const descriptionInputChangeHandler = (value) => {
    setDescription(value);
  };

  const priceInputChangeHandler = (value) => {
    setPrice(value);
  };

  const quantityInputChangeHandler = (value) => {
    if (!isNaN(value)) {
      setQuantity(parseInt(value, 10));
    } else {
      setQuantity(0);
    }
  };

  const formatQuantityDisplay = () => {
    let quantityDisplay = "";
    if (quantity >= 10) {
      quantityDisplay = "Large: 10 available, Medium: 5 available, Small: 2 available";
    } else if (quantity >= 5) {
      quantityDisplay = "Large: 5 available, Medium: 5 available, Small: 2 available";
    } else if (quantity >= 2) {
      quantityDisplay = "Large: 2 available, Medium: 2 available, Small: 2 available";
    } else {
      quantityDisplay = "All sizes out of stock";
    }
    return quantityDisplay;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const obj = {
      id: Date.now(),
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    };

    setName("");
    setPrice("");
    setDescription("");
    setQuantity("");

    props.onSubmit(obj);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        id="name"
        type="text"
        value={name}
        label="Tshirt Name:"
        onChange={nameInputChangeHandler}
      ></Input>
      <Input
        id="description"
        type="text"
        value={description}
        label="Description:"
        onChange={descriptionInputChangeHandler}
      ></Input>
      <Input
        id="price"
        type="number"
        value={price}
        label="Price:"
        onChange={priceInputChangeHandler}
      ></Input>
      <Input
        id="quantity"
        type="number"
        value={quantity}
        label="Quantity Available:"
        onChange={quantityInputChangeHandler}
      ></Input>

      <div>{formatQuantityDisplay()}</div>

      <button>Add Product</button>
    </form>
  );
};

export default Form;
