import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/footer/Footer";

const App = () => {
  
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
