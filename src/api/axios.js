import axios from "axios";
import { baseurls } from "../config";

const tmdbAxios = axios.create({
    baseURL: baseurls.api
});

export default tmdbAxios;