import { useState } from "react";
import { createContext } from "react";
import PRODUCTS from "../data/shop-data.json";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
