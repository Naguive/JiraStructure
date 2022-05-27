import React, { useContext } from "react";
import { MainHome } from "../components/MainHome";

const Home = () => {
  const quitSideBar = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <MainHome />
    </div>
  );
};

export default Home;
