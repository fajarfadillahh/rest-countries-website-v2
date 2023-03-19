import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="w-max overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="overflow-hidden">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="h-[180px] w-[280px] object-cover object-center"
        />
      </div>

      <div className="max-w-[280px] overflow-hidden bg-white p-8 dark:bg-gray-700">
        <h3 className="section-title truncate pb-4 text-[18px]">
          {country.name}
        </h3>

        <ul className="flex flex-col gap-1 text-[14px]">
          {[
            ["Population:", new Intl.NumberFormat().format(country.population)],
            ["Region:", `${country.region}`],
            ["Capital:", `${country.capital}`],
          ].map(([name, value]) => {
            return (
              <li key={name} className="flex items-center gap-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {name}
                </h3>
                <p className="text-gray-700 dark:text-white">{value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
