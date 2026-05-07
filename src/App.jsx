import { Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
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

import AdminLayout from "./admin/layouts/AdminLayout";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AddProduct from "./admin/pages/AddProduct";
import ListProducts from "./admin/pages/ListProducts";
import Orders from "./admin/pages/Orders";
import AdminProtectedRoute from "./admin/components/AdminProtectedRoute";


import { menProducts, womenProducts } from "./data/products";

const allProducts = [...menProducts, ...womenProducts];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = (query) => {
    // This function: 
    // takes the text from the search box
    // checks the product list
    // filters matching products
    // saves the matched products in searchResults
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

  // const  handleSearch = (query) => {
  //   setSearchQuery(query)
  // }

  // useEffect(() => {
  //   const trimmedQuery = searchQuery.toLowerCase().trim();

  //   if(!trimmedQuery){
  //     setSearchResults([])
  //     return;
  //   }

  //   const result = allProducts.filter((item) => item.name.toLowerCase().includes(trimmedQuery))

  //   setSearchQuery(result)
  // }, [searchQuery])

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

        {/* Public admin login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected admin routes */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          {/* <Route path="/admin" element={<AdminLogin />} /> */}
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/list-products" element={<ListProducts />} />
        <Route path="/admin/orders" element={<Orders />} /> */}

          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="list-products" element={<ListProducts />} />
          <Route path="orders" element={<Orders />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;