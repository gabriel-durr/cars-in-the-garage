import {portDevOrProduction} from "./config";
import {connectDb} from "./database/connect-dba";
import {authRoutes} from "./routes/auth.routes";
import {userRoutes} from "./routes/user.routes";

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

// AUTH ROUTES & REFRESH TOKEN
app.use("/auth", authRoutes);

// USER-CAR ROUTES
app.use("/user", userRoutes);
