import { api } from "../axios";
import { User } from "@typings/user-car-types";
import { getTokensOrUserId } from "@storage/storageAuthToken";

type CarTypes = Omit<User["cars"][0], "_id">;
type PartilCarTypes = Partial<Omit<User["cars"][0], "_id">>;

type UserUpdateInfoTypes = Partial<Pick<User, "avatar" | "email" | "name">>;

type UserUpdatePasswordTypes = {
	currentPassword: string;
	newPassword: string;
};

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

async function getUserAndCars() {
	try {
		const { data } = await api.get<User>(
			`/user/${getTokensOrUserId("userId")}`
		);

		return data;
	} catch (error) {
		throw error;
	}
}

async function updateUserInfo(userData: UserUpdateInfoTypes): Promise<string> {
	try {
		const {
			data: { msg },
		} = await api.patch(`/user/${getTokensOrUserId("userId")}`, userData);

		return msg;
	} catch (error) {
		throw error;
	}
}

async function updateUserPassword({
	currentPassword,
	newPassword,
}: UserUpdatePasswordTypes): Promise<string> {
	try {
		const {
			data: { msg },
		} = await api.patch(`/user/${getTokensOrUserId("userId")}/password`, {
			currentPassword,
			newPassword,
		});

		return msg;
	} catch (error) {
		throw error;
	}
}

const createNewCarUser = async ({
	carData,
}: CreateNewCarUserTypes): Promise<string> => {
	try {
		const {
			data: { msg },
		} = await api.post(`/user/${getTokensOrUserId("userId")}`, carData);

		return msg;
	} catch (error) {
		throw error;
	}
};

const updateUserCar = async ({
	carId,
	carData,
}: UpdateUserCarTypes): Promise<string> => {
	try {
		const {
			data: { msg },
		} = await api.put(`/user/${getTokensOrUserId("userId")}/${carId}`, carData);

		return msg;
	} catch (error) {
		throw error;
	}
};

const deleteUserCar = async ({
	carId,
}: DeleteUserCarTypes): Promise<string> => {
	try {
		const {
			data: { msg },
		} = await api.delete(`/user/${getTokensOrUserId("userId")}/${carId}`);

		return msg;
	} catch (error) {
		throw error;
	}
};

export {
	updateUserCar,
	deleteUserCar,
	updateUserInfo,
	getUserAndCars,
	createNewCarUser,
	updateUserPassword,
};
