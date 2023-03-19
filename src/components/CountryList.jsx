import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getAllCountries()
        .then((response) => {
          setCountries(response);
          setLoading(false);
        })
        .catch((error) => {
          setCountries(null);
          console.log(error);
        });
    }, 3000);
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
      {loading ? (
        <div className="fixed top-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-4 bg-gray-900/90">
          <BeatLoader color="#ffffff" size="1.3rem" />
          <h3 className="text-[20px] font-semibold -tracking-tighter text-white">
            Loading data...
          </h3>
        </div>
      ) : (
        <div className="container grid gap-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <CountrySearch setSearch={handleSearchCountry} />
            <CountryRegion setRegion={handleSelectedRegion} />
          </div>

          <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCountries?.map((country) => {
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
      )}
    </section>
  );
};

export default CountryList;
