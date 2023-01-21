import * as mongoose from "mongoose";

const carSchema = new mongoose.Schema({
	_id: {type: String, required: true},
	image: [{type: String, required: true}],
	brand: {type: String, required: true},
	price: {type: String, required: true},
	model: {type: String, required: true},
	year: {type: Number, required: true},
	description: {type: String, required: true},
	owner: {
		name: {type: String, required: true},
		email: {type: String},
		phone: {type: String},
	},
});

export const CarDba = mongoose.model("cars", carSchema);
