import Axios from "axios";

const RESTCountries = Axios.create({
  baseURL: "https://restcountries.com/v2",
});

// get all countries
const getAllCountries = async () => {
  try {
    const response = await RESTCountries.get("/all");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getAllCountries };
