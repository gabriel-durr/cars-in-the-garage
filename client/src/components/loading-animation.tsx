import carAnimation from "@animations/lottie-car-animation.json";

import Lottie from "lottie-react";

import {Spinner, VStack} from "@chakra-ui/react";

export const LoadingAnimation = () => {
	return (
		<VStack
			pos="absolute"
			zIndex="tooltip"
			boxSize="31.25rem"
			top="50%"
			left="50%"
			transform="translate(-50%, -50%)">
			<Lottie animationData={carAnimation} />
			<Spinner
				thickness="7px"
				speed="0.65s"
				emptyColor="gray.900"
				color="my.mustard"
				size="lg">
				Carregando
			</Spinner>
		</VStack>
	);
};
