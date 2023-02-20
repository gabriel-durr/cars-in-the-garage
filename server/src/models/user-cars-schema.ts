import * as mongoose from "mongoose";

const carSchema = new mongoose.Schema({
	images: [{type: String, required: true}],
	model: {type: String, required: true},
	year: {type: Number, required: true},
	speed: {type: String, required: true},
	price: {type: String, required: true},
	description: {type: String, required: true},
});

const userSchema = new mongoose.Schema(
	{
		name: {type: String, required: true},
		email: {type: String, required: true},
		password: {type: String, required: true},
		avatar: {type: String},
		phone: {type: String},
		cars: [carSchema],
	},
	{versionKey: false}
);

export const User = mongoose.model("User", userSchema);
