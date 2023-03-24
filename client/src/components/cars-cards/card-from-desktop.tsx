import { CarInfo } from "./car-info";
import { CarOwner } from "./car-owner";
import { CarImages } from "./car-images";
import { User } from "@typings/user-car-types";
import { CarDescription } from "./car-description";
import { CarHeaderContent } from "./car-header-content";

import { Variants, motion } from "framer-motion";

import { useState, useRef, useCallback, WheelEvent } from "react";
import {
	Card,
	Divider,
	CardBody,
	CardHeader,
	CardFooter,
} from "@chakra-ui/react";

type CardFromDesktopProps = {
	user: User;
};

export const CardFromDesktop = ({ user }: CardFromDesktopProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);
	const itemRef = useRef<HTMLDivElement>(null);

	function moveItemCenterOnScroll(newIndex: number) {
		const container = containerRef.current;
		const item = itemRef.current;

		if (container && item) {
			const itemWidth = item.offsetWidth;
			const containerWidth = container.offsetWidth;
			const scrollLeft =
				itemWidth * newIndex - (containerWidth - itemWidth) / 2;
			container.scrollTo({ left: scrollLeft, behavior: "smooth" });
		}
	}

	const handleScroll = useCallback(
		(event: WheelEvent<HTMLDivElement>) => {
			const lastIndex = user.cars.length - 1;
			const direction = event.deltaY > 0 ? 1 : -1;

			let newIndex = currentIndex + direction;

			if (newIndex < 0) {
				newIndex = lastIndex;
			} else if (newIndex > lastIndex) {
				newIndex = 0;
			}

			setCurrentIndex(newIndex);
			moveItemCenterOnScroll(newIndex);
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
		<motion.div
			ref={containerRef}
			onWheel={handleScroll}
			style={{
				display: "flex",
				height: "100%",
				width: "100%",
				overflow: "hidden",
				flex: 1,
				boxShadow: "0 13px 15.5px -13px #737373",
			}}>
			{user.cars.map((car, index) => (
				<Card
					key={car._id}
					as={motion.div}
					ref={itemRef}
					minW={{ lg: "48%", xl: "40%" }}
					h="100%"
					variants={carVariants}
					animate={index === currentIndex ? "visible" : "hidden"}
					rounded="lg">
					<CarImages images={car.images} />

					<CardHeader mb="4">
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
						<CarOwner />
					</CardFooter>
				</Card>
			))}
		</motion.div>
	);
};
