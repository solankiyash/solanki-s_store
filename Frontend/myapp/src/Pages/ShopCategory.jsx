import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import Item from "../Components/Item/Item";

function ShopCategory(props) {
  // let { all_product } = useContext(ShopContext);
  const [all_product, setAllProduct] = useState([]);
  const [visibleproduct, setVisibleProduct] = useState(8);
  const [uniquePrices, setUniquePrices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    axios
      .get("http://localhost:4000/product/getallproduct")
      .then((res) => setAllProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let allPrices = [];
    all_product.forEach((option) => {
      let newPrices = option.new_price;
      allPrices = allPrices.concat(newPrices);
    });
    const uniquePricesArray = [...new Set(allPrices)];
    setUniquePrices(uniquePricesArray);
  }, [all_product]);

  useEffect(() => {
    if (selectedOption !== null) {
      const filtered = all_product.filter(
        (item) =>
          item.category === props.category && item.new_price === selectedOption
      ); 
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(
        all_product.filter((item) => item.category === props.category)
      );
    }
  }, [selectedOption, all_product, props.category]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleExplore = () => {
    setVisibleProduct((prev) => prev + 5);
  };
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>
            Showing{" "}
            {filteredProducts.length > visibleproduct
              ? visibleproduct
              : filteredProducts.length}
          </span>{" "}
          out of {filteredProducts.length} products
        </p>
        <div className="">
          Sort by
          <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
              {selectedOption || "Select an option"}
              <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}></span>
            </div>
            {isOpen && (
              <div className="dropdown-menu">
                {uniquePrices.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.slice(0, visibleproduct).map((item, i) => (
          <Item
            key={i}
            id={item._id}
            name={item.category}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div onClick={handleExplore} className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
