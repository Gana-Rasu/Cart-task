import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { Context } from "./Context";

function App() {
     // Use a Provider to pass the current cart value.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing 0 as the current value.
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <>
    
      <Context.Provider
        value={{
          cartTotal: cartTotal,
          setCartTotal: setCartTotal,
        }}
      >
        <Navbar />
        <Section />
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
