import dAnimation from "@animations/drag-mobile.json";

import Lottie from "lottie-react";
import { motion } from "framer-motion";

import { WheelEvent, DragEvent } from "react";
import { AbsoluteCenter, Heading } from "@chakra-ui/react";

type DragMobileProps = {
	handleAnimationFn({
		type,
	}: WheelEvent<HTMLDivElement> | DragEvent<HTMLDivElement>): void;
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
			drag="x"
			dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
			dragElastic={false}
			onDrag={handleAnimationFn}>
			<Heading fontFamily="Roboto Slab" color="white" size="lg">
				Arraste para mover os carros
			</Heading>
			<Lottie animationData={dAnimation} style={{ width: "80%" }} />
		</AbsoluteCenter>
	);
};
