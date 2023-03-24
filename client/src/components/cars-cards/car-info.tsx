import { SiBitcoincash } from "react-icons/si";
import { BsSpeedometer, BsCalendar3 } from "react-icons/bs";

import { HStack, VStack, Icon, Text } from "@chakra-ui/react";

type InfoProps = {
	speed: string;
	year: number;
	price: string;
};

export const CarInfo = ({ speed, year, price }: InfoProps) => {
	const infos = [
		{ logo: BsSpeedometer, content: speed, color: "my.purple" },
		{ logo: BsCalendar3, content: year, color: "my.redLove" },
		{ logo: SiBitcoincash, content: price, color: "my.greenLight" },
	];

	return (
		<HStack
			pos="relative"
			bottom="-32%"
			transform="perspective(100px) rotateX(8deg)"
			fontSize="sm"
			shadow="sm"
			m="auto"
			w="90%"
			justify="space-between">
			{infos.map(info => (
				<VStack key={info.content} textAlign="center">
					<Icon
						fontSize={
							info.content === price
								? { base: 20, md: 24 }
								: { base: "lg", md: "xl" }
						}
						as={info.logo}
						color={info.color}
					/>
					<Text as="strong" fontSize={{ base: ".78rem", md: ".9rem" }}>
						{info.content}
					</Text>
				</VStack>
			))}
		</HStack>
	);
};
