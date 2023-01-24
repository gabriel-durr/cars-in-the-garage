import {BsSpeedometer, BsCalendar3} from "react-icons/bs";
import {SiBitcoincash} from "react-icons/si";
import {HStack, VStack, Icon, Text} from "@chakra-ui/react";

type InfoProps = {
	speed: string;
	year: number;
	price: string;
};

export const CardInfo = ({speed, year, price}: InfoProps) => {
	const infos = [
		{logo: BsSpeedometer, content: speed},
		{logo: BsCalendar3, content: year},
		{logo: SiBitcoincash, content: price},
	];

	return (
		<HStack
			pos="relative"
			bottom="-28%"
			transform="perspective(100px) rotateX(8deg)"
			fontSize="sm"
			w="full"
			justify="space-between">
			{infos.map(info => (
				<VStack key={info.content} textAlign="center">
					<Icon fontSize={info.content === price ? 24 : "xl"} as={info.logo} />
					<Text as="strong">{info.content}</Text>
				</VStack>
			))}
		</HStack>
	);
};
