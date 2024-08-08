import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";
import { toast } from "react-toastify";
import axios from "axios";
function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const imagehandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const Add_Product = async () => {
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    try {
      const response = await axios.post(
        "http://localhost:4000/upload/",
        formData,
        {}
      );
      if (response.data.success) {
        product.image = response.data.image_url;
        await axios
          .post("http://localhost:4000/product/addproduct", product)
          .then((res) => {
            if (res.data.success == true) {
              toast.success("Add Product SuccessFully");
            } else {
              toast.error("Failed");
            }
          })
          .catch((err) => toast.error("Failed"));
      }
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-item-filed">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-item-filed">
          <p>Price</p>
          <input
            type="text"
            value={productDetails.old_price}
            onChange={changeHandler}
            name="old_price"
            className="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-item-filed">
          <p>Offer Price</p>
          <input
            type="text"
            value={productDetails.new_price}
            onChange={changeHandler}
            name="new_price"
            className="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-item-filed">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>       
        </select>
      </div>
      <div className="addproduct-item-filed">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumnail-img"
            alt=""
          />
        </label>
        <input
          onChange={imagehandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={() => Add_Product()} className="addproduct-btn">
        Add
      </button>
    </div>
  );
}

export default AddProduct;
