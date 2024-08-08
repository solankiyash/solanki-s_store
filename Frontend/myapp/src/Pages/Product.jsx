import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Discription from "../Components/DiscriptionBox/Discription";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import axios from "axios";

function Product() {
  // const {all_product} = useContext(ShopContext)
  const { productId } = useParams();
  const [all_product, setAllProduct] = useState([]);
  useEffect(() => {
    axios
      .post(`http://localhost:4000/product/getproduct/${productId}`)
      .then((res) => setAllProduct(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  console.log(all_product, "lkkkkkkkkkkkkkk");
  // const product = all_product?.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={all_product} />
      <ProductDisplay product={all_product} />
      <Discription />
      <RelatedProducts />
    </div>
  );
}

export default Product;
