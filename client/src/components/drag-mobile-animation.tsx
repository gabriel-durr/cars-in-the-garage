import dAnimation from "@animations/drag-mobile.json";

import Lottie from "lottie-react";
import { motion } from "framer-motion";

import { AbsoluteCenter, Heading } from "@chakra-ui/react";

type DragMobileProps = {
	handleAnimationFn(): void;
};

export const DragMobileAnimation = ({ handleAnimationFn }: DragMobileProps) => {
	return (
		<AbsoluteCenter
			as={motion.div}
			display="flex"
			zIndex="overlay"
			boxSize="100%"
			bg="blackAlpha.700"
			alignItems="center"
			justifyContent="center"
			flexDir="column"
			onClick={handleAnimationFn}>
			<Heading fontFamily="Roboto Slab" color="white" size="lg">
				Arraste para mover os carros
			</Heading>
			<Lottie animationData={dAnimation} style={{ width: "80%" }} />
		</AbsoluteCenter>
	);
};
