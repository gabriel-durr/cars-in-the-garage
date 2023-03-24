import { CarInfo } from "./car-info";
import { CarOwner } from "./car-owner";
import { CarImages } from "./car-images";
import { User } from "@typings/user-car-types";
import { CarDescription } from "./car-description";
import { CarHeaderContent } from "./car-header-content";

import { motion, PanInfo, Variants } from "framer-motion";

import { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Divider,
	CardFooter,
	Flex,
} from "@chakra-ui/react";

type CardFromMobileProps = {
	user: User;
};

export const CardFromMobile = ({ user }: CardFromMobileProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	function handleOnDragEnd(
		event: MouseEvent | TouchEvent | PointerEvent,
		{ offset, velocity }: PanInfo
	) {
		const lastIndex = user.cars.length - 1;
		const direction = offset.x > 0 ? -1 : 1;

		let newIndex = currentIndex + direction;

		if (newIndex < 0) {
			newIndex = lastIndex;
		} else if (newIndex > lastIndex) {
			newIndex = 0;
		}

		setCurrentIndex(newIndex);
	}

	let carVariants: Variants = {
		visible: (index: number) => ({
			x: `${(index - currentIndex) * 100}%`,
			position: "absolute",
			height: "100%",
			width: "100%",
			zIndex: 10,
		}),
	};

	return (
		<Flex
			w={{ base: "98%", md: "90%" }}
			h={{ base: "82%", sm: "84%" }}
			order="1"
			overflow="hidden"
			position="relative"
			cursor="grab">
			{user.cars.map((car, index) => (
				<motion.div
					key={car._id}
					custom={index}
					variants={carVariants}
					animate="visible"
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					whileTap={{ cursor: "grabbing", opacity: 0.7 }}
					dragElastic={1}
					onDragEnd={handleOnDragEnd}>
					<Card rounded="lg" boxSize="100%" as={motion.div}>
						<CarImages images={car.images} />

						<CardHeader mb={{ base: 1, md: 3 }}>
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
				</motion.div>
			))}
		</Flex>
	);
};
