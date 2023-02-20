import {User} from "../models/user-cars-schema";

import jwt from "jsonwebtoken";
import {Request, Response} from "express";

export const refreshToken = async (req: Request, res: Response) => {
	const authHeader = req.headers["authorization"];
	const refreshToken = authHeader && authHeader.split(" ")[1];

	if (!refreshToken)
		return res.status(4001).json({msg: "Token não informado!"});

	try {
		const secret = process.env.SECRET;
		const decoded = jwt.verify(refreshToken, secret) as {
			id: string;
			email: string;
		};

		if (!decoded) return res.status(404).json({msg: "Refresh Token inválido"});

		const user = await User.findById(decoded.id);
		if (!user)
			return res.status(404).json({msg: "Token - Usuário não encontrado"});

		const newToken = jwt.sign({id: user._id, email: user.email}, secret, {
			expiresIn: "15m",
		});

		const newRefreshToken = jwt.sign({id: user._id, email: user.email}, secret);

		return res.status(200).json({
			msg: "Token atualizado com sucesso!",
			userId: user._id,
			newToken,
			newRefreshToken,
		});
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
};
