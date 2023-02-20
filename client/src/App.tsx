import {CarsCards} from "./components/cars-cards";
import {AddNewCar} from "./components/add-new-car";

import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {api} from "./api/axios";
import {Flex, Box, Spinner} from "@chakra-ui/react";

function App() {
	const [loading, setLoading] = useState(false);

	const {data, isLoading, isError} = useQuery(["user-cars"], () =>
		api
			.post("/auth/login", {email: "larissa@email.com", password: "123"})
			.then(res => res.data)
	);

	//TODO criar um Contexto que irá distribuir o estado que contém lista de carros, além das outras funções para utilizar na aplicação e remover o prop drilling react da app

	console.log(data);

	// if (isLoading) {
	// 	return (
	// 		<Spinner
	// 			pos="absolute"
	// 			thickness="4px"
	// 			speed="0.65s"
	// 			emptyColor="gray.200"
	// 			color="blue.500"
	// 			size="lg">
	// 			Loading...
	// 		</Spinner>
	// 	);
	// }

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

			<CarsCards />

			<AddNewCar />
		</Flex>
	);
}

export default App;
