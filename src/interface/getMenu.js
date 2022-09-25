import axios from "axios";
import mrn from "./mrn.js";
import apiurl from "./apiurl.js";
export default async function getMenu() {
  const menuResponse = await axios.post(
    `${apiurl}/get-menu`,
    { mrn: mrn }
  );
  console.log("menu fetched");
  return menuResponse.data;
}
