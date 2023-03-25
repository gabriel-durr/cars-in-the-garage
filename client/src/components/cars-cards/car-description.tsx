import { motion } from "framer-motion";
import { useState, WheelEvent } from "react";
import { Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

type DescriptionProps = {
	description: string;
};

export const CarDescription = ({ description }: DescriptionProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const sizeTextInBreakpoints = useBreakpointValue({
		base: 172,
		sm: 204,
		md: 418,
		lg: 184,
		xl: 286,
	});

	const fullText = description;
	const shortText = description.slice(0, sizeTextInBreakpoints);

	const handleReadMore = () => {
		setIsExpanded(!isExpanded);
	};

	const handleDescriptionScroll = (event: WheelEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	return (
		<Flex
			as={motion.div}
			onWheel={isExpanded ? handleDescriptionScroll : undefined}
			w="100%"
			overflowY={isExpanded ? "scroll" : undefined}
			sx={{
				"::-webkit-scrollbar": {
					maxW: "0.2rem",
					maxH: "0.1rem",
				},
				"::-webkit-scrollbar-thumb": {
					bg: "gray",
				},
			}}>
			<Text
				bg="whiteAlpha.100"
				w="100%"
				h={{ base: "100px", md: "142px", lg: "102px", xl: "132px" }}
				fontSize={{ base: ".78rem", md: ".83rem" }}
				lineHeight="revert-layer">
				{isExpanded ? fullText : shortText}{" "}
				<Button
					ml="2"
					variant="unstyled"
					textTransform="uppercase"
					color="blue.400"
					fontSize={{ base: "2xs", md: "xs" }}
					size={{ base: "xs", md: "sm" }}
					onClick={handleReadMore}>
					{isExpanded ? "ver menos" : "Ver Mais ..."}
				</Button>
			</Text>
		</Flex>
	);
};
