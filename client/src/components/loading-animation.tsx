import carAnimation from "@animations/car-animation.json";

import Lottie from "lottie-react";

import { Spinner, AbsoluteCenter } from "@chakra-ui/react";

export const LoadingAnimation = () => {
	return (
		<AbsoluteCenter
			zIndex="tooltip"
			display="flex"
			flexDir="column"
			top={{ base: "42%", lg: "44%" }}
			alignItems="center"
			gap="8"
			boxSize={["20rem", "22rem", "26rem", "27.4rem", "31.25rem"]}
			transform="translate(-50%, -50%)">
			<Lottie animationData={carAnimation} />
			<Spinner
				thickness="7px"
				speed="0.65s"
				emptyColor="gray.900"
				color="my.mustard"
				size={{ base: "lg", md: "xl" }}>
				Carregando
			</Spinner>
		</AbsoluteCenter>
	);
};
