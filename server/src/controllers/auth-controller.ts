import {User} from "../models/user-cars-schema";

import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {Request, Response} from "express";

const authRegister = async (req: Request, res: Response) => {
	const {name, email, password} = req.body;

	try {
		const userExists = await User.findOne({email});

		if (userExists) return res.status(404).json({msg: "Usuário já registrado"});

		const salt = await bcrypt.genSalt(12);
		const passwordHash = await bcrypt.hash(password, salt);

		const createdUser = new User({
			name,
			email,
			password: passwordHash,
		});

		createdUser.save((error, user) => {
			if (error)
				return res.status(500).json({
					msg: "Erro no servidor, tente novamente mais tarde.",
				});

			return res
				.status(201)
				.json({msg: `Usuário criado ${user.name} com sucesso!`});
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({msg: "Erro no servidor!"});
	}
};

const authLogin = async (req: Request, res: Response) => {
	const {email, password} = req.body;

	try {
		const user = await User.findOne({email});
		const checkPassword = await bcrypt.compare(password, user.password);

		if (!user) return res.status(404).json({msg: "Usuário não encontrado!"});
		if (!checkPassword)
			return res.status(401).json({msg: "Email ou Senha inválidos"});

		const secret = process.env.SECRET;
		const acessToken = jwt.sign({id: user._id, email: user.email}, secret, {
			expiresIn: "17m",
		});

		const refreshToken = jwt.sign({id: user._id, email: user.email}, secret, {
			expiresIn: "20m",
		});

		return res.status(200).json({
			msg: "Autenticação realizada com sucesso!",
			userId: user._id,
			acessToken,
			refreshToken,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({msg: "Erro no servidor!"});
	}
};

export {authRegister, authLogin};
