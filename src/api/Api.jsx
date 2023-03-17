import Axios from "axios";

const RESTCountries = Axios.create({
  baseURL: "https://restcountries.com/v2",
});

// get all countries
const getAllCountries = async () => {
  const response = await RESTCountries.get("/all");
  return response.data;
};

const getCountryByCode = async (code) => {
  const response = await RESTCountries.get(`/alpha/${code}`);
  return response.data;
};

export { getAllCountries, getCountryByCode };
