import React from "react";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import Profile from "../Profile/Profile";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Gallary />
      <Profile />
    </>
  );
};

export default Home;
