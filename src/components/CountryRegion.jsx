import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";

// continents list
const continents = [
  { name: "All", value: "All" },
  { name: "Africa", value: "Africa" },
  { name: "America", value: "Americas" },
  { name: "Asia", value: "Asia" },
  { name: "Europe", value: "Europe" },
  { name: "Oceania", value: "Oceania" },
];

const CountryRegion = () => {
  const [selectedContinent, setSelectedContinent] = useState("All");

  return (
    <Menu as="div" className="relative z-10 w-max">
      <Menu.Button className="inline-flex h-[56px] w-[210px] items-center justify-between rounded-md bg-white px-6 font-semibold text-gray-900 shadow-sm">
        {selectedContinent === "All" ? "Filter by Region" : selectedContinent}
        <RiArrowDownSLine size="1.3rem" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-in duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="absolute mt-2 flex w-full flex-col gap-1 rounded-md bg-white py-4 px-6 shadow-sm"
        >
          {continents.map((continent) => {
            return (
              <Menu.Item
                as="li"
                key={continent.name}
                onClick={() => setSelectedContinent(continent.value)}
                className="cursor-pointer font-semibold text-gray-900 hover:text-gray-600"
              >
                {continent.name}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CountryRegion;
