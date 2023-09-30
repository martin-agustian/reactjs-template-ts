import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
instance.defaults.timeout = 5000;

export default instance;
