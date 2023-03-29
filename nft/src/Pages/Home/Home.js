import React from "react";
import About from "../../Components/About/About";
import Collection from "../../Components/Collection/Collection";
import Featured from "../../Components/Featured/Featured";
import Sell from "../../Components/Sell/Sell";
import Slider from "../../Components/Slider/Slider";

function Home(props) {
  return (
    <>
      <Slider />
      <About />
      <Collection />
      <Featured />
      <Sell />
    </>
  );
}

export default Home;
