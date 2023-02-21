import {config} from "dotenv";

config();

const dbaUrl = process.env.DATABASE_URL;
const SECRET = process.env.SECRET;

const portDevOrProduction =
	process.env.NODE_ENV === "production" ? process.env.PORT : 3333;

export {dbaUrl, portDevOrProduction, SECRET};
