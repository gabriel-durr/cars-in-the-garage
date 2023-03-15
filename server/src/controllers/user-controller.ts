import { User } from "../models/user-cars-schema";
import { PRIVATE_USER_ID, PRIVATE_CARS_ID } from "../config";

import bcrypt from "bcrypt";
import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
	const { userId } = req.params;

	try {
		const user = await User.findById(userId, "-password -_id");

		if (!user) return res.status(404).json({ msg: "Usuário não encontrado!" });

		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Erro no servidor!" });
	}
};

const updateUser = async (req: Request, res: Response) => {
	const {
		body: userData,
		params: { userId },
	} = req;

	if (userId === PRIVATE_USER_ID) {
		return res.status(403).json({
			msg: `Não é possível atualizar as informações de perfil do "Usuário Teste". 
				  Crie uma conta e terá permissão para atualizar todos dados da conta`,
		});
	}

	try {
		const user = await User.findById(userId, "-cars -password");

		if (!user) return res.status(404).json({ msg: "Usuário não encontrado!" });

		Object.keys(userData).forEach(key => (user[key] = userData[key]));

		await user.save();

		if ("name" in userData)
			res.status(200).json({ msg: "Nome foi atualizado com sucesso." });

		if ("email" in userData)
			res.status(200).json({ msg: "Email foi atualizado com sucesso." });

		if ("avatar" in userData)
			res.status(200).json({ msg: "Avatar foi atualizado com sucesso." });
	} catch (error) {
		console.error(error);

		res.status(500).json({ msg: "Erro ao atualizar usuário" });
	}
};

const updateUserPassword = async (req: Request, res: Response) => {
	const {
		body: { currentPassword, newPassword },
		params: { userId },
	} = req;

	if (userId === PRIVATE_USER_ID) {
		return res.status(403).json({
			msg: `Não é possível altrar a senha do "Usuário Teste". 
			 	  Crie uma conta e terá permissão para  todos dados da conta`,
		});
	}

	try {
		const user = await User.findById(userId, "-cars");

		if (!user) {
			return res.status(404).json({ msg: "Usuário não encontrado." });
		}

		const isMatch = await bcrypt.compare(currentPassword, user.password);

		if (!isMatch) {
			return res.status(401).json({ msg: "Senha incorreta." });
		}

		const salt = await bcrypt.genSalt(12);
		const hashedPassword = await bcrypt.hash(newPassword, salt);

		user.password = hashedPassword;

		await user.save();

		res.status(200).json({
			msg: "Senha atualizada com sucesso. Por favor, faço login novamente.",
		});
	} catch (error) {
		console.error(error);

		res.status(500).json({ msg: "Erro ao atualizar a senha do usuário." });
	}
};

const createNewCar = async (req: Request, res: Response) => {
	const {
		body: newCar,
		params: { userId },
	} = req;

	try {
		const user = await User.findById(userId, "-password");
		const carExists = user.cars.some(car => car.model === newCar.model);
		if (carExists)
			return res.status(400).json({ msg: "Esse modelo de carro já existe" });

		user.cars.push(newCar);
		await user.save();

		return res
			.status(201)
			.json({ msg: `Carro ${newCar.model} criado com sucesso` });
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Erro no servidor." });
	}
};

const updateCar = async (req: Request, res: Response) => {
	const {
		body: carUpdate,
		params: { userId, carId },
	} = req;

	const isPrivateCar = PRIVATE_CARS_ID.some(privateCar => privateCar === carId);

	if (isPrivateCar) {
		return res.status(403).json({
			msg: `Não é possível atualizar carros de amostragem (Mustang, Model X e Urus) do "Usuário Teste". 
				  Crie novos carros e conseguirá atualizá-los.`,
		});
	}

	try {
		const user = await User.findById(userId, "-password");
		if (!user) return res.status(404).json({ msg: "Usuário não encontrado." });

		const carIndex = user.cars.findIndex(car => car._id.toString() === carId);

		if (carIndex === -1)
			return res.status(404).json({ msg: "Carro não encontrado." });

		Object.keys(carUpdate).forEach(key => {
			user.cars[carIndex][key] = carUpdate[key];
		});

		await user.save();

		return res.status(200).json({ msg: "Carro Atualizado com sucesso!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Erro no servidor." });
	}
};

const removeCar = async (req: Request, res: Response) => {
	const { userId, carId } = req.params;

	const privateCar = PRIVATE_CARS_ID.some(
		privateCarId => privateCarId === carId
	);

	if (privateCar)
		return res.status(403).json({
			msg: `Não é possível exluir carros de amostragem (Mustang, Model X e Urus) do "Usuário Teste".
				  Crie novos carros e conseguirar excluí-los.`,
		});

	try {
		const user = await User.findById(userId, "-password");
		if (!user) return res.status(404).json({ msg: "Usuário não encontrado." });

		const car = user.cars.id(carId);
		if (!car) return res.status(404).json({ msg: "Carro não encontrado." });

		car.remove();
		await user.save();

		return res
			.status(200)
			.json({ msg: `Carro ${car.model} excluído com sucesso!` });
	} catch (error) {
		console.error(error);

		res.status(500).json({ msg: "Erro no servidor." });
	}
};

export {
	getUser,
	updateCar,
	removeCar,
	updateUser,
	createNewCar,
	updateUserPassword,
};
