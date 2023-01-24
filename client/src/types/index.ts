/**
 * Represents a car object
 * @typedef {Object} Cars
 * @property {string} _id - The unique id of the car
 * @property {string[]} image - Array of image URLs of the car
 * @property {string} model - The model of the car
 * @property {string} brand - The brand of the car
 * @property {string} brandIcon - The brand icon of the car
 * @property {string} description - The description of the car
 * @property {number} year - The year of the car
 * @property {string} speed - The speed of the car
 * @property {string} price - The price of the car
 * @property {Object} owner - The owner of the car
 * @property {string} owner.avatar - The avatar of the owner
 * @property {string} owner.email - The email address of the owner
 * @property {string} owner.name - The name of the owner
 * @property {string} owner.phone - The phone number of the owner
 */
export type Cars = {
	_id: string;
	image: string[];
	model: string;
	brand: string;
	brandIcon: string;
	description: string;
	year: number;
	speed: string;
	price: string;
	owner: {
		avatar: string;
		email: string;
		name: string;
		phone: string;
	};
};
