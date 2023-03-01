import {AddNewCar} from "../components/add-new-car";
import {CarsCards} from "../components/cars-cards";
import {useUserData} from "../hooks/use-user-data";
import {LoadingAnimation} from "../components/loading-animation";
import scrollAnimation from "../animations/scroll-mouse-animarion.json";

import {Box, Flex} from "@chakra-ui/react";
import Lottie from "lottie-react";
import {useEffect, useState} from "react";

export const Dashboard = () => {
	const {user, isLoading} = useUserData();
	const [isAnimation, setIsAnimation] = useState(true);

	if (isLoading) return <LoadingAnimation />;

	async function test() {
		setIsAnimation(true);
		await new Promise(resolve => setTimeout(resolve, 7000));
		setIsAnimation(false);
	}

	useEffect(() => {
		test();
	}, []);

	return (
		<Flex
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
				<Box pos="absolute" boxSize="400px">
					<Lottie animationData={scrollAnimation} />
				</Box>
			)}

			<AddNewCar />
		</Flex>
	);
};
