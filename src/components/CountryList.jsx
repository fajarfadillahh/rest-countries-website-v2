import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import api
import { getAllCountries } from "../api/Api";

// import components
import CountrySearch from "./CountrySearch";
import CountryRegion from "./CountryRegion";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    getAllCountries()
      .then((response) => {
        setCountries(response);
      })
      .catch((error) => {
        setCountries(null);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // filter countries by region
    const filtered =
      selectedRegion === "All"
        ? countries
        : countries.filter((country) => country.region === selectedRegion);

    // filter countries by name / search country
    const searched =
      searchCountry === ""
        ? filtered
        : filtered.filter((country) =>
            country.name.toLowerCase().includes(searchCountry.toLowerCase())
          );

    setFilteredCountries(searched);
  }, [countries, selectedRegion, searchCountry]);

  // handle selected region
  const handleSelectedRegion = (region) => {
    setSelectedRegion(region);
  };

  // handle search country
  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <CountrySearch setSearch={handleSearchCountry} />
          <CountryRegion setRegion={handleSelectedRegion} />
        </div>

        <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCountries.slice(0, 32).map((country) => {
            return (
              <Link
                to={`/details/${country.alpha3Code.toLowerCase()}`}
                key={country.numericCode}
              >
                <CountryCard country={country} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountryList;
