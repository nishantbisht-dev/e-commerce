import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import { menProducts, womenProducts } from "./data/products";

const allProducts = [...menProducts, ...womenProducts];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const trimmedQuery = query.trim().toLowerCase();
    setSearchQuery(query);

    if (!trimmedQuery) {
      setSearchResults([]);
      return;
    }

    const result = allProducts.filter((item) =>
      item.name.toLowerCase().includes(trimmedQuery)
    );

    setSearchResults(result);
  };

  return (
    <Routes>
      <Route element={<MainLayout onSearch={handleSearch} />}>
        <Route index element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/search"
          element={
            <SearchResults
              searchResults={searchResults}
              searchQuery={searchQuery}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;