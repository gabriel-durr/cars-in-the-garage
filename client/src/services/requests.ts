import {api} from "./axios";
import {Cars} from "./../types";

type Data = {
	allCars: Cars[];
};

type PartialCar = {
	description?: string;
	price: string;
};

async function getCars(): Promise<Cars[]> {
	try {
		const response = await api.get<Data>("/cars");

		return response.data.allCars;
	} catch (error) {
		throw error;
	}
}

async function updateCar(carId: string, updates: PartialCar): Promise<string> {
	try {
		const response = await api.patch(`/car/${carId}`, updates);
		return response.data;
	} catch (error) {
		throw error;
	}
}

export {getCars, updateCar};
