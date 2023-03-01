import {Flex, Heading, Text} from "@chakra-ui/react";
import {useRouteError} from "react-router-dom";

type ErrorTypes = {
	msg: string;
};

export const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<Flex boxSize="full">
			<Heading as="h1">Oops!</Heading>

			<Text>Desculpe, ocorreu um erro inesperado!</Text>
			<Text as="em">Error 404</Text>
		</Flex>
	);
};
