import {motion} from "framer-motion";
import {useState, WheelEvent} from "react";
import {Button, VStack, Text} from "@chakra-ui/react";

type DescriptionProps = {
	description: string;
};

export const CarDescription = ({description}: DescriptionProps) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const shortText = description.slice(0, 158);
	const fullText = description;

	const handleReadMore = () => {
		setIsExpanded(!isExpanded);
	};

	const handleDescriptionScroll = (event: WheelEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	return (
		<VStack
			as={motion.div}
			onWheel={isExpanded ? handleDescriptionScroll : undefined}
			h="142px"
			w="100%"
			py="2"
			spacing="2"
			overflowY={isExpanded ? "scroll" : "unset"}
			sx={{
				"::-webkit-scrollbar": {
					maxW: "0.2rem",
					maxH: "0.1rem",
				},
				"::-webkit-scrollbar-thumb": {
					backgroundColor: "gray",
				},
			}}>
			<Text w="98%" h="200px" fontSize="0.83rem" lineHeight="2" p="1">
				{isExpanded ? fullText : shortText}{" "}
				<Button
					ml="2"
					variant="unstyled"
					textTransform="uppercase"
					color="blue.400"
					fontSize="xs"
					size="sm"
					onClick={handleReadMore}>
					{isExpanded ? "ver menos" : "Ver Mais ..."}
				</Button>
			</Text>
		</VStack>
	);
};
