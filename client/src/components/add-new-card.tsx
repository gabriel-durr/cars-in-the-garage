import {motion} from "framer-motion";
import {VStack, Image} from "@chakra-ui/react";

export const AddNewCard = () => {
	return (
		<VStack
			transform="perspective(240px) rotateX(0.1deg) rotateY(1deg)"
			w="420px"
			h="740px"
			bg="whiteAlpha.700"
			borderWidth="1px"
			borderStyle="solid"
			borderColor="gray.300"
			boxShadow="1px -1px 2px #7676dd9e, -12px 10px 10px #71729b76"
			rounded="lg"
			justify="center">
			<Image
				as={motion.img}
				cursor="pointer"
				whileHover={{
					scale: 1.1,
				}}
				w="48"
				src="/add.svg"
				alt="add new car"
			/>
		</VStack>
	);
};
