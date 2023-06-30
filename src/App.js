import { Route, Routes, Navigate } from "react-router-dom";

import CartContext from "./components/store/CartContext";
import { useContext, useState } from "react";
import AboutPage from "./pages/About";
import Rootlayout from "./components/Layout/RootLayout";
import StorePage from "./pages/Store";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import MoviePage from "./Entertainment/AddMovie";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
// import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./components/Profile/UserProfile";
import AuthContext from "./components/store/auth-context";
import Login from "./pages/Login";

// const router = createBrowserRouter(
//   [
//     {path:'/' , element:<Rootlayout/> , children:[
//       {path:'/store' , element:<StorePage/>},
//       {path:'/about' , element:<AboutPage/>},
//       {path:'/home' , element:<HomePage/>},
//       {path:'/movie' , element:<MoviePage/>},
//       {path:'/contact', element:<ContactUs />},
//       {path:'/store/:productId', element:<ProductDetail />}
//     ]}
//   ]
// )

export const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: "a1",
    title: "BLIVE Printed Men Round Neck Full Sleeve T-Shirt",
    price: 450,
    imageSrc: "/images/a1-1.jpg",
  },
  {
    id: "a1",
    title: "BLIVE Printed Men Round Neck Full Sleeve T-Shirt",
    price: 450,
    imageSrc: "/images/a1-2.jpg",
  },
  {
    id: "a1",
    title: "BLIVE Printed Men Round Neck Full Sleeve T-Shirt",
    price: 450,
    imageSrc: "/images/a1-3.jpg",
  },
  {
    id: "a1",
    title: "BLIVE Printed Men Round Neck Full Sleeve T-Shirt",
    price: 450,
    imageSrc: "/images/a1-4.jpg",
  },
  {
    id: "a2",
    title: "Urbano Fashion Men's Printed Full Sleeve Slim Fit Cotton T-Shirt",
    price: 550,
    imageSrc: "/images/a2-1.jpg",
  },
  {
    id: "a2",
    title: "Urbano Fashion Men's Printed Full Sleeve Slim Fit Cotton T-Shirt",
    price: 550,
    imageSrc: "/images/a2-2.jpg",
  },
  {
    id: "a2",
    title: "Urbano Fashion Men's Printed Full Sleeve Slim Fit Cotton T-Shirt",
    price: 550,
    imageSrc: "/images/a2-3.jpg",
  },
  {
    id: "a2",
    title: "Urbano Fashion Men's Printed Full Sleeve Slim Fit Cotton T-Shirt",
    price: 550,
    imageSrc: "/images/a2-4.jpg",
  },
  {
    id: "a3",
    title:
      "CHKOKKO Winter Wear Cotton Plain Full Sleeve Turtle Neck T Shirt for Men",
    price: 700,
    imageSrc: "/images/a3-1.jpg",
  },
  {
    id: "a3",
    title:
      "CHKOKKO Winter Wear Cotton Plain Full Sleeve Turtle Neck T Shirt for Men",
    price: 700,
    imageSrc: "/images/a3-2.jpg",
  },
  {
    id: "a3",
    title:
      "CHKOKKO Winter Wear Cotton Plain Full Sleeve Turtle Neck T Shirt for Men",
    price: 700,
    imageSrc: "/images/a3-3.jpg",
  },
  {
    id: "a3",
    title:
      "CHKOKKO Winter Wear Cotton Plain Full Sleeve Turtle Neck T Shirt for Men",
    price: 700,
    imageSrc: "/images/a3-4.jpg",
  },
  {
    id: "a4",
    title:
      "LEOTUDE Cotton Blend Half Sleeve Back Print Oversized T-Shirts for Men",
    price: 750,
    imageSrc: "/images/a4-1.jpg",
  },
  {
    id: "a4",
    title:
      "LEOTUDE Cotton Blend Half Sleeve Back Print Oversized T-Shirts for Men",
    price: 750,
    imageSrc: "/images/a4-2.jpg",
  },
  {
    id: "a4",
    title:
      "LEOTUDE Cotton Blend Half Sleeve Back Print Oversized T-Shirts for Men",
    price: 750,
    imageSrc: "/images/a4-3.jpg",
  },
  {
    id: "a4",
    title:
      "LEOTUDE Cotton Blend Half Sleeve Back Print Oversized T-Shirts for Men",
    price: 750,
    imageSrc: "/images/a4-3.jpg",
  },
];

// const productsList = productsArr.map((product) => {
//   return (
//     <Col key={product.id}>
//       <ProductCard item={product}></ProductCard>
//     </Col>
//   );
// });

function App() {
  const authCtx = useContext(AuthContext);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const ctxObj = {
    productsList: productsArr,
    cartVisibility: cartVisibility,
    setCartVisibility: setCartVisibility,
    orderList: orderList,
    setOrderList: setOrderList,
  };

  return (
    <CartContext.Provider value={ctxObj}>
      <Rootlayout />
      {/* <Layout> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/store/:productId" element={<ProductDetail />} />
        <Route path="/" exact element={<HomePage />} />
        {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        {authCtx.isLoggedIn && (
          <Route path="/profile" element={<UserProfile />} />
        )}
        <Route path="*" element={<Navigate replace to='/' />} />
      </Routes>
      {/* </Layout> */}
    </CartContext.Provider>
  );
}

export default App;
