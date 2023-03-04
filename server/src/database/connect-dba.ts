import {DBA_URL} from "../config";
import mongoose from "mongoose";

const connectDb = async () => {
	try {
		mongoose.set("strictQuery", false);
		await mongoose.connect(DBA_URL);
		console.log("MongoDB Connected");
	} catch (err) {
		console.log(err);
		console.log("Error connecting to the database, server not started");
	}
};

export {connectDb};
