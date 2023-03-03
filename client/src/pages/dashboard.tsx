import {CarsCards} from "../components/cars-cards";
import {useUserData} from "../hooks/use-user-data";
import {AddNewCar} from "../components/add-new-car";
import {LoadingAnimation} from "../components/loading-animation";
import scrollAnimation from "../animations/scroll-mouse-animarion.json";

import Lottie from "lottie-react";
import {motion} from "framer-motion";
import {useState} from "react";
import {Flex, Heading, VStack} from "@chakra-ui/react";

export const Dashboard = () => {
	const {user, isLoading} = useUserData();
	const [isAnimation, setIsAnimation] = useState(true);

	if (isLoading) return <LoadingAnimation />;

	function test() {
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

	return (
		<Flex
			as={motion.div}
			variants={scrollVariants}
			onWheel={isAnimation ? test : undefined}
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
					<Lottie animationData={scrollAnimation} style={{width: "80%"}} />
				</VStack>
			)}

			<AddNewCar />
		</Flex>
	);
};
