import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import axios from "axios";
import cross_icon from "../../assets/cross_icon.png";
import edit_icon from "../../assets/edit.jpeg";
import AddProduct from "../AddProduct/AddProduct";

function ListProduct() {
  const [getProducts, setGetProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const fetchdata = () => {
    axios
      .get("http://localhost:4000/product/getallproduct")
      .then((res) => setGetProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const removeProduct = async (id) => {
    console.log("Removing product with ID:", id);

    axios
      .post("http://localhost:4000/product/removeproduct", { id })
      .then((res) => {
        console.log(res);
        setGetProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      })
      .catch((err) => console.log(err));
  };

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:4000/product/updateproduct/${editProduct._id}`,
        editProduct
      )
      .then((res) => {
        console.log(res);
        setEditProduct(null);
        fetchdata();
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editProduct) {
      setEditProduct({ ...editProduct, [name]: value });
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Edit</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {editProduct ? (
          <form onSubmit={updateProduct}>
            <input
              type="text"
              name="name"
              value={editProduct.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="category"
              value={editProduct.category}
              onChange={handleInputChange}
              placeholder="Category"
            />
            <input
              type="number"
              name="old_price"
              value={editProduct.old_price}
              onChange={handleInputChange}
              placeholder="Old Price"
            />
            <input
              type="number"
              name="new_price"
              value={editProduct.new_price}
              onChange={handleInputChange}
              placeholder="New Price"
            />
            <input
              type="text"
              name="image"
              value={editProduct.image}
              onChange={handleInputChange}
              placeholder="Image URL"
            />
            <button type="submit">Update Product</button>
          </form>
        ) : (
          ""
        )}
        {getProducts?.map((items, index) => (
          <div
            key={index}
            className="listproduct-format-main listproduct-format"
          >
            <img width={100} src={items?.image} alt="" />
            <p>{items.name}</p>
            <p>${items.old_price}</p>
            <p>${items.new_price}</p>
            <p>{items.category}</p>
            <img
              onClick={() => handleEdit(items)}
              className="listproduct-edit-icon"
              src={edit_icon}
              alt="Edit"
            />
            <img
              onClick={() => removeProduct(items._id)}
              className="listproduct-remove-icon"
              src={cross_icon}
              alt="Remove"
            />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
