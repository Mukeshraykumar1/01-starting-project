import React from "react";
const CartContext = React.createContext({
  items: [],
  cartVisibility: false,
  setCartVisibility: () => {},
  orderList: [],
  setOrderList: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  crudlist: (items) => {},
  cruditems: [],
});

export default CartContext;
