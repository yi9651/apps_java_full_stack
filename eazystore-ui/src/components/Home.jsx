import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

import apiCilent from "../api/apiCilent";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await apiCilent.get("/products");
    //console.log(response);
    setProducts(response.data);
  };

  return (
    <div className="home-container">
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of your space with our wide range of fun and unique
        stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
