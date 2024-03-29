import {
	getUserAndCars,
	updateUserInfo,
	updateUserPassword,
	createNewCarUser,
	updateUserCar,
	deleteUserCar,
} from "../api/requests/user";
import { User } from "@typings/user-car-types";

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useUserData = () => {
	const { data, isLoading, error, isSuccess, isFetching } = useQuery(
		["user"],
		() => getUserAndCars()
	);

	const queryClient = useQueryClient();

	const user = { ...data } as User;

	const updateUser = useMutation(updateUserInfo, {
		onSuccess: () => {
			queryClient.invalidateQueries(["user"]);
		},
	});

	const updatePassword = useMutation(updateUserPassword, {
		onSuccess: () => {
			queryClient.invalidateQueries(["user"]);
		},
	});

	const addNewCar = useMutation(createNewCarUser, {
		onSuccess: () => {
			queryClient.invalidateQueries(["user"]);
		},
	});

	const updateCar = useMutation(updateUserCar, {
		onSuccess: () => {
			queryClient.invalidateQueries(["user"]);
		},
	});

	const deleteCar = useMutation(deleteUserCar, {
		onSuccess: () => queryClient.invalidateQueries(["user"]),
	});

	return {
		user,
		error,
		isSuccess,
		isLoading,
		isFetching,
		addNewCar,
		updateCar,
		deleteCar,
		updateUser,
		updatePassword,
	};
};
