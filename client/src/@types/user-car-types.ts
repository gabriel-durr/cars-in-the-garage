/**
 * Represents a car object
 * @typedef {Object} User
 * @property {string} _id - The unique id of the User
 * @property {string} name - The name of the User
 * @property {string} email - The email address of the User
 * @property {string} avatar - The Avatar of the User
 * @property {Array} cars - The car of the User
 * @property {string} cars._id - The unique id of the car
 * @property {string[]} cars.images - Array of images URLs of the car
 * @property {string} cars.model - The model of the car
 * @property {number} cars.year - The year of the car
 * @property {string} cars.speed - The speed of the car
 * @property {string} cars.price - The price of the car
 * @property {string} cars.description - The description of the car
 */

type Car = {
	_id: string;
	model: string;
	brandIcon: string;
	images: string[];
	year: number;
	speed: string;
	price: string;
	description: string;
};

export type User = {
	name: string;
	email: string;
	avatar: string;
	cars: Car[];
};
