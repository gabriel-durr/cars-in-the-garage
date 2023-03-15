import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET;
const DBA_URL = process.env.DATABASE_URL;
const PRIVATE_USER_ID = process.env.PRIVATE_USER_ID;
const PRIVATE_CARS_ID = JSON.parse(process.env.PRIVATE_CARS_ID) as string[];
const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : "3333";

export { PORT, DBA_URL, SECRET, PRIVATE_USER_ID, PRIVATE_CARS_ID };
