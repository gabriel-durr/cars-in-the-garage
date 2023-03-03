import {portDevOrProduction} from "./config";
import {connectDb} from "./database/connect-dba";
import {authRoutes} from "./routes/auth.routes";
import {userRoutes} from "./routes/user.routes";

import bodyParser from "body-parser";

import express from "express";
import cors from "cors";

const app = express();

app.use(bodyParser.json({limit: "10mb"}));
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}));

app.use(cors());
app.use(express.json());
// AUTH ROUTES & REFRESH TOKEN
app.use("/auth", authRoutes);

// USER-CAR ROUTES
app.use("/user", userRoutes);

connectDb().then(() =>
	app.listen(portDevOrProduction, () =>
		console.log(`Server running ${portDevOrProduction} ⚡`)
	)
);
