import React from "react";
import { RiSearchLine } from "react-icons/ri";

const CountrySearch = ({ setSearch }) => {
  return (
    <form className="flex h-[56px] max-w-lg items-center rounded-md bg-white shadow-sm dark:bg-gray-700">
      <div className="inline-flex h-full w-[80px] items-center justify-center text-gray-600 dark:text-white">
        <RiSearchLine size="1.3rem" />
      </div>

      <input
        type="text"
        placeholder="Search for a country..."
        onChange={setSearch}
        className="h-full w-full bg-transparent pr-8 font-semibold text-gray-900 outline-none placeholder:text-gray-600 dark:text-white dark:placeholder:text-white"
      />
    </form>
  );
};

export default CountrySearch;
