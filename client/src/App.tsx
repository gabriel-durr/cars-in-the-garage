import {Cars} from "./types";
import {CarsCard} from "./components/cars-card";
import {getCars} from "./services/requests";
import {AddNewCar} from "./components/add-new-car";

import {useEffect, useState} from "react";
import {Flex, Box, Spinner} from "@chakra-ui/react";

function App() {
	const [cars, setCars] = useState<Cars[]>([]);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		(async function () {
			const cars = await getCars();
			setCars(cars);
		})();
	}, []);

	if (loading) {
		return (
			<Spinner
				pos="absolute"
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.500"
				size="lg">
				Loading...
			</Spinner>
		);
	}

	return (
		<Flex w="100vw" h="100vh" justify="space-around" align="center" bg="#000">
			<Box
				backgroundBlendMode="multiply"
				w="100%"
				h="100%"
				bg="purple.400"
				filter="blur(12px)"
				pos="absolute"
				bgSize="cover"
				bgImg="/garage.jpg"
			/>
			{cars.map(car => (
				<CarsCard
					key={car._id}
					_id={car._id}
					image={car.image}
					model={car.model}
					brand={car.brand}
					brandIcon={car.brandIcon}
					price={car.price}
					speed={car.speed}
					year={car.year}
					description={car.description}
					owner={car.owner}
					message={message}
					setMessage={setMessage}
				/>
			))}
			<AddNewCar />
		</Flex>
	);
}

export default App;
