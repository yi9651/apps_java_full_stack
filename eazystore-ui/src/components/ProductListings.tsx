import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import React, { useState, useMemo } from "react";

export default function ProductListings({ products }) {
  const [searchText, setSearchText] = useState("");
  const [sortedText, setSortedText] = useState("Popularity");
  const dropDownList = ["Popularity", "Price Low to High", "Price High to Low"];
  const filteredAndSortedProducts = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );

    return filteredProducts.slice().sort((a, b) => {
      switch (sortedText) {
        case "Price Low to High":
          return parseFloat(a.price) - parseFloat(b.price);
        case "Price High to Low":
          return parseFloat(b.price) - parseFloat(a.price);
        case "Popularity":
        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
      }
    });
  }, [products, searchText, sortedText]);

  // let filteredProducts = Array.isArray(products)
  //   ? products.filter((product) =>
  //       product.name.toLowerCase().includes(searchText)
  //     )
  //   : [];

  // switch (sortedText) {
  //   case "Popularity":
  //     filteredProducts.sort(
  //       (a, b) => parseInt(b.popularity) - parseInt(a.popularity)
  //     );
  //     break;

  //   case "Price Low to High":
  //     filteredProducts.sort(
  //       (a, b) => parseFloat(a.price) - parseFloat(b.price)
  //     );
  //     break;

  //   case "Price High to Low":
  //     filteredProducts.sort(
  //       (a, b) => parseFloat(b.price) - parseFloat(a.price)
  //     );
  //     break;

  //   default:
  //     filteredProducts.sort(
  //       (a, b) => parseInt(b.popularity) - parseInt(a.popularity)
  //     );
  //     break;
  // }
  function handleSearchChange(searchInput) {
    setSearchText(searchInput);
    //console.log(searchInput);
  }

  function handleSortedText(sortedInput) {
    setSortedText(sortedInput);
  }

  return (
    <div className="product-listings-container">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search products..."
          value={searchText}
          handleSearch={(value) => handleSearchChange(value)}
        />
        <Dropdown
          label="Sort By"
          options={dropDownList}
          selectedValue={sortedText}
          handleDropdown={(value) => handleSortedText(value)}
        />
      </div>
      <div className="product-listings-grid">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="product-listings-empty">No products found!</p>
        )}
      </div>
    </div>
  );
}
