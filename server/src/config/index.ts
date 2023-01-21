import {config} from "dotenv";
config();

const url = process.env.DATABASE_URL;
const port = process.env.PORT;

export {url, port};
