import React from "react";

// import components
import CountrySearch from "./CountrySearch";

const CountryList = () => {
  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12">
          <CountrySearch />
          <div>Filter</div>
        </div>

        <div className="grid gap-12 justify-self-center">
          <div>Country card</div>
        </div>
      </div>
    </section>
  );
};

export default CountryList;
