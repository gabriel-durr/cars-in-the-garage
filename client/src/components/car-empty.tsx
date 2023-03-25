import { VStack, Text, Image } from "@chakra-ui/react";

export const CarEmpty = () => {
	return (
		<VStack
			w="100%"
			h="95.8%"
			align="center"
			justify="center"
			spacing="12"
			userSelect="none"
			pointerEvents="none"
			bg="whiteAlpha.100">
			<Text
				fontSize="3xl"
				bgGradient="linear-gradient(my.white, my.light)"
				bgClip="text"
				color="transparent"
				textTransform="uppercase"
				fontFamily="Roboto Slab"
				fontWeight="medium">
				Lista de carros Vazia, crie um novo carro.
			</Text>
			<Image src="/empty-car.svg" alt="Imagem de carro vazio" w="300px" />
		</VStack>
	);
};
