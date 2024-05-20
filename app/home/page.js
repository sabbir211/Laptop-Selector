import React from "react";

import Services from "./services/page";
import Products from "./products/page";
import Footer from "./footer/page";
import Banner from "./banner/page";

export default function First() {
  return (
    <div>
    <Banner></Banner>
      <Services></Services>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}
