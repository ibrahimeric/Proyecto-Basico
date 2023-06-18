import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header.jsx";
import Carousel from "./Carousel.jsx";
import Principal from './Principal.jsx';
import Footer from './Footer.jsx';

function App() {

  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <Principal></Principal>
      <Footer></Footer>
    </div>
  );
}

export default App;
