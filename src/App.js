import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import CategoryList from "./components/category-list/CategoryList";
import ProductList from "./components/product-list/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={CategoryList} />
      <Route path="/:category" component={ProductList} />
    </div>
  );
}

export default App;
