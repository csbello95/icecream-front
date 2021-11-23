import axios from "axios";
import { API_URL } from "../constants";


  export const getIcecreamAxios = async () => {
    const endpoint = "/icecream/";
    return axios
      .get(`${API_URL}${endpoint}`)
      .then((result) => {
        console.log("DATA AXIOS", result);
        //setIcecreams(result.data);
        return result.data;
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

export const getIcecreamFetch =  () => {
    const endpoint = "/icecream/";
    return fetch(`${API_URL}${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
          return data
      });
  };


export const createIcecream = async (params) =>{
  const endpoint = "/icecream/create";
  const icecream = await axios.post(`${API_URL}${endpoint}`,params);
  console.log("Respuesta del post", icecream);
};