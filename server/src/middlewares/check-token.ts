import {verifyToken} from "../validators/verify-token";

import axios from "axios";
import {NextFunction, Request, Response} from "express";

async function generateNewRefreshToken(
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

export const checkToken = async (
	req: Request & {userId: string},
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers["authorization"];
	const accessToken = authHeader && authHeader.split(" ")[1];

	if (!accessToken) {
		return res.status(401).json({msg: "Token não fornecido"});
	}

	const userId = verifyToken(accessToken);
	if (userId) {
		req.userId = userId;
		return next();
	}

	const responseNewRefreshToken = await generateNewRefreshToken(req, res);

	responseNewRefreshToken
		? next()
		: res.status(401).json({msg: "Token inválido"});
};
