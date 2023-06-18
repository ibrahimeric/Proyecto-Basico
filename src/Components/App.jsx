import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header.jsx";
import Carousel from "./Carousel.jsx";
import Principal from './Principal.jsx';
import Footer from './Footer.jsx';

function App() {
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

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
