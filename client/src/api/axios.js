import axios from "axios";


export const TABLES_API='http://localhost:4000'
export default axios.create({
  baseURL: TABLES_API,
});
