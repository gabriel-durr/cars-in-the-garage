import sAnimation from "@animations/scroll-mouse-animation.json";

import Lottie from "lottie-react";

import { VStack, Heading } from "@chakra-ui/react";

export const ScrollAnimation = () => {
	return (
		<VStack pos="absolute" boxSize="377px" align="center" textAlign="center">
			<Heading fontFamily="Roboto Slab" color="#fff">
				Use o Scroll para mover os carros
			</Heading>
			<Lottie animationData={sAnimation} style={{ width: "80%" }} />
		</VStack>
	);
};
