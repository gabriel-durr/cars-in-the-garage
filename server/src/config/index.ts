import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET;
const DBA_URL = process.env.DATABASE_URL;
const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : "3333";

export {PORT, DBA_URL, SECRET};
