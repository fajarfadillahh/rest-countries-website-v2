import React from "react";
import { RiSearchLine } from "react-icons/ri";

const CountrySearch = () => {
  return (
    <form className="flex h-[56px] max-w-lg items-center rounded-md bg-white shadow-sm">
      <div className="inline-flex h-full w-[80px] items-center justify-center text-gray-600">
        <RiSearchLine size="1.3rem" />
      </div>

      <input
        type="text"
        placeholder="Search for a country..."
        className="h-full w-full bg-transparent from-gray-900 pr-8 font-semibold outline-none placeholder:text-gray-600"
      />
    </form>
  );
};

export default CountrySearch;
