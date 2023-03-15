import React from "react";

// import components
import CountrySearch from "./CountrySearch";
import CountryRegion from "./CountryRegion";

const CountryList = () => {
  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12">
          <CountrySearch />
          <CountryRegion />
        </div>

        <div className="grid gap-12 justify-self-center">
          <div>Country card</div>
        </div>
      </div>
    </section>
  );
};

export default CountryList;
