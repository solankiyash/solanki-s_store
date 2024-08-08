import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginRegister from "./Pages/LoginRegister";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Assetes/banner_mens.png";
import women_banner from "./Assetes/banner_women.png";
import kid_banner from "./Assetes/banner_kids.png";
import Practish from "./Pages/Practish";
import Loginprotect from "./utils/Loginprotect";
import NotFound from "./Components/NotFound/NotFound";
import Stripesession from "./Components/StripeSessionCheckout/Stripesession.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Loginprotect>
              <Shop />
            </Loginprotect>
          }
        />
        <Route
          path="/mens"
          element={
            <Loginprotect>
              <ShopCategory banner={men_banner} category="men" />
            </Loginprotect>
          }
        />
        <Route
          path="/women"
          element={
            <Loginprotect>
              <ShopCategory banner={women_banner} category="women" />
            </Loginprotect>
          }
        />
        <Route
          path="/kids"
          element={
            <Loginprotect>
              <ShopCategory banner={kid_banner} category="kid" />
            </Loginprotect>
          }
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/thank-you" element={<Stripesession />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/data" element={<Practish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
