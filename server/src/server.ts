import { PORT } from "./config";
import { connectDb } from "./database/connect-dba";
import { authRoutes } from "./routes/auth.routes";
import { userRoutes } from "./routes/user.routes";

import bodyParser from "body-parser";
import { rateLimit } from "express-rate-limit";
import express from "express";
import cors from "cors";

const maxRequests = 7;
const sevenTeenSecondsMs = 17 * 1000;
const sevenTeenSeconds = sevenTeenSecondsMs / 1000;

const limiter = rateLimit({
	windowMs: sevenTeenSecondsMs,
	max: maxRequests,
	handler: (_, res) =>
		res.status(429).json({
			msg: `Muitas requisições. Só é permitido ${maxRequests} requisições em um período de  ${sevenTeenSeconds} segundos`,
		}),
});

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use(express.json());

app.use(limiter);

// AUTH ROUTES & REFRESH TOKEN
app.use("/auth", authRoutes);

// USER-CAR ROUTES
app.use("/user", userRoutes);

connectDb().then(() =>
	app.listen(PORT, () => console.log(`Server running ${PORT} ⚡`))
);
