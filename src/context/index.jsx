import React, { createContext, useState } from "react"

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]); 

  const updateSearchResults = (products) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered.slice(0, 4)); 
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredProducts, updateSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};