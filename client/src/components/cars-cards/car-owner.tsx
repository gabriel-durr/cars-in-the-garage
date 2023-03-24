import { Flex, Heading, Text } from "@chakra-ui/react";

export const CarOwner = () => {
	return (
		<Flex direction="column">
			<Heading
				alignSelf="start"
				w="max"
				fontSize={{ base: ".79rem", md: ".9rem" }}
				textTransform="uppercase"
				borderBottom="1px solid #6f6f6f40">
				Outras informações
			</Heading>

			<Text color="gray.800" fontSize="0.8rem" w="100%" align="start">
				...
			</Text>
		</Flex>
	);
};
