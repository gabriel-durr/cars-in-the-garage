import {api} from "../axios";
import {User} from "@typings/user-car-types";
import {getTokensOrUserId} from "@storage/storageAuthToken";

const userId = getTokensOrUserId("userId");

type CarTypes = Omit<User["cars"][0], "_id">;
type PartilCarTypes = Partial<Omit<User["cars"][0], "_id">>;

type CreateNewCarUserTypes = {
	carData: CarTypes;
};
type UpdateUserCarTypes = {
	carId: string;
	carData: PartilCarTypes;
};
type DeleteUserCarTypes = {
	carId: string;
};

async function getUserAndCars(): Promise<User> {
	try {
		const {data} = await api.get<User>(`/user/${userId}`);

		return data;
	} catch (error) {
		throw error;
	}
}

const createNewCarUser = async ({carData}: CreateNewCarUserTypes) => {
	try {
		const {data} = await api.post(`/user/${userId}`, carData);

		return data.msg;
	} catch (error) {
		throw error;
	}
};

const updateUserCar = async ({carId, carData}: UpdateUserCarTypes) => {
	try {
		const {data} = await api.put(`/user/${userId}/${carId}`, carData);

		return data.msg;
	} catch (error) {
		throw error;
	}
};

const deleteUserCar = async ({carId}: DeleteUserCarTypes) => {
	try {
		const {data} = await api.delete(`/user/${userId}/${carId}`);

		return data.msg;
	} catch (error) {
		throw error;
	}
};

export {getUserAndCars, createNewCarUser, updateUserCar, deleteUserCar};
