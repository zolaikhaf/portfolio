import React, { useState, useEffect } from "react";

import './App.css';
import './BootstrapOverrides.css';

import Spinner from "./Spinner.js";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

function App() {

  const [isFetching, setIsFetching] = useState(true); 

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false); 
    }, 1800);
  }, []);

  if (isFetching) {
    return (
      <Spinner />
    );
  }

  return (

    <div className="App">

      <Header />

      <Body />
 
      <Footer />

    </div>

  );
}

export default App;
