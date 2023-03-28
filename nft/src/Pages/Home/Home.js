import React from "react";
import About from "../../Components/About/About";
import Collection from "../../Components/Collection/Collection";
import Featured from "../../Components/Featured/Featured";
import Slider from "../../Components/Slider/Slider";

function Home(props) {
  return (
    <>
      <Slider />
      <About />
      <Collection />
      <Featured />
    </>
  );
}

export default Home;
