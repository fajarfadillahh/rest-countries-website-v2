import React, { useEffect, useState } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";

// import api
import { RESTCountries, getCountryByCode } from "../api/Api";

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState([]);
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    getCountryByCode(code)
      .then((response) => {
        setCountry(response);
      })
      .catch((error) => {
        setCountry(null);
        console.log(error);
      });
  }, [code]);

  // get borders country
  useEffect(() => {
    const getBordersCountry = async () => {
      const borderName = await Promise.all(
        country.borders.map(async (border) => {
          const response = await RESTCountries.get(`/alpha/${border}`);
          return response.data;
        })
      );
      setBorders(borderName);
    };

    getBordersCountry();
  }, [country]);

  return (
    <section className="section pt-32">
      <div className="container grid gap-10">
        <Link
          to="/"
          className="inline-flex h-[56px] w-max items-center gap-4 rounded-md bg-white px-8 font-semibold text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
        >
          <RiArrowLeftLine size="1.3rem" />
          Back
        </Link>

        <div className="grid gap-12 sm:mx-auto sm:max-w-2xl sm:justify-center lg:max-w-full lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="h-[270px] max-w-[580px] overflow-hidden rounded-md sm:h-[320px] lg:h-[430px] xl:min-w-[580px]">
            <img
              src={country.flag}
              alt="country flag"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="grid gap-6">
            <h3 className="section-title text-[26px] lg:text-[32px]">
              {country.name}
            </h3>

            <div className="grid gap-10 sm:grid-cols-2 sm:items-start lg:gap-20">
              <ul className="grid gap-3">
                {[
                  ["Native Name:", `${country.nativeName}`],
                  [
                    "Population:",
                    new Intl.NumberFormat().format(country.population),
                  ],
                  ["Region:", `${country.region}`],
                  ["Sub Region:", `${country.subregion}`],
                  ["Capital:", `${country.capital}`],
                ].map(([name, value]) => {
                  return (
                    <li key={name} className="inline-flex items-start gap-1">
                      <h3 className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                        {name}
                      </h3>
                      <p className="text-gray-800 dark:text-white">{value}</p>
                    </li>
                  );
                })}
              </ul>

              <ul className="grid gap-3">
                {[
                  ["Top Level Domain:", `${country.topLevelDomain}`],
                  [
                    "Currencies:",
                    `${
                      country.currencies
                        ? country.currencies[0].name
                        : "Unknown"
                    }`,
                  ],
                  [
                    "Languages:",
                    `${
                      country.languages
                        ? country.languages
                            .map((language) => language.name)
                            .join(", ")
                        : "Unknown"
                    }`,
                  ],
                ].map(([name, value]) => {
                  return (
                    <li key={name} className="inline-flex items-start gap-1">
                      <h3 className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                        {name}
                      </h3>
                      <p className="text-gray-800 dark:text-white">{value}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="section-title mb-3 text-[20px]">
                Border Countries:
              </h3>

              <ul className="flex flex-wrap items-center gap-4">
                {borders.length === 0 ? (
                  <li className="inline-flex justify-center rounded-md bg-white py-2 px-4 text-[14px] text-gray-800 shadow-sm dark:bg-gray-700 dark:text-white">
                    No Border...
                  </li>
                ) : (
                  borders.map((border) => {
                    return (
                      <li
                        key={border.alpha3Code}
                        className="inline-flex justify-center rounded-md bg-white py-2 px-4 text-[14px] text-gray-800 shadow-sm dark:bg-gray-700 dark:text-white"
                      >
                        <Link
                          to={`/details/${border.alpha3Code.toLowerCase()}`}
                        >
                          {border.name}
                        </Link>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
