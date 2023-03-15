import { ModalNewCar } from "./modal-new-car";

import { motion } from "framer-motion";
import { VStack, Image, useDisclosure } from "@chakra-ui/react";

export const AddNewCar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	function handleOpenModal() {
		onOpen();
	}

	return (
		<VStack
			w="26.25rem"
			h="41.70rem"
			bg="whiteAlpha.700"
			borderWidth="1px"
			borderStyle="solid"
			borderColor="gray.300"
			boxShadow="1px -1px 2px #7676dd9e, -12px 10px 10px #71729b76"
			rounded="2"
			justify="center">
			<ModalNewCar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

			<Image
				as={motion.img}
				cursor="pointer"
				w="36"
				whileHover={{
					scale: 1.01,
				}}
				transition="all .2s"
				src="/add.svg"
				alt="add new car"
				onClick={handleOpenModal}
			/>
		</VStack>
	);
};
