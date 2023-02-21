import {checkToken} from "../middlewares/check-token";
import {
	getUser,
	createNewCar,
	updateCar,
	removeCar,
} from "../controllers/user-controller";

import {Router} from "express";

const userRoutes = Router();

userRoutes.get("/:userId", checkToken, getUser);
userRoutes.post("/:userId", checkToken, createNewCar);
userRoutes.put("/:userId/:carId", checkToken, updateCar);
userRoutes.delete("/:userId/:carId", checkToken, removeCar);

export {userRoutes};
