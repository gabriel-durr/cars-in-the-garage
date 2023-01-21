import {CarDba} from "../models/car-schema";

import {Request, Response} from "express";
import {v4 as uuidV4} from "uuid";

const getAllCars = (req: Request, res: Response) => {
	CarDba.find({}, (err, allCars) => {
		if (err) return res.status(500).json(err);
		return res.status(200).json({allCars});
	});
};

const createNewCar = (req: Request, res: Response) => {
	const {body} = req;

	const newCar = new CarDba({
		_id: uuidV4(),
		...body,
	});

	CarDba.exists({model: newCar.model}, (err, exists) => {
		if (err) return res.status(500).send(err);
		if (exists)
			return res.status(400).send({message: "Esse modelo de carro já existe"});
	});

	newCar.save((err, carAd) => {
		if (err) return console.error(err);

		return res.status(201).send(`${carAd.model} Salvo com Suceoss 🏎️!`);
	});
};

const updateAllToCar = (req: Request, res: Response) => {
	const {
		body,
		params: {id},
	} = req;

	CarDba.findByIdAndUpdate(
		id,
		{$set: body},
		{upsert: false, new: true},
		(err, car) => {
			if (err)
				return res.status(404).send(`Carro ${car.model} não encontrado.`);
			return res.send(`Carro ${car.model} foi atualizado com sucesso!`);
		}
	);
};

const updateSpecificToCar = (req: Request, res: Response) => {
	const {
		body,
		params: {id},
	} = req;

	console.log(id);

	CarDba.findByIdAndUpdate(id, body, {upsert: false, new: true}, (err, car) => {
		if (err) return res.status(404).send(`Carro ${car.model} não encontrado.`);
		return res.send(`Carro ${car.model} foi atualizado com sucesso!`);
	});
};

const deleteCar = (req: Request, res: Response) => {
	const {
		body,
		params: {id},
	} = req;

	CarDba.findById(id, (err, car) => {
		if (err) return res.status(500).send(err);
		if (!car) return res.status(404).send("Carro não encontrado.");

		car.remove((err, deletedCar) => {
			if (err) return res.status(500).send(err);
			return res.send(`Carro ${deletedCar.model} foi deletado.`);
		});
	});
};

export {
	createNewCar,
	getAllCars,
	updateAllToCar,
	updateSpecificToCar,
	deleteCar,
};
