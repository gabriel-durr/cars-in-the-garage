import {verifyTokenFn} from "../validators/verify-token";

import {NextFunction, Request, Response} from "express";

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

	const userId = verifyTokenFn(accessToken);

	if (userId) {
		req.userId = userId;
		return next();
	}

	res.status(401).json({msg: "Token inválido"});
};
