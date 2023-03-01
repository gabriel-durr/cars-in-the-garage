import {Flex, Text, Box, Image, Heading} from "@chakra-ui/react";
import {LoadingAnimation} from "./components/loading-animation";

function App() {
	const isLoading = false;

	if (isLoading) {
		return <LoadingAnimation />;
	}

	return (
		<Flex pos="relative" w="100%">
			<Box pos="absolute" left="72" top="14" w="440px">
				<Heading as="h1" size="md" pb="12" textTransform="uppercase">
					Bem-vindo à sua garagem de carros!
				</Heading>
				<Text fontSize="0.91rem" color="gray.800">
					Aproveite a liberdade de criar carros com a nossa garagem online! Com
					apenas alguns cliques, você pode escolher o modelo e todos os detalhes
					do seu carro dos sonhos.
					{<br />} {<br />} E o melhor de tudo é que você pode criar quantos
					quiser! Venha dar asas à sua imaginação e crie já o seu carro
					exclusivo na nossa garagem virtual.
				</Text>
			</Box>

			<Image
				pos="absolute"
				left="72"
				top="350"
				border="10px solid #000"
				w="570px"
				objectFit="contain"
				src="single-car-home.png"
			/>

			<Image
				pos="absolute"
				zIndex="-1"
				transform="translate(88%, 10%)"
				w="900px"
				src="car-home.png"
				shadow="dark-lg"
				objectFit="cover"
			/>

			<Image
				pos="absolute"
				right="0"
				top="160"
				border="8px solid #fff"
				w="480px"
				objectFit="contain"
				src="two-cars-home.png"
			/>
		</Flex>
	);
}

export default App;
