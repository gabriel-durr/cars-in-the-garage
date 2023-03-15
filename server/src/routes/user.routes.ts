import {checkToken} from "../middlewares/check-token";
import {
	getUser,
	updateCar,
	removeCar,
	updateUser,
	createNewCar,
	updateUserPassword,
} from "../controllers/user-controller";

import {Router} from "express";

const userRoutes = Router();

userRoutes.get("/:userId", checkToken, getUser);
userRoutes.patch("/:userId", checkToken, updateUser);
userRoutes.patch("/:userId/password", checkToken, updateUserPassword);
userRoutes.post("/:userId", checkToken, createNewCar);
userRoutes.put("/:userId/:carId", checkToken, updateCar);
userRoutes.delete("/:userId/:carId", checkToken, removeCar);

export {userRoutes};
