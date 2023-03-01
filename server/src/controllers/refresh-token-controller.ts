import {SECRET} from "../config";
import {User} from "../models/user-cars-schema";
import {verifyTokenFn} from "../validators/verify-token";

import jwt from "jsonwebtoken";
import {Request, Response} from "express";

const refreshToken = async (req: Request, res: Response) => {
	const authHeader = req.headers["authorization"];
	const authRefreshToken = authHeader && authHeader.split(" ")[1];

	if (!authRefreshToken)
		return res.status(401).json({msg: "Refresh Token não informado!"});

	try {
		const userId = verifyTokenFn(authRefreshToken);

		if (!userId) return res.status(401).json({msg: "Refresh Token inválido"});

		const user = await User.findById(userId);
		if (!user) return res.status(404).json({msg: "Usuário não encontrado"});

		const newToken = jwt.sign({id: user._id, email: user.email}, SECRET, {
			expiresIn: "17m",
		});

		const newRefreshToken = jwt.sign(
			{id: user._id, email: user.email},
			SECRET,
			{expiresIn: "17h"}
		);

		return res.status(200).json({
			msg: "Token atualizado com sucesso!",
			userId: user._id,
			newToken,
			newRefreshToken,
		});
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({msg: "Erro no servidor, tente novamente mais tarde."});
	}
};

export {refreshToken};
