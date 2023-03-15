import React from "react";

// import components
import Header from "../components/Header";
import CountryList from "../components/CountryList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <CountryList />
      </main>
    </>
  );
};

export default Home;
