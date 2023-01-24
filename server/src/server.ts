import {connectDb} from "./database/connect-dba";
import {port as prod} from "./config";
import {
	createNewCar,
	getAllCars,
	updateAllToCar,
	updateSpecificToCar,
	deleteCar,
} from "./controllers/car-controllers";

import express from "express";
import cors from "cors";
const port = prod || 3333;

const app = express();

connectDb().then(() =>
	app.listen(port, () => console.log(`Server running ${port} ⚡`))
);

app.use(express.json());
app.use(cors());

app.get("/cars", getAllCars);
app.post("/car", createNewCar);
app.put("/car/:id", updateAllToCar);
app.patch("/car/:id", updateSpecificToCar);
app.delete("/car/:id", deleteCar);
