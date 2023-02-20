import {config} from "dotenv";

config();

const dbaUrl = process.env.DATABASE_URL;
const portDevOrProduction =
	process.env.NODE_ENV === "production" ? process.env.PORT : 3333;

export {dbaUrl, portDevOrProduction};
