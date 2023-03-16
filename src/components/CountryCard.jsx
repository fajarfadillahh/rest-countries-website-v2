import React from "react";

// import image
import Flag from "../assets/images/flag-be.svg";

const CountryCard = () => {
  return (
    <div className="w-max overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="overflow-hidden">
        <img
          src={Flag}
          alt=""
          className="h-[180px] w-[280px] object-cover object-center"
        />
      </div>

      <div className="max-w-[280px] overflow-hidden bg-white p-8">
        <h3 className="section-title truncate pb-4 text-[18px]">
          Name country
        </h3>

        <ul className="flex flex-col gap-1 text-[14px]">
          {[
            ["Population:", "1,234,567"],
            ["Region:", "Region country"],
            ["Capital:", "Capital country"],
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
