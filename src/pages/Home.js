import React from "react";
import Header from "../components/Header/Header";
import Stake from "../components/index/Stake/Stake";
import Journey from "../components/index/Journey/Journey";
import RoadMap from "../components/index/RoadMap/RoadMap";
import ComingSoon from "../components/index/Coming/ComingSoon";
import Footer from "../components/Footer/Footer";

function Home(props) {
  return (
    <React.Fragment>
      <Header />
      <Stake />
      <Journey />
      <RoadMap />
      <ComingSoon />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
