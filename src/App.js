import React, { useEffect } from "react";

import './App.css';
import './BootstrapOverrides.css';

import Spinner from "./Spinner.js";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
  setIsLoading(false);
  }

  useEffect(()=>{
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
  },[])

  return !isLoading ? (
    <div className="App">

      <Header />

      <Body />
 
      <Footer />

    </div>

  ):(<Spinner />)

}

export default App;
