import axios, {AxiosInstance} from "axios";

const url = "https://server-rydc.onrender.com";

const api: AxiosInstance = axios.create({
	baseURL: url,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

export {api};
