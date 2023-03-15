import { getNewAccessToken } from "./requests/token";
import { getTokensOrUserId } from "@storage/storageAuthToken";

const { PROD, CIG_API_URL } = import.meta.env;
const apiUrl = PROD ? CIG_API_URL : "http://localhost:3333";

import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: apiUrl,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${getTokensOrUserId("acessToken")}`,
	},
});

api.interceptors.response.use(
	function (response) {
		return response;
	},
	async function (error) {
		if (error.response.status === 401) {
			error.config._retry = true;
			const accessToken = await getNewAccessToken();

			error.config.headers.Authorization = `Bearer ${accessToken}`;

			return api(error.config);
		}

		return Promise.reject(error);
	}
);

export { api };
