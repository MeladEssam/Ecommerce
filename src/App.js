import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import ToastAlert from "./ToastsAlert/toastAlert";
import CheckoutPage from "./Pages/CheckOutPage";
import SuccessPage from "./Pages/SuccessPage";
import ScrollToTop from "./Components/ScrollToTop";
import ContactUs from "./Pages/ContactUs";
import ThankYouPage from "./Pages/ThankYouPage";
import About from "./Pages/AboutPage";
import ProductsInCategory from "./Pages/ProductsInCategory";
function App() {
  return (
    <div className="App">
      <NavBar />

      <ScrollToTop />
      <Routes>
        <Route
          path=""
          element={
            <>
              <Slider />
              <Products />
            </>
          }
        />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="thank-you" element={<ThankYouPage />} />
        <Route path="about" element={<About />} />
        <Route path="products/:category" element={<ProductsInCategory />} />
      </Routes>

      <Footer />
      <div className="container">
        <ToastAlert />
      </div>
    </div>
  );
}

export default App;
