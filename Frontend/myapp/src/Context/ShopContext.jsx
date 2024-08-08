import React, { Children, createContext, useState } from "react";
import all_product from "../Assetes/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const promocode = "yashsolanki1912";
  const [promocodeValue, setPromocodeValue] = useState(null);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const handelChange = (e) => {
    setPromocodeValue(e.target.value);
  };
  const removeToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity - 1,
      };
      if (updatedCart[existingProductIndex].quantity > 0) {
        setCart(updatedCart);
      } else if (updatedCart[existingProductIndex].quantity == 0) {
        const newdata = updatedCart.filter(
          (i) => i.quantity !== updatedCart[existingProductIndex].quantity
        );
        setCart(newdata);
      }
    }
  };
  const getCartItemCount = () => {
    let getQuantity = cart.map((i) => i.quantity);
    return getQuantity.reduce((a, b) => a + b, 0);
  };
  const getTotalAmount = () => {
    const newcart = [...cart];
    let quantityPrice = newcart.map((item) => item.new_price * item.quantity);
    let totalAmount = quantityPrice.reduce((a, b) => a + b, 0);

    if (promocode === promocodeValue) {
      totalAmount *= 0.9;
    }
    return totalAmount;
  };
  const MatchPromocode = () => {
    if (promocode === promocodeValue) {
      console.log("Promo code applied successfully!");
    } else {
      console.log("Invalid promo code.");
    }
  };

  const contextValue = {
    all_product,
    handelChange,
    MatchPromocode,
    cart,
    addToCart,
    removeToCart,
    getTotalAmount,
    getCartItemCount,
    promocodeValue,
    setPromocodeValue,
    promocode,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
