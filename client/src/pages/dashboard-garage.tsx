import { CarEmpty } from "@components/car-empty";
import { CarsCards } from "@components/cars-cards";
import { useUserData } from "@hooks/use-user-data";
import { AddNewCar } from "@components/add-new-car";
import { ScrollAnimation } from "@components/scroll-animation";
import { LoadingAnimation } from "@components/loading-animation";
import { DragMobileAnimation } from "@components/drag-mobile-animation";

import { motion } from "framer-motion";

import { useState, WheelEvent, DragEvent } from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";

export const DashboardGarage = () => {
	const [isAnimationDesktop, setIsAnimationDesktop] = useState(true);
	const [isAnimationMobile, setIsAnimationMobile] = useState(true);

	const { user, isLoading } = useUserData();
	const [isMediumDisplay] = useMediaQuery("(max-width: 768px)");

	const carListLenght = !isLoading && user.cars.length;
	const isExistsCars = !!carListLenght;

	const isAnimationScroll =
		isAnimationDesktop && !isMediumDisplay && carListLenght > 1;

	const isAnimationDrag =
		isAnimationMobile && isMediumDisplay && carListLenght > 1;

	function handleAnimationFn({
		type,
	}: WheelEvent<HTMLDivElement> | DragEvent<HTMLDivElement>) {
		return type === "wheel"
			? setIsAnimationDesktop(false)
			: setIsAnimationMobile(false);
	}

	if (isLoading) return <LoadingAnimation />;

	return (
		<Flex
			as={motion.div}
			pos="relative"
			direction={{ base: "column", lg: "row" }}
			onWheel={isAnimationDesktop ? handleAnimationFn : undefined}
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
			{isExistsCars ? (
				<CarsCards user={user} isMediumDisplay={isMediumDisplay} />
			) : (
				<CarEmpty />
			)}

			<AddNewCar />

			{isAnimationScroll && <ScrollAnimation />}

			{isAnimationDrag && (
				<DragMobileAnimation handleAnimationFn={handleAnimationFn} />
			)}
		</Flex>
	);
};
