import {CarEdit} from "./car-edit";
import {User} from "../../@types";
import {carBrands} from "../../utils/car-brands";

import {Heading, HStack, VStack, Image} from "@chakra-ui/react";

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
	const [{logo, name}] = carBrands.filter(car => car.name === brandIcon);

	return (
		<VStack gap="4" align="center">
			<HStack justify="space-between" w="100%">
				<HStack w="78%" justify="space-between">
					<Heading size="sm">{model}</Heading>
					<Image w="28px" src={logo} alt={name} />
				</HStack>

				<CarEdit _id={_id} description={description} price={price} />
			</HStack>
		</VStack>
	);
};
