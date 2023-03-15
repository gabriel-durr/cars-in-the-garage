import { CarsCards } from "@components/cars-cards";
import { useUserData } from "@hooks/use-user-data";
import { AddNewCar } from "@components/add-new-car";
import { LoadingAnimation } from "@components/loading-animation";
import scrollAnimation from "@animations/scroll-mouse-animarion.json";

import Lottie from "lottie-react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flex, Heading, VStack } from "@chakra-ui/react";

export const DashboardGarage = () => {
	const [isAnimation, setIsAnimation] = useState(true);

	const { user, isLoading } = useUserData();

	function handleScrolAnimation() {
		setIsAnimation(false);
	}

	const scrollVariants = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	};

	if (isLoading) return <LoadingAnimation />;

	return (
		<Flex
			as={motion.div}
			variants={scrollVariants}
			onWheel={isAnimation ? handleScrolAnimation : undefined}
			boxSize="100%"
			bgSize="cover"
			bgImg="/garage.jpg"
			bgPos="center"
			bgRepeat="no-repeat"
			justify="space-around"
			align="start"
			gap="5"
			p="6">
			<CarsCards user={user} />
			{isAnimation && (
				<VStack
					pos="absolute"
					boxSize="377px"
					align="center"
					textAlign="center">
					<Heading fontFamily="Roboto Slab" color="#fff">
						Use o Scroll para mover os carros
					</Heading>
					<Lottie animationData={scrollAnimation} style={{ width: "80%" }} />
				</VStack>
			)}

			<AddNewCar />
		</Flex>
	);
};
