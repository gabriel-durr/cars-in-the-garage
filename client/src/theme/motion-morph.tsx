import type {HTMLChakraProps} from "@chakra-ui/react";
import {motion, isValidMotionProp} from "framer-motion";
import {chakra, shouldForwardProp} from "@chakra-ui/react";

type MotionType = keyof typeof motion;

type MotionProps = HTMLChakraProps<MotionType>;

export const motionMorph = (type: MotionType) => {
	const Component = motion[type];
	const ChakraComponent = chakra(Component, {
		shouldForwardProp: prop =>
			isValidMotionProp(prop) || shouldForwardProp(prop),
	});

	return ChakraComponent as React.FC<MotionProps>;
};
