import {portDevOrProduction} from "./config";
import {connectDb} from "./database/connect-dba";
import {checkToken} from "./middlewares/check-token";
import {refreshToken} from "./controllers/refresh-token-controller";
import {createNewCar, updateCar, removeCar} from "./controllers/car-controller";

import {
	userRegister,
	userLogin,
	getUserCars,
} from "./controllers/user-controllers";

import express from "express";
import cors from "cors";

const app = express();

connectDb().then(() =>
	app.listen(portDevOrProduction, () =>
		console.log(`Server running ${portDevOrProduction} ⚡`)
	)
);

app.use(express.json());
app.use(cors());

// USER ROUTES
app.post("/auth/register", userRegister);
app.post("/auth/login", userLogin);

// REFRESH JWT TOKEN
app.post("/auth/refresh", refreshToken);

// CAR ROUTES
app.get("/user/:userId", checkToken, getUserCars);
app.post("/user/:userId", checkToken, createNewCar);
app.put("/user/:userId/:carId", checkToken, updateCar);
app.delete("/user/:userId/:carId", checkToken, removeCar);
