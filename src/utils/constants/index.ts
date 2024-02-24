const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost";
const API_URL =
  process.env.REACT_APP_API_URL || "https://swapi.dev/api/planets/?format=json";

export default { BASE_URL, API_URL };
