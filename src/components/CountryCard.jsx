import React from "react";

const CountryCard = ({ country }) => {
  // destructure country
  const { flags, name, population, region, capital } = country;

  return (
    <div className="w-max overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="overflow-hidden">
        <img
          src={flags.svg}
          alt={name + "flag"}
          className="h-[180px] w-[280px] object-cover object-center"
        />
      </div>

      <div className="max-w-[280px] overflow-hidden bg-white p-8">
        <h3 className="section-title truncate pb-4 text-[18px]">{name}</h3>

        <ul className="flex flex-col gap-1 text-[14px]">
          {[
            ["Population:", new Intl.NumberFormat().format(population)],
            ["Region:", `${region}`],
            ["Capital:", `${capital}`],
          ].map(([name, value]) => {
            return (
              <li key={name} className="flex items-center gap-1">
                <h3 className="font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-700">{value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
