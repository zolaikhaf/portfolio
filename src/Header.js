import './Header.css'; 

import Navigation from "./Navigation.js";
import Cta from "./Cta.js";

const Header = () => {

  return (

      <div id="HeadingContainer">

        <Navigation />

        <Cta />

      </div>
  );
};

export default Header;
