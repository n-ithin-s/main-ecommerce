import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Contact from "../pages/Contact";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SingleProduct from "../pages/SingleProduct";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useAuth } from '../AuthContext'; // Assuming you have a custom hook to use authentication context
import total from '../pages/Cart'
import Profile from "../pages/Profile";
import Update from "../pages/Update";
import MyOrder from "../pages/Myorder";
function AppRouter() {
  const { userName, userId, email, phone } = useAuth(); // Fetch user details from AuthContext

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CONTACT" element={<Contact />} />
          <Route path="/ABOUT" element={<About />} />
          <Route path="/SHOP" element={<Shop />} />
          <Route path="/CART" element={<Cart />} />
          {/* Pass user details as props to the Checkout component */}
          <Route path="/CHECKOUT" element={<Checkout userName={userName} userId={userId} email={email} phone={phone} total={total} />} />
          <Route path="/SINGLE" element={<SingleProduct />} />
          <Route path="/PAYMENT/:userId/:token1/:total" element={<Payment />} />
          <Route path="/PRODUCT/:CategoryName" element={<Product />} />
          <Route path="/LOGIN" element={<Login />} />
          <Route path="/REGISTER" element={<Register />} />
          <Route path="/PROFILE" element={<Profile />} />
          <Route path="/UPDATE/:userId" element={<Update />} />
          <Route path="/MYORDER" element={<MyOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
