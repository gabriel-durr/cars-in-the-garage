import axios from "axios";

export async function refreshToken(
	req: Request,
	res: Response
): Promise<boolean> {
	const {refreshToken} = req.body;

	try {
		const response = await axios.post(
			"http://localhost:3333/auth/refresh",
			{},
			{
				headers: {
					Authorization: `Bearer ${refreshToken}`,
				},
			}
		);
		const {newToken, newRefreshToken} = response.data;

		if (newToken) {
			res.setHeader("Authorization", `Bearer ${newToken}`);
			res.status(200).json({token: newToken, refreshToken: newRefreshToken});
			return true;
		}
	} catch (error) {
		console.error(error);
	}

	res.status(401).json({msg: "Token inválido"});
	return false;
}
