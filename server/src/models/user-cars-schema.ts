import * as mongoose from "mongoose";

//TODO Adicionar created_at no usuario para ter a data de criação dele, porem remover esse dado das querys

const carSchema = new mongoose.Schema({
	model: {type: String, require: true},
	brandIcon: {type: String, require: true},
	images: [{type: String, required: true}],
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
