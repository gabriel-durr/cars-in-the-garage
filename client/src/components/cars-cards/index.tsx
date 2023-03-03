import {User} from "../../@types";
import {CarInfo} from "./car-info";
import {CarOwner} from "./car-owner";
import {CarImages} from "./car-images";
import {CarDescription} from "./car-description";
import {CarHeaderContent} from "./car-header-content";

import {motion, Variants} from "framer-motion";
import {useState, useRef, useCallback, WheelEvent} from "react";
import {
	Flex,
	Card,
	CardBody,
	CardHeader,
	Divider,
	CardFooter,
	HStack,
} from "@chakra-ui/react";

export type CarsCardsProps = {
	user: User;
};

export const CarsCards = ({user}: CarsCardsProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);
	const itemRef = useRef<HTMLDivElement>(null);

	const handleScroll = useCallback(
		(event: WheelEvent<HTMLDivElement>) => {
			const direction = event.deltaY > 0 ? 1 : -1;
			let newIndex = currentIndex + direction;
			if (newIndex < 0) {
				newIndex = user.cars.length - 1;
			} else if (newIndex >= user.cars.length) {
				newIndex = 0;
			}
			setCurrentIndex(newIndex);

			const container = containerRef.current;
			const item = itemRef.current;

			if (container && item) {
				const itemWidth = item.offsetWidth;
				const containerWidth = container.offsetWidth;
				const scrollLeft =
					itemWidth * newIndex - (containerWidth - itemWidth) / 2;
				container.scrollTo({left: scrollLeft, behavior: "smooth"});
			}
		},
		[currentIndex, user.cars.length]
	);

	const carVariants: Variants = {
		visible: {
			opacity: 1,
			scale: 0.96,
			x: 0,
			transition: {
				duration: 0.4,
			},
			boxShadow: "4px -1px 2px #bec4ff2d, -4px 4px 1px #bec4ff2d",
		},
		hidden: {
			opacity: 0.2,
			scale: 0.7,
			userSelect: "none",
			pointerEvents: "none",
		},
	};

	return (
		<Flex
			as={motion.div}
			ref={containerRef}
			onWheel={handleScroll}
			bg="blackAlpha.400"
			overflow="hidden"
			flex="1"
			boxShadow="sm">
			{user.cars.map((car, index) => (
				<Card
					key={car._id}
					as={motion.div}
					ref={itemRef}
					minW="40%"
					variants={carVariants}
					animate={index === currentIndex ? "visible" : "hidden"}
					rounded="lg">
					<CarImages images={car.images} />

					<CardHeader>
						<CarHeaderContent
							_id={car._id}
							brandIcon={car.brandIcon}
							description={car.description}
							model={car.model}
							price={car.price}
						/>
						<CarInfo speed={car.speed} year={car.year} price={car.price} />
					</CardHeader>
					<CardBody
						display="flex"
						flexDir="column"
						alignItems="flex-start"
						justifyContent="space-around">
						<CarDescription description={car.description} />
						<Divider />
					</CardBody>
					<CardFooter>
						<CarOwner name={user.name} email={user.email} />
					</CardFooter>
				</Card>
			))}
		</Flex>
	);
};
