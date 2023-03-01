import {api} from "../axios";
import {
	getTokensOrUserId,
	saveTokenAndUserId,
} from "../../storage/storageAuthToken";

async function getNewAccessToken() {
	try {
		const response = await api.post(
			"/auth/refresh",
			{},
			{headers: {Authorization: `Bearer ${getTokensOrUserId("refreshToken")}`}}
		);
		const {newToken: acessToken, newRefreshToken: refreshToken} = response.data;

		saveTokenAndUserId({acessToken, refreshToken});
		return acessToken;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export {getNewAccessToken};
