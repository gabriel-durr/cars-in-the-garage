import {motion} from "framer-motion";
import {VStack, Image, useDisclosure} from "@chakra-ui/react";
import {ModalNewCar} from "./modal-new-car";

export const AddNewCar = () => {
	const {isOpen, onOpen, onClose} = useDisclosure();

	function handleOpenModal() {
		onOpen();
	}

	return (
		<VStack
			transform="perspective(240px) rotateX(0.1deg) rotateY(1deg)"
			w="26.25rem"
			h="42.375rem"
			bg="whiteAlpha.700"
			borderWidth="1px"
			borderStyle="solid"
			borderColor="gray.300"
			boxShadow="1px -1px 2px #7676dd9e, -12px 10px 10px #71729b76"
			rounded="lg"
			justify="center">
			<ModalNewCar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
			<Image
				as={motion.img}
				cursor="pointer"
				whileHover={{
					scale: 1.1,
				}}
				w="48"
				src="/add.svg"
				alt="add new car"
				onClick={handleOpenModal}
			/>
		</VStack>
	);
};
