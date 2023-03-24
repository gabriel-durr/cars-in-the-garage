import { Flex, Text, Box, Image, Heading } from "@chakra-ui/react";

function App() {
	return (
		<Flex pos="relative" boxSize="100%">
			<Box
				p="4"
				pos="absolute"
				w={{ base: "90%", md: "79%", lg: "532px" }}
				top="14"
				left={{ base: "2%", md: "12%", lg: "4%" }}>
				<Heading
					as="h1"
					fontSize={[".89rem", "1rem", "1.16rem", "1.2rem"]}
					pb="12"
					textTransform="uppercase">
					Bem-vindo à sua garagem de carros!
				</Heading>
				<Text
					fontSize={[".8rem", ".81rem", ".88rem", ".91rem"]}
					color="gray.800">
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
				w={["120px", "138px", "244px", "300px", "518px"]}
				left={{ base: 2, md: 4, lg: "28%", xl: 72 }}
				top={["71%", "68%", "64%", "52%", "48%"]}
				borderWidth={{ base: "4px", md: "6px", lg: "7px", xl: "10px" }}
				borderColor="black"
				borderStyle="solid"
				objectFit="contain"
				src="single-car-home.png"
			/>

			<Image
				pos="absolute"
				zIndex="-1"
				w={{ base: "52%", md: "60%", lg: "500px", xl: "882px" }}
				top={["60%", "58%", "44%", "24%", "8%"]}
				right={{ base: "22%", md: "16%", lg: "18%" }}
				src="car-home.png"
				shadow="dark-lg"
				objectFit="cover"
			/>

			<Image
				pos="absolute"
				w={["102px", "110px", "220px", "280px", "458px"]}
				top={["62%", "60%", "50%", "28%", "12%"]}
				right={["2%", "6%", "2%"]}
				borderWidth={{ base: "3px", md: "5px", lg: "6px", xl: "9px" }}
				borderColor="white"
				borderStyle="solid"
				objectFit="contain"
				src="two-cars-home.png"
			/>
		</Flex>
	);
}

export default App;
