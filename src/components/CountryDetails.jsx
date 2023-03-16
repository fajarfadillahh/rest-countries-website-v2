import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import image
import Flag from "../assets/images/flag-be.svg";

const CountryDetails = () => {
  return (
    <section className="section pt-32">
      <div className="container grid gap-10">
        <Link
          to="/"
          className="inline-flex h-[56px] w-max items-center gap-4 rounded-md bg-white px-8 font-semibold text-gray-900 shadow-sm"
        >
          <RiArrowLeftLine size="1.3rem" />
          Back
        </Link>

        <div className="grid gap-12">
          <div className="h-[270px] max-w-[580px] overflow-hidden rounded-md">
            <img
              src={Flag}
              alt="flag"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="grid gap-6">
            <h3 className="section-title text-[26px]">Name country</h3>

            <div className="grid gap-10">
              <ul className="grid gap-3">
                {[
                  ["Native Name:", "Native name"],
                  ["Population:", "1,234,567"],
                  ["Region:", "Region name"],
                  ["Sub Region:", "Sub region name"],
                  ["Capital:", "Capital name"],
                ].map(([name, value]) => {
                  return (
                    <li key={name} className="inline-flex items-start gap-1">
                      <h3 className="whitespace-nowrap font-semibold text-gray-900">
                        {name}
                      </h3>
                      <p className="text-gray-800">{value}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="section-title mb-3 text-[20px]">
                Borders Country:
              </h3>

              <ul className="flex flex-wrap items-center gap-44">
                <li className="inline-flex w-[70px] justify-center rounded-md bg-white py-2 text-[14px] text-gray-800 shadow-sm">
                  Border
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
