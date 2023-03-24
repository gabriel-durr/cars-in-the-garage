import { CarEdit } from "./car-edit";
import { carBrands } from "@utils/car-brands";
import { User } from "@typings/user-car-types";

import { Flex, HStack, Heading, Image } from "@chakra-ui/react";

type CardHeaderProps = Omit<
	User["cars"][0],
	"brand" | "images" | "year" | "speed"
>;

export const CarHeaderContent = ({
	_id,
	model,
	brandIcon,
	description,
	price,
}: CardHeaderProps) => {
	const [{ logo, name }] = carBrands.filter(car => car.name === brandIcon);

	return (
		<Flex justify="space-between" w="100%">
			<Heading size="sm" whiteSpace="nowrap">
				{model}
			</Heading>

			<HStack spacing={{ base: 8, md: 14 }}>
				<Image
					boxSize={{ base: "1.8rem", md: "2.4rem" }}
					src={logo}
					alt={name}
				/>

				<CarEdit _id={_id} description={description} price={price} />
			</HStack>
		</Flex>
	);
};
