import axios from "axios";
import { API_SWAPI } from "../env";

export default class AxiosService {
  constructor() {}

  async getAllStarships() {
    const url = `${API_SWAPI}/starships/`;
    return await axios.get(url);
  }
}
