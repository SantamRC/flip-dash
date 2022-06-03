import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../data";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    setProducts(data);
  });

  return <div>Products</div>;
}

export default Products;
