import { CarsCards } from "@components/cars-cards";
import { useUserData } from "@hooks/use-user-data";
import { AddNewCar } from "@components/add-new-car";
import { ScrollAnimation } from "@components/scroll-animation";
import { LoadingAnimation } from "@components/loading-animation";
import { DragMobileAnimation } from "@components/drag-mobile-animation";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flex, useMediaQuery } from "@chakra-ui/react";

export const DashboardGarage = () => {
	const [isAnimation, setIsAnimation] = useState(true);

	const { user, isLoading } = useUserData();
	const [isMediumDisplay] = useMediaQuery("(max-width: 768px)");

	function handleAnimationFn() {
		setIsAnimation(false);
	}

	if (isLoading) return <LoadingAnimation />;

	return (
		<Flex
			as={motion.div}
			pos="relative"
			direction={{ base: "column", lg: "row" }}
			onWheel={isAnimation ? handleAnimationFn : undefined}
			boxSize="100%"
			overflow="hidden"
			bgSize="cover"
			bgImg="/garage.jpg"
			bgPos="center"
			bgRepeat="no-repeat"
			justify={{ sm: "start", lg: "space-around" }}
			align={{ base: "center", lg: "start" }}
			gap="5"
			p={{ base: 1, lg: 6 }}>
			<CarsCards user={user} isMediumDisplay={isMediumDisplay} />

			<AddNewCar />

			{isAnimation && !isMediumDisplay && <ScrollAnimation />}

			{isAnimation && isMediumDisplay && (
				<DragMobileAnimation handleAnimationFn={handleAnimationFn} />
			)}
		</Flex>
	);
};
