import {useRouteError} from "react-router-dom";

import {Flex, Heading, Text} from "@chakra-ui/react";

type ErrorTypes = {
	msg: string;
};

//TODO criar página error 404, com icon SVG

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
