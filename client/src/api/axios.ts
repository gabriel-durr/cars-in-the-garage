import {getNewAccessToken} from "./requests/token";
import {getTokensOrUserId} from "@storage/storageAuthToken";

import axios, {AxiosInstance} from "axios";

const url =
	process.env.NODE_ENV === "production"
		? process.env.PORT
		: "http://localhost:3333";

const api: AxiosInstance = axios.create({
	baseURL: url,
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
			// error.config._retry = true;
			const accessToken = await getNewAccessToken();

			error.config.headers.Authorization = `Bearer ${accessToken}`;

			return api(error.config);
		}

		return Promise.reject(error);
	}
);

export {api};
