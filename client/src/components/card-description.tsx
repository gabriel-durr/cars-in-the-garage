import {useState} from "react";
import {Box, Button, VStack, Text} from "@chakra-ui/react";

type DescriptionProps = {
	description: string;
};

export const CardDescription = ({description}: DescriptionProps) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const shortText = description.slice(0, 164);
	const fullText = description;

	const handleReadMore = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<VStack
			h="120px"
			w="100%"
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
